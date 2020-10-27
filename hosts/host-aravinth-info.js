//////////////////////////
/// WWW.ARAVINTH.INFO //
//////////////////////////

var plan = require("flightplan");
var config = require("../config/config");

plan.target("aravinth.info", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "aravinth.info",
    domain_name_reversed: "info.aravinth",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/index/",
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "timeline.aravinth.info",
    domain_name_reversed: "info.aravinth.timeline",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/timeline/",
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "arabot.aravinth.info",
    domain_name_reversed: "info.aravinth.arabot",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/arabot/",
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "meet.aravinth.info",
    domain_name_reversed: "info.aravinth.meet",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/meet/",
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "projects.aravinth.info",
    domain_name_reversed: "info.aravinth.projects",
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/projects/",
  },
]);

plan.target("files.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "files.aravinth.info",
  domain_name_reversed: "info.aravinth.files",
  git_repo: "git@github.com:AravinthPanch/files.aravinth.info.git",
  git_branch: "master",
  git_src_dir: "",
});

plan.target("cal.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "cal.aravinth.info",
  domain_name_reversed: "info.aravinth.cal",
  redirect_url: "https://calendly.com/ara-panch",
});

plan.target("talents.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "talents.aravinth.info",
  domain_name_reversed: "info.aravinth.talents",
  git_repo: "git@github.com:AravinthPanch/talents.aravinth.info.git",
  git_branch: "master",
  git_src_dir: "",
});

plan.target("jobs.aravinth.info", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "jobs.aravinth.info",
  domain_name_reversed: "info.aravinth.jobs",
  git_repo: "git@github.com:AravinthPanch/jobs.aravinth.info.git",
  git_branch: "main",
  git_src_dir: "",
});
