// Contains all the constant config files

var config = {};

config.host = "aravinth.info";
config.username = "root";
config.privateKey = "/Users/aravinth/.ssh/id_rsa";
config.agent = process.env.SSH_AUTH_SOCK;
config.webhook_dir = '/var/www/webhook/';
config.port_number = 80;
config.supervisor_dir = '/etc/supervisor/conf.d/';
config.apache2_conf_dir = '/etc/apache2/sites-available/';

module.exports = config;
