///////////////////////////////
/// WWW.DREAMSPACE.ACADEMY ////
///////////////////////////////

var plan = require("flightplan");
var config = require("../config/config");

plan.target("dreamspace.academy", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dreamspace.academy",
    domain_name_reversed: "academy.dreamspace",
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
    domain_name_reversed: "academy.dreamspace.dev",
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
  domain_name_reversed: "academy.dreamspace.team",
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
  domain_name_reversed: "academy.dreamspace.terrace",
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
  domain_name_reversed: "academy.dreamspace.corona",
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
  domain_name_reversed: "academy.dreamspace.visualmakers",
  git_repo: "git@github.com:dreamspace-academy/visualmakers.dreamspace.academy.git",
  git_branch: "main",
  git_src_dir: ""
});

plan.target("git.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "git.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.git",
  redirect_url: "https://github.com/dreamspace-academy",
});
