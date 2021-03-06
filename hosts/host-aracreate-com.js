//////////////////////////
/// WWW.ARACREATE.COM ////
//////////////////////////

var plan = require("flightplan");
var config = require("../config/config");

plan.target("aracreate.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "aracreate.com",
    domain_name_reversed: "com.aracreate",
    git_repo: "git@github.com:AravinthPanch/aracreate.com.git",
    git_branch: "master",
    git_src_dir: ""
  }
]);
