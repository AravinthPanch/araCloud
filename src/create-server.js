/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require('flightplan');
var config = require("../config/config");

// create all the necessary folders
plan.remote('create-server', function(remote) {
  remote.hostname();

  //setup webhook
  remote.rm('-rf ' + config.aracloud_root);
  remote.mkdir('-p ' + config.aracloud_root + 'logs/');

  //setup nodejs
  remote.exec('apt install npm');
  remote.exec('npm install -g n');
  remote.exec('n latest');

  //setup flightplan
  remote.exec('npm install -g flightplan');
});

// transfer necessary files from local host
plan.local('create-server', function(local) {
  local.hostname();

  //  Update flightplan deployment scripts
  local.transfer("./", config.aracloud_root);

  // transfer supervisor conf for webhook
  var files = ['./webhook.conf'];
  local.transfer(files, config.supervisor_dir);

  // transfer default apache2 web
  var files = ['./000-default.conf'];
  local.transfer(files, config.apache2_conf_dir);
});

// start necessary services
plan.remote('create-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_user = $.username + ':' + $.username;

  // setup files
  remote.chown('-R ' + www_user + ' ' + config.aracloud_root);
  remote.chown('-R ' + www_user + ' ' + config.aracloud_root + '*');
  remote.chown('-R ' + www_user + ' ' + config.supervisor_dir + 'webhook.conf');
  remote.chown('-R ' + www_user + ' ' + config.apache2_conf_dir + '000-default.conf');

  // reload webhook
  remote.exec('supervisorctl reload');
});
