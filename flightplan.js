/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */


// includes
var plan = require('flightplan');

// server
plan.target('araCloud', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  webhook_dir: '/var/www/webhook',
});

// websites
plan.target('aracreate.com', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'test.aracreate.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
  git_branch: 'dev',
  git_src_dir: ''
});


//----------------------------------------------//
// Setup Remote Server
//----------------------------------------------//

// create all the necessary folders
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var webhook_dir = $.webhook_dir;
  var www_user = $.username + ':' + $.username;

  //setup webhook
  remote.rm('-rf ' + webhook_dir);
  remote.mkdir('-p ' + webhook_dir);

  //setup nodejs
  remote.exec('apt install npm');
  remote.exec('npm install -g n');
  remote.exec('n latest');

  //setup flightplan
  remote.exec('npm install -g flightplan');
  remote.with('cd ' + webhook_dir, function() {
    remote.exec('npm install flightplan');
  });

});

// transfer necessary files from local host
plan.local('remote-setup-server', function(local) {
  local.hostname();

  // definitions
  var webhook_dir = '/var/www/webhook';
  var supervisor_dir = '/etc/supervisor/conf.d';

  var files = ['./webhook.json', './flightplan.js', './deploy.sh'];
  local.transfer(files, webhook_dir);

  // transfer supervisor conf for webhook
  var files = ['./webhook.conf'];
  local.transfer(files, supervisor_dir);
});

// start necessary services
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var webhook_dir = $.webhook_dir;
  var www_user = $.username + ':' + $.username;

  // setup files
  remote.chmod('+x ' + webhook_dir + '/deploy.sh');
  remote.chown('-R ' + www_user + ' ' + webhook_dir);
  remote.chown('-R ' + www_user + ' ' + webhook_dir + '*');


  // reload webhook
  remote.exec('supervisorctl reload');
});


//----------------------------------------------//
// Setup Website
//----------------------------------------------//

// create website on remote server
plan.remote('remote-setup-website', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_root = '/var/www/' + $.domain_name;
  var doc_root = www_root + '/html/';
  var git_repo_root = www_root + '/repo/';
  var www_user = 'root:root';
  var apache2_conf_dir = '/etc/apache2/sites-available/';
  var apache2_conf_file = '/etc/apache2/sites-available/' + $.domain_name + '.conf';
  var virtual_host_str = '<VirtualHost *:' + $.port_number + '>';
  var server_admin_str = "ServerAdmin me@aravinth.info";
  var server_name_str = "ServerName " + $.domain_name;
  var server_alias_str = 'ServerAlias www.' + $.domain_name;
  var document_root_str = 'DocumentRoot ' + doc_root;
  var error_log_str = 'ErrorLog ${APACHE_LOG_DIR}/test.aracreate.com.error.log';
  var custom_log_str = 'CustomLog ${APACHE_LOG_DIR}/test.aracreate.com.access.log combined';
  var virtual_host_end_str = '</VirtualHost>';


  //setup repo & document root
  remote.rm('-rf ' + www_root);
  remote.mkdir('-p ' + doc_root);
  // remote.chown('-R ' + www_user + ' ' + doc_root);
  remote.git('clone -b ' + $.git_branch + ' ' + $.git_repo + ' ' + git_repo_root);
  // remote.chown('-R ' + www_user + ' ' + git_repo_root + '*');
  remote.cp('-r ' + git_repo_root + '* ' + doc_root);
  // remote.chown('-R ' + www_user + ' ' + doc_root + '*');


  // create apache2 config
  remote.rm('-f ' + apache2_conf_file);
  remote.touch(apache2_conf_file);
  // remote.chown(www_user + ' ' + apache2_conf_file);
  remote.exec('echo "' + virtual_host_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_admin_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_name_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_alias_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + document_root_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + error_log_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + custom_log_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + virtual_host_end_str + '" >> ' + apache2_conf_file);

  //enable apache site
  remote.with('cd ' + apache2_conf_dir, function() {
    remote.exec('a2ensite ' + $.domain_name + '.conf');
  });
  remote.exec('apache2ctl configtest');
  remote.exec('systemctl reload apache2');
  remote.exec('systemctl restart apache2');

});

// transfer webhook file from local host
plan.local('remote-setup-website', function(local) {
  local.hostname();

  // definitions
  var webhook_dir = '/var/www/webhook';

  var files = ['./webhook.json'];
  local.transfer(files, webhook_dir);
});

// start necessary services
plan.remote('remote-setup-website', function(remote) {
  remote.hostname();

  //reload webhook
  remote.exec('supervisorctl reload');
});




//----------------------------------------------//
// deploy Website
//----------------------------------------------//

// deploy website on remote server
plan.local('local-deploy-website', function(local) {
  local.hostname();


  // definitions
  var $ = local._context.hosts[0];
  var www_root = '/var/www/' + $.domain_name;
  var doc_root = www_root + '/html/';
  var git_repo_root = www_root + '/repo/';
  var www_user = 'aravinth:aravinth';

  // pull new changes
  local.with('cd ' + git_repo_root, function() {
    local.sudo('git checkout ' + $.git_branch);
    local.sudo('git pull');
  });

  // install source files
  local.sudo('rm -rf ' + doc_root);
  local.sudo('mkdir -p ' + doc_root);
  local.sudo('cp -rf ' + git_repo_root + $.git_src_dir + '* ' + doc_root);

});
