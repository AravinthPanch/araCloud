var plan = require("flightplan");
var config = require("../config/config");

// APPS
plan.target("arametrics-clockify-google", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    app_name: "arametrics-clockify-google",
    git_repo: "git@github.com:AravinthPanch/araMetrics.git",
    git_branch: "master",
    git_src_dir: "arametrics-clockify-google/",
    local_src_dir: "/Users/aravinth/local-workspace/-araCreate-git-repos/araMetrics/arametrics-clockify-google/",
    local_secrets_dir: "secrets/"
  }
]);

plan.target("arametrics-test-app", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    app_name: "arametrics-test-app",
    git_repo: "git@github.com:AravinthPanch/araMetrics.git",
    git_branch: "master",
    git_src_dir: "arametrics-test-app/",
    local_src_dir: "/Users/aravinth/local-workspace/-araCreate-git-repos/araMetrics/arametrics-test-app/",
    local_secrets_dir: "secrets/"
  }
]);
