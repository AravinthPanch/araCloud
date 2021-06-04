var plan = require("flightplan");
var config = require("../config/config");

////////////////////////////////////
/// WWW.BENZYMEVENTURES.ORG ////
////////////////////////////////////
plan.target("benzymeventures.org", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "benzymeventures.org",
    domain_name_reversed: "org.benzymeventures",
    git_repo: "git@github.com:dreamspace-academy/benzymeventures.org.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.benzymeventures.org",
    domain_name_reversed: "org.benzymeventures.dev",
    git_repo: "git@github.com:dreamspace-academy/benzymeventures.org.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

////////////////////////////////////
/// WWW.CRIS-SILVA.COM ////
////////////////////////////////////
plan.target("cris-silva.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "cris-silva.com",
    domain_name_reversed: "com.cris-silva",
    git_repo: "git@github.com:dreamspace-academy/cris-silva.com.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.cris-silva.com",
    domain_name_reversed: "com.cris-silva.dev",
    git_repo: "git@github.com:dreamspace-academy/cris-silva.com.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
