var plan = require("flightplan");
var config = require("../config/config");

///////////////////////////
/// WWW.OCEANBIO.ME ////
///////////////////////////
plan.target("oceanbio.me", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "oceanbio.me",
    domain_name_reversed: "me.oceanbio",
    git_repo: "git@github.com:dreamspace-academy/oceanbio.me.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.oceanbio.me",
    domain_name_reversed: "me.oceanbio.dev",
    git_repo: "git@github.com:dreamspace-academy/oceanbio.me.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

plan.target("shanjeevan.oceanbio.me", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "shanjeevan.oceanbio.me",
    domain_name_reversed: "me.oceanbio.shanjeevan",
    git_repo: "git@github.com:dreamspace-academy/shanjeevan.oceanbio.me.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.shanjeevan.oceanbio.me",
    domain_name_reversed: "me.oceanbio.shanjeevan.dev",
    git_repo: "git@github.com:dreamspace-academy/shanjeevan.oceanbio.me.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
