/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require('flightplan');

// create website on remote server
plan.remote('remote-setup-website', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_root = '/var/www/' + $.domain_name;
  var doc_root = www_root + '/html/';
  var git_repo_root = www_root + '/repo/';
  var www_user = $.username + ':' + $.username;

  var apache2_conf_dir = '/etc/apache2/sites-available/';
  var apache2_conf_file = '/etc/apache2/sites-available/' + $.domain_name + '.conf';

  var virtual_host_str = '<VirtualHost *:' + $.port_number + '>';
  var server_admin_str = "ServerAdmin me@aravinth.info";
  var server_name_str = "ServerName " + $.domain_name;
  var server_alias_str = 'ServerAlias www.' + $.domain_name;
  var document_root_str = 'DocumentRoot ' + doc_root;
  var error_log_str = 'ErrorLog ' + $.webhook_dir + 'log/' + $.domain_name + '.error.log';
  var custom_log_str = 'CustomLog ' + $.webhook_dir + 'log/' + $.domain_name + '.access.log combined';
  var virtual_host_end_str = '</VirtualHost>';


  //setup repo & document root
  remote.rm('-rf ' + www_root);
  remote.mkdir('-p ' + doc_root);
  remote.git('clone -b ' + $.git_branch + ' ' + $.git_repo + ' ' + git_repo_root);
  remote.cp('-r ' + git_repo_root + $.git_src_dir + '* ' + doc_root);

  // create apache2 config
  remote.rm('-f ' + apache2_conf_file);
  remote.touch(apache2_conf_file);
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
  var webhook_dir = '/var/www/webhook/';

  var files = [
    './webhook.json',
    './flightplan.js',
    './create-server.js',
    './create-website.js',
    './deploy-website.js',
    './deploy.sh'
  ];
  local.transfer(files, webhook_dir);
});

// start necessary services
plan.remote('remote-setup-website', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var webhook_dir = $.webhook_dir;
  var www_user = $.username + ':' + $.username;

  // setup files
  remote.chown('-R ' + www_user + ' ' + webhook_dir);
  remote.chown('-R ' + www_user + ' ' + webhook_dir + '*');

  //reload webhook
  remote.exec('supervisorctl reload');
});
