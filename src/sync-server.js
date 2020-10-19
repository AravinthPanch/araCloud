/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");
var config = require("../config/config");

// set up all the necessary folders and services
plan.remote("sync-server", function (remote) {
  remote.hostname();

  //set up aracloud root directory
  remote.rm("-rf " + config.aracloud_root);
  remote.mkdir("-p " + config.aracloud_root + "logs/");
});

// transfer necessary files from local host
plan.local("sync-server", function (local) {
  local.hostname();

  //  Update flightplan deployment scripts
  var files_folders = local.exec('git ls-files && git ls-files --others --exclude-standard', {silent: true});
  local.transfer(files_folders, config.aracloud_root);
});
