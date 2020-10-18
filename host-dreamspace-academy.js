///////////////////////////////
/// WWW.DREAMSPACE.ACADEMY ////
///////////////////////////////

var plan = require("flightplan");
var config = require("./config");

plan.target("dreamspace.academy", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dreamspace.academy",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.academy.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.dreamspace.academy",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.academy.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);

plan.target("team.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "team.dreamspace.academy",
  git_repo: "git@github.com:dreamspace-academy/team.dreamspace.academy.git",
  git_branch: "master",
  git_src_dir: ""
});

plan.target("terrace.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "terrace.dreamspace.academy",
  git_repo: "git@github.com:dreamspace-academy/terrace.dreamspace.academy.git",
  git_branch: "master",
  git_src_dir: ""
});

plan.target("corona.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "corona.dreamspace.academy",
  git_repo: "git@github.com:Viththiyakaran/coronabot.git",
  git_branch: "master",
  git_src_dir: ""
});

plan.target("visualmakers.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "visualmakers.dreamspace.academy",
  git_repo: "git@github.com:dreamspace-academy/dreamspace.academy.git",
  git_branch: "master",
  git_src_dir: ""
});
