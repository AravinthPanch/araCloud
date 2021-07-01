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

plan.target("dreamspace.foundation", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dreamspace.foundation",
    domain_name_reversed: "foundation.dreamspace",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.foundation.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.dreamspace.foundation",
    domain_name_reversed: "foundation.dreamspace.dev",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.foundation.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

////////////////////////////////////
/// WWW.ZEROSEC.IN ////
////////////////////////////////////

plan.target("zerosec.in", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.zerosec.in",
    domain_name_reversed: "in.zerosec.dev",
    git_repo: "git@github.com:dreamspace-academy/zerosec.in.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
