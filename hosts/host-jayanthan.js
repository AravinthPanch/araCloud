var plan = require("flightplan");
var config = require("../config/config");

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
    git_repo: "git@github.com:dreamspace-academy/trashfortrade.com.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.trashfortrade.com",
    domain_name_reversed: "com.trashfortrade.dev",
    git_repo: "git@github.com:dreamspace-academy/trashfortrade.com.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

////////////////////////////////////
/// WWW.JAYANTHAN.INFO ////
////////////////////////////////////
plan.target("jayanthan.info", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "jayanthan.info",
    domain_name_reversed: "info.jayanthan",
    git_repo: "git@github.com:dreamspace-academy/jayanthan.info.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.jayanthan.info",
    domain_name_reversed: "info.jayanthan.dev",
    git_repo: "git@github.com:dreamspace-academy/jayanthan.info.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

////////////////////////////////////
/// WWW.EMD-LABS.INFO ////
////////////////////////////////////
plan.target("emd-labs.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "emd-labs.com",
    domain_name_reversed: "com.emd-labs",
    git_repo: "git@github.com:dreamspace-academy/emd-labs.com.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.emd-labs.com",
    domain_name_reversed: "com.emd-labs.dev",
    git_repo: "git@github.com:dreamspace-academy/emd-labs.com.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
