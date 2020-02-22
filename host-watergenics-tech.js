/////////////////////////////
/// WWW.WATERGENICS.TECH ////
/////////////////////////////

var plan = require('flightplan');

plan.target('watergenics.tech', [{
    host: 'watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'dev.watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'dev',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'master',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  }
]);
