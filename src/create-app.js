/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// TODO: install command as scripts arametrics-clockify-google_install.sh

var plan = require("flightplan");
var config = require("../config/config");

// definitions
var app_root = undefined;
var app_dir = undefined;

// Set up an app in the cloud
plan.remote("create-app", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  app_root = config.apps_root + $.app_name + "/";
  app_dir = app_root + "app/";
  app_repo_dir = app_root + "repo/";

  //Create app folder with necessary folders
  remote.rm("-rf " + app_root);
  remote.mkdir("-p " + app_dir);
  remote.git(
    "clone -b " + $.git_branch + " " + $.git_repo + " " + app_repo_dir
  );

  //setup submodules, if any
  remote.with("cd " + app_repo_dir, function () {
    remote.git("submodule update --init");
  });
  remote.cp("-r " + app_repo_dir + $.git_src_dir + "* " + app_dir);

  // place cronjob
  remote.cp(app_dir + "config/" + $.app_name + ".cron" + " " + config.cron_dir);
  remote.with("cd " + config.cron_dir, function () {
    remote.exec("crontab " + $.app_name + ".cron");
  });

  // install depencies
  remote.with("cd " + app_dir, function () {
    remote.exec("pip install -r requirements.txt");
  });

});

// Transfer necessary files from local to remote
plan.local("create-app", function (local) {
  local.hostname();

  // definitions
  var $ = local._context.hosts[0];

  // copy secrets
  local.with("cd " + $.local_src_dir, () => {
    local.transfer($.local_secrets_dir, app_dir);
  });

  //  Update flightplan deployment scripts
  local.transfer("./", config.aracloud_root);
});
