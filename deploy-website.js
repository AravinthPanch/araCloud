/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require('flightplan');

// deploy website on remote server
plan.local('local-deploy-website', function(local) {
  local.hostname();

  for (var i = 0; i < local._context.hosts.length; i++) {

    // definitions
    var $ = local._context.hosts[i];
    var www_root = '/var/www/' + $.domain_name;
    var doc_root = www_root + '/html/';
    var git_repo_root = www_root + '/repo/';
    var www_user = $.username + ':' + $.username;

    // pull new changes
    local.with('cd ' + git_repo_root, function() {
      local.sudo('git checkout ' + $.git_branch);
      local.sudo('git pull');
      //pull submodules, if any
      local.sudo('git submodule foreach git pull origin master')

    });

    // install source files
    local.sudo('rm -rf ' + doc_root);
    local.sudo('mkdir -p ' + doc_root);
    local.sudo('cp -r ' + git_repo_root + $.git_src_dir + '* ' + doc_root);
  }

});
