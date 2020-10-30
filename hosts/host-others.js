var plan = require("flightplan");
var config = require("../config/config");

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
    domain_name_reversed: "com.macsxperts",
    git_repo: "git@github.com:AravinthPanch/macsxperts.com.git",
    git_branch: "master",
    git_src_dir: ""
  }
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
    domain_name_reversed: "berlin.hardwarestartups",
    git_repo: "git@github.com:AravinthPanch/hardwarestartups.berlin.git",
    git_branch: "master",
    git_src_dir: ""
  }
]);

////////////////////////////////////
/// WWW.TRASHFORTRADE.COM ////
////////////////////////////////////
plan.target("trashfortrade.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "trashfortrade.com",
    domain_name_reversed: "com.trashfortrade",
    git_repo: "git@github.com:Abitharani-Jeyachandran/trashfortrade.com.git",
    git_branch: "main",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.trashfortrade.com",
    domain_name_reversed: "com.trashfortrade.dev",
    git_repo: "git@github.com:Abitharani-Jeyachandran/trashfortrade.com.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
