var plan = require("flightplan");
var config = require("./config");

// APPS
plan.target("arametrics-clockify-google", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  app_name: "arametrics-clockify-google",
  git_repo: "git@github.com:AravinthPanch/araMetrics.git",
  git_branch: "master",
  git_src_dir: "arametrics-clockify-google/",
  local_src_dir:
    "/Users/aravinth/local-workspace/araMetrics/arametrics-clockify-google/",
  local_secrets_dir: "secrets/",
});
