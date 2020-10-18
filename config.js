// Contains all the constant config files

var config = {};

config.host = "aravinth.info";
config.username = "root";
config.privateKey = "/Users/aravinth/.ssh/id_rsa";
config.agent = process.env.SSH_AUTH_SOCK;

module.exports = config;
