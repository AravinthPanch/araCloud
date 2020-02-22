/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require('flightplan');
require('./create-server.js');
require('./create-website.js');
require('./deploy-website.js');
require('./create-redirect.js');

// hosts
require('./host-aracreate-com.js');
require('./host-aravinth-info.js');
require('./host-dreamspace-academy.js');
require('./host-watergenics-tech.js');
require('./host-others.js');

// server
plan.target('araCloud', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  webhook_dir: '/var/www/webhook/',
  supervisor_dir: '/etc/supervisor/conf.d/',
  apache2_conf_dir: '/etc/apache2/sites-available/'
});
