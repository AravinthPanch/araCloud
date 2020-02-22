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
}, {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'forms.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: 'forms/',
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

plan.target('admin.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'admin.dreamspace.academy',
  port_number: 80,
  redirect_url: 'https://blog.dreamspace.academy/wp-admin/admin.php?page=sch-dashboard',
});

plan.target('subscribe.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'subscribe.dreamspace.academy',
  port_number: 80,
  redirect_url: 'https://docs.google.com/forms/d/e/1FAIpQLSexsCWfz8sz7Z8TuGxBlt4rNlmf_sa2mbs4aWU5mb-qg8Ioeg/viewform?hl=en',
});

plan.target('cal.dreamspace.academy', {
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'cal.dreamspace.academy',
  port_number: 80,
  redirect_url: 'http://dreamspace.academy/pages/master-page/calendar.php',
});
