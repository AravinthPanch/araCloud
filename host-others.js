var plan = require("flightplan");
var config = require("./config");

///////////////////////////
/// WWW.MACSXPERTS.COM ////
///////////////////////////
plan.target("macsxperts.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "macsxperts.com",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/macsxperts.com.git",
    git_branch: "master",
    git_src_dir: "",
    webhook_dir: "/var/www/webhook/",
  },
]);

////////////////////////////////////
/// WWW.HARDWARESTARTUPS.BERLIN ////
////////////////////////////////////
plan.target("hardwarestartups.berlin", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "hardwarestartups.berlin",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/hardwarestartups.berlin.git",
    git_branch: "master",
    git_src_dir: "",
    webhook_dir: "/var/www/webhook/",
  },
]);
