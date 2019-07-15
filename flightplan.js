/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require('flightplan');
require('./create-server.js');
require('./create-website.js');
require('./deploy-website.js');


// server
plan.target('araCloud', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  webhook_dir: '/var/www/webhook/',
  supervisor_dir: '/etc/supervisor/conf.d/'
});

// websites
plan.target('aracreate.com', [{
  host: 'aracreate.com',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'aracreate.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'dev.aracreate.com',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dev.aracreate.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
  git_branch: 'dev',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);
