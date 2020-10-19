/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");
var config = require("../config/config");

// create website on remote server
plan.remote("create-website", function (remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_root = "/var/www/" + $.domain_name;
  var doc_root = www_root + "/html/";
  var git_repo_root = www_root + "/repo/";

  var apache2_conf_file = config.apache2_conf_dir + $.domain_name + ".conf";
  var virtual_host_str = "<VirtualHost *:" + config.http_port_number + ">";
  var server_admin_str = "ServerAdmin me@aravinth.info";
  var server_name_str = "ServerName " + $.domain_name;
  var server_alias_str = "ServerAlias www." + $.domain_name;
  var document_root_str = "DocumentRoot " + doc_root;
  var error_log_str =
    "ErrorLog " + config.aracloud_root + "logs/" + $.domain_name + ".error.log";
  var custom_log_str =
    "CustomLog " +
    config.aracloud_root +
    "logs/" +
    $.domain_name +
    ".access.log combined";
  var virtual_host_end_str = "</VirtualHost>";

  //setup repo & document root
  remote.rm("-rf " + www_root);
  remote.mkdir("-p " + doc_root);
  remote.git(
    "clone -b " + $.git_branch + " " + $.git_repo + " " + git_repo_root
  );
  //setup submodules, if any
  remote.with("cd " + git_repo_root, function () {
    remote.git("submodule update --init");
  });
  remote.cp("-r " + git_repo_root + $.git_src_dir + "* " + doc_root);

  // create apache2 config
  remote.rm("-f " + apache2_conf_file);
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
  remote.with("cd " + config.apache2_conf_dir, function () {
    remote.exec("a2ensite " + $.domain_name + ".conf");
  });
  remote.exec("apache2ctl configtest");
  remote.exec("systemctl reload apache2");
  remote.exec("systemctl restart apache2");
});

// Transfer necessary files from local to remote
plan.local("create-website", function (local) {
  local.hostname();

  //  Update flightplan deployment scripts
  local.transfer("./", config.aracloud_root);
});

// start necessary services
plan.remote("create-website", function (remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_user = $.username + ":" + $.username;

  // setup files
  remote.chmod("+x " + config.aracloud_root + "deploy.sh");
  remote.chown("-R " + www_user + " " + config.aracloud_root);
  remote.chown("-R " + www_user + " " + config.aracloud_root + "*");

  //reload webhook
  remote.exec("supervisorctl reload");
});
