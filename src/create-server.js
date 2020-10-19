/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");
var config = require("../config/config");

// set up all the necessary folders and services
plan.remote("create-server", function (remote) {
  remote.hostname();

  //set up aracloud root directory
  remote.rm("-rf " + config.aracloud_root);
  remote.mkdir("-p " + config.aracloud_root + "logs/");
  remote.rm("-r " + config.supervisor_dir + config.webhook_supervisor_conf);
  remote.rm("-r " + config.apache2_conf_dir + config.apache_default_conf);

  //install nodejs
  remote.exec("apt-get install npm");
  remote.exec("npm install -g n");
  remote.exec("n " + config.node_version);

  //install flightplan
  remote.exec(
    "export USER=root && npm install -g flightplan@" + config.flightplan_version
  );
});

// transfer necessary files from local host
plan.local("create-server", function (local) {
  local.hostname();

  //  Update flightplan deployment scripts
  var files_folders = local.exec('git ls-files && git ls-files --others --exclude-standard', {silent: true});
  local.transfer(files_folders, config.aracloud_root);

  // transfer supervisor conf for webhook
  local.with("cd ./config", () => {
    local.transfer(config.webhook_supervisor_conf, config.supervisor_dir);
  });

  // transfer default apache2 site config
  local.with("cd ./config", () => {
    local.transfer(config.apache_default_conf, config.apache2_conf_dir);
  });
});

// start necessary services
plan.remote("create-server", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var www_user = $.username + ":" + $.username;

  // change ownership
  remote.chown("-R " + www_user + " " + config.aracloud_root);
  remote.chown("-R " + www_user + " " + config.aracloud_root + "*");
  remote.chown("-R " + www_user + " " + config.supervisor_dir + config.webhook_supervisor_conf);
  remote.chown(
    "-R " + www_user + " " + config.apache2_conf_dir + config.apache_default_conf
  );

  // reload supervisor & apache for new config
  remote.exec("supervisorctl reload");
  remote.exec("systemctl restart apache2");
});
