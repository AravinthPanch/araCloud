/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");

// deploy website on remote server
plan.local("deploy-website", function (local) {
  local.hostname();

  for (var i = 0; i < local._context.hosts.length; i++) {
    // definitions
    var $ = local._context.hosts[i];
    console.log("--------------------------");
    console.log($.domain_name);
    console.log("--------------------------");
    var website_root = "/var/www/" + $.domain_name_reversed;
    var website_dir = website_root + "/html/";
    var git_repo_root = website_root + "/repo/";

    // pull new changes
    local.with("cd " + git_repo_root, function () {
      local.sudo("git checkout " + $.git_branch);
      local.sudo("git pull");
      //pull submodules, if any
      local.sudo("git submodule foreach git pull origin master");
    });

    // install source files
    local.sudo("rm -rf " + website_dir);
    local.sudo("mkdir -p " + website_dir);
    local.sudo("cp -r " + git_repo_root + $.git_src_dir + "* " + website_dir);
  }
});
