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
  agent: process.env.SSH_AUTH_SOCK
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
  git_dir: ''
});


//----------------------------------------------//
// Setup Remote Server
//----------------------------------------------//

// create all the necessary folders
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();

  // definitions
  var webhook_dir = '/var/www/webhook';

  //setup webhook
  remote.rm('-rf ' + webhook_dir);
  remote.mkdir('-p ' + webhook_dir);
});

// transfer necessary files from local host
plan.local('remote-setup-server', function(local) {
  local.hostname();

  // definitions
  var webhook_dir = '/var/www/webhook';
  var supervisor_dir = '/etc/supervisor/conf.d';

  var files = ['./webhook.json', './flightplan.js'];
  local.transfer(files, webhook_dir);

  // transfer supervisor conf for webhook
  var files = ['./webhook.conf'];
  local.transfer(files, supervisor_dir);
});

// start necessary services
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();

  // definitions

  //reload webhook
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
  var www_user = 'aravinth:aravinth';
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
  remote.chown('-R ' + www_user + ' ' + doc_root);
  remote.git('clone -b ' + $.git_branch + ' ' + $.git_repo + ' ' + git_repo_root);
  remote.cp('-r ' + git_repo_root + '* ' + doc_root);
  remote.chown('-R ' + www_user + ' ' + doc_root + '*');


  // create apache2 config
  remote.rm('-f ' + apache2_conf_file);
  remote.touch(apache2_conf_file);
  remote.chown(www_user + ' ' + apache2_conf_file);
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
  console.log(plan.runtime)
});
