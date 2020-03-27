///////////////////////////////
/// WWW.DREAMSPACE.ACADEMY ////
///////////////////////////////

var plan = require('flightplan');

plan.target('dreamspace.academy', [{
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dev.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'dev',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);

plan.target('team.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'team.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/team.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});


plan.target('terrace.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'terrace.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/terrace.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});

plan.target('corona.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'corona.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:Viththiyakaran/covid-19.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
});
