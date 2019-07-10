var plan = require('flightplan');

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

plan.local('local-deploy', function(local) {
  transport.log('deploying');
  transport.hostname();
  transport.exec('uname');
  console.log(plan.runtime)
});

plan.remote('remote-setup', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

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

  // console.log(www_root)
  // console.log(doc_root)
  // console.log(git_repo_root)
  // console.log(www_user)
  // console.log(apache2_conf_dir)
  // console.log(apache2_conf_file)
  // console.log(virtual_host_str)
  // console.log(virtual_host_end_str)
  // console.log(server_admin_str)
  // console.log(server_name_str)
  // console.log(server_alias_str)
  // console.log(document_root_str)
  // console.log(error_log_str)
  // console.log(custom_log_str)


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

});
