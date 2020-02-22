//////////////////////////
/// WWW.ARACREATE.COM ////
//////////////////////////

var plan = require('flightplan');

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
  },
  {
    host: 'test.aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'test.aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'dev',
    git_src_dir: 'test/',
    webhook_dir: '/var/www/webhook/',
  }
]);
