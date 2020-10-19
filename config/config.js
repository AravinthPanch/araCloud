// Contains all the constant config files

var config = {};

config.host = "aravinth.info";
config.username = "root";
config.privateKey = "/Users/aravinth/.ssh/id_rsa";
config.agent = process.env.SSH_AUTH_SOCK;
config.aracloud_root = "/var/www/aracloud/";
config.apps_root = "/var/www/apps/";
config.http_port_number = 80;
config.supervisor_dir = "/etc/supervisor/conf.d/";
config.apache2_conf_dir = "/etc/apache2/sites-available/";
config.node_version = "14.14.0"
config.flightplan_version = "0.6.20"
config.webhook_supervisor_conf="git_webhook_supervisor.conf"
config.apache_default_conf="000-default.conf"

module.exports = config;
