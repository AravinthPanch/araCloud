//////////////////////////
/// WWW.ARAVINTH.INFO //
//////////////////////////

var plan = require("flightplan");
var config = require("./config");

plan.target("aravinth.info", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "aravinth.info",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/index/"
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "timeline.aravinth.info",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/timeline/"
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "arabot.aravinth.info",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/arabot/"
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "meet.aravinth.info",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/meet/"
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "projects.aravinth.info",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/projects/"
  }
]);

plan.target("files.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "files.aravinth.info",
  git_repo: "git@github.com:AravinthPanch/files.aravinth.info.git",
  git_branch: "master",
  git_src_dir: ""
});

plan.target("cal.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "cal.aravinth.info",
  redirect_url: "https://calendly.com/ara-panch",
});

plan.target("talents.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "talents.aravinth.info",
  git_repo: "git@github.com:AravinthPanch/talents.aravinth.info.git",
  git_branch: "master",
  git_src_dir: ""
});
