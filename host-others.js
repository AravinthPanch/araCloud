var plan = require('flightplan');

///////////////////////////
/// WWW.MACSXPERTS.COM ////
///////////////////////////
plan.target('macsxperts.com', [{
  host: 'macsxperts.com',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'macsxperts.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/macsxperts.com.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);


////////////////////////////////////
/// WWW.HARDWARESTARTUPS.BERLIN ////
////////////////////////////////////
plan.target('hardwarestartups.berlin', [{
  host: 'hardwarestartups.berlin',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'hardwarestartups.berlin',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/hardwarestartups.berlin.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);
