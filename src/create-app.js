/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// TODO: cronjob placement based on host input or have the app always running in supervisorctl and have tasker insider
// TODO: supervisorctl placement based on input
// TODO: send aracloud_root,app_name,app_root as commandline arguments to install, run scripts
// TODO: webhook deployment
// TODO: clean code, add comments,update headers,update readme
// TODO: control scp file and change ownerships
// TODO: add secret to webhook
// TODO: add log and activity monitor

var plan = require("flightplan");
var config = require("../config/config");

// Set up an app in the cloud
plan.remote("create-app", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var app_root = config.apps_root + $.app_name + "/";
  var app_repo_dir = app_root + "repo/";
  var app_dir = app_root + "app/";
  var app_config_dir = app_dir + "config/";
  var app_install_script = $.app_name + "-install.sh";
  var app_run_script = $.app_name + ".sh";
  var app_cron_script = $.app_name + ".cron";

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
  remote.cp(app_config_dir + app_cron_script + " " + config.cron_dir);
  remote.with("cd " + config.cron_dir, function () {
    remote.exec("crontab " + app_cron_script);
  });

  // install depencies
  remote.with("cd " + app_config_dir, function () {
    remote.chmod("+x " + app_install_script);
    remote.chmod("+x " + app_run_script);
    remote.exec("./" + app_install_script);
  });
});

// Transfer necessary files from local to remote
plan.local("create-app", function (local) {
  local.hostname();

  for (var i = 0; i < local._context.hosts.length; i++) {

    // definitions
    var $ = local._context.hosts[i];
    var app_root = config.apps_root + $.app_name + "/";

    // copy secrets
    local.with("cd " + $.local_src_dir, () => {
      local.transfer($.local_secrets_dir, app_root);
    });

    //  Update flightplan deployment scripts
    var files_folders = local.exec(
      "git ls-files && git ls-files --others --exclude-standard",
      { silent: true }
    );
    local.transfer(files_folders, config.aracloud_root);
  }
});

// start necessary services
plan.remote("create-app", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var app_root = config.apps_root + $.app_name + "/";
  var app_dir = app_root + "app/";
  var secrets_dir = app_root + "secrets/";
  var app_secrets_dir = app_dir + "secrets/";

  // setup files
  remote.exec(`cp -r ${secrets_dir} ${app_secrets_dir}`);
});
