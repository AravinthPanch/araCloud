/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");
var config = require("../config/config");

// create website on remote server
plan.remote("create-website", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var website_root = "/var/www/" + $.domain_name_reversed;
  var website_dir = website_root + "/html/";
  var git_repo_root = website_root + "/repo/";

  //Create app folder with necessary folders
  remote.rm("-rf " + website_root);
  remote.mkdir("-p " + website_dir);
  remote.git(
    "clone -b " + $.git_branch + " " + $.git_repo + " " + git_repo_root
  );

  //setup submodules, if any
  remote.with("cd " + git_repo_root, function () {
    remote.git("submodule update --init");
  });
  remote.cp("-r " + git_repo_root + $.git_src_dir + "* " + website_dir);

  // create apache2 config
  var apache2_conf_file =
    config.apache2_conf_dir + $.domain_name_reversed + ".conf";
  var virtual_host_str = "<VirtualHost *:" + config.http_port_number + ">";
  var server_admin_str = "ServerAdmin " + config.host;
  var server_name_str = "ServerName " + $.domain_name;
  var server_alias_str = "ServerAlias www." + $.domain_name;
  var document_root_str = "DocumentRoot " + website_dir;
  var error_log_str =
    "ErrorLog " +
    config.aracloud_root +
    "logs/" +
    $.domain_name_reversed +
    ".error.log";
  var custom_log_str =
    "CustomLog " +
    config.aracloud_root +
    "logs/" +
    $.domain_name_reversed +
    ".access.log combined";
  var virtual_host_end_str = "</VirtualHost>";

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
    remote.exec("a2ensite " + $.domain_name_reversed + ".conf");
  });
  remote.exec("apache2ctl configtest");
  remote.exec("systemctl restart apache2");
});

// Transfer necessary files from local to remote
plan.local("create-website", function (local) {
  local.hostname();

  //  Update flightplan deployment scripts
  var files_folders = local.exec(
    "git ls-files && git ls-files --others --exclude-standard",
    { silent: true }
  );
  local.transfer(files_folders, config.aracloud_root);
});

// start necessary services
plan.remote("create-website", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var www_user = $.username + ":" + $.username;

  // setup files
  remote.chown("-R " + www_user + " " + config.aracloud_root);
  remote.chown("-R " + www_user + " " + config.aracloud_root + "*");

  //reload webhook
  remote.exec("supervisorctl reload");
});
