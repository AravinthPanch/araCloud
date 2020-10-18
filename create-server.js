/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require('flightplan');
var config = require("./config");

// create all the necessary folders
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();

  //setup webhook
  remote.rm('-rf ' + config.webhook_dir);
  remote.mkdir('-p ' + config.webhook_dir + 'log/');

  //setup nodejs
  remote.exec('apt install npm');
  remote.exec('npm install -g n');
  remote.exec('n latest');

  //setup flightplan
  remote.exec('npm install -g flightplan');
  remote.with('cd ' + config.webhook_dir, function() {
    remote.exec('npm install flightplan');
  });

});

// transfer necessary files from local host
plan.local('remote-setup-server', function(local) {
  local.hostname();

  //  Update flightplan deployment scripts
  local.transfer("./", config.webhook_dir);

  // transfer supervisor conf for webhook
  var files = ['./webhook.conf'];
  local.transfer(files, config.supervisor_dir);

  // transfer default apache2 web
  var files = ['./000-default.conf'];
  local.transfer(files, config.apache2_conf_dir);
});

// start necessary services
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_user = $.username + ':' + $.username;

  // setup files
  remote.chmod('+x ' + config.webhook_dir + 'deploy.sh');
  remote.chown('-R ' + www_user + ' ' + config.webhook_dir);
  remote.chown('-R ' + www_user + ' ' + config.webhook_dir + '*');
  remote.chown('-R ' + www_user + ' ' + $.supervisor_dir + 'webhook.conf');
  remote.chown('-R ' + www_user + ' ' + $.apache2_conf_dir + '000-default.conf');

  // reload webhook
  remote.exec('supervisorctl reload');
});
