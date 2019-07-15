/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require('flightplan');

// create all the necessary folders
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var webhook_dir = $.webhook_dir;
  var www_user = $.username + ':' + $.username;

  //setup webhook
  remote.rm('-rf ' + webhook_dir);
  remote.mkdir('-p ' + webhook_dir + 'log/');

  //setup nodejs
  remote.exec('apt install npm');
  remote.exec('npm install -g n');
  remote.exec('n latest');

  //setup flightplan
  remote.exec('npm install -g flightplan');
  remote.with('cd ' + webhook_dir, function() {
    remote.exec('npm install flightplan');
  });

});

// transfer necessary files from local host
plan.local('remote-setup-server', function(local) {
  local.hostname();

  // definitions
  var webhook_dir = '/var/www/webhook/';
  var supervisor_dir = '/etc/supervisor/conf.d/';

  var files = [
    './webhook.json',
    './flightplan.js',
    './create-server.js',
    './create-website.js',
    './deploy-website.js',
    './deploy.sh'
  ];
  local.transfer(files, webhook_dir);

  // transfer supervisor conf for webhook
  var files = ['./webhook.conf'];
  local.transfer(files, supervisor_dir);
});

// start necessary services
plan.remote('remote-setup-server', function(remote) {
  remote.hostname();
  var $ = remote.runtime;

  // definitions
  var www_user = $.username + ':' + $.username;

  // setup files
  remote.chmod('+x ' + $.webhook_dir + 'deploy.sh');
  remote.chown('-R ' + www_user + ' ' + $.webhook_dir);
  remote.chown('-R ' + www_user + ' ' + $.webhook_dir + '*');
  remote.chown('-R ' + www_user + ' ' + $.supervisor_dir + 'webhook.conf');

  // reload webhook
  remote.exec('supervisorctl reload');
});
