/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");

// deploy website on remote server
plan.local("deploy-app", function (local) {
  local.hostname();

  for (var i = 0; i < local._context.hosts.length; i++) {
    // definitions
    var $ = local._context.hosts[i];
    console.log("--------------------------");
    console.log($.app_name);
    console.log("--------------------------");
    var app_root = "/var/www/apps/" + $.app_name + "/";
    var app_dir = app_root + "app/";
    var git_repo_root = app_root + "repo/";
    var secrets_dir = app_root + "secrets/";
    var app_secrets_dir = app_dir + "secrets/";
    var app_config_dir = app_dir + "config/";
    var app_install_script = $.app_name + "-install.sh";
    var app_run_script = $.app_name + ".sh";

    // pull new changes
    local.with("cd " + git_repo_root, function () {
      local.sudo("git checkout " + $.git_branch);
      local.sudo("git pull");
      //pull submodules, if any
      local.sudo("git submodule foreach git pull origin master");
    });

    // install source files
    local.sudo("rm -rf " + app_dir);
    local.sudo("mkdir -p " + app_dir);
    local.sudo("cp -r " + git_repo_root + $.git_src_dir + "* " + app_dir);

    // setup secrets
    local.sudo(`cp -r ${secrets_dir} ${app_secrets_dir}`);

    // install depencies
    local.with("cd " + app_config_dir, function () {
      local.sudo("chmod +x " + app_install_script);
      local.sudo("chmod +x " + app_run_script);
      local.sudo("./" + app_install_script);
    });
  }
});
