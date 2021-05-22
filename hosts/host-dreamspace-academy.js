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

plan.target("storydeck.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "storydeck.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.storydeck",
  redirect_url: "https://files.aravinth.info/decks/dreamspace-academy-story-deck.pdf",
});

plan.target("bible.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "bible.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.bible",
  redirect_url: "https://docs.google.com/document/d/1ssT6-utMZVMvUd6rb9tcXYpOj0SuRgZGDnafgJqTqKk",
});

plan.target("make.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "make.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.make",
  git_repo: "git@github.com:dreamspace-academy/dreamspace-maker-education.git",
  git_branch: "main",
  git_src_dir: "software-lab/html-css/"
});

plan.target("supportdeck.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "supportdeck.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.supportdeck",
  redirect_url: "https://files.aravinth.info/decks/dreamspace-academy-support-deck.pdf",
});

plan.target("support.dreamspace.academy", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,

  domain_name: "support.dreamspace.academy",
  domain_name_reversed: "academy.dreamspace.support",
  redirect_url: "https://dreamspace.academy/pages/7-1-support.php",
});

plan.target("dreamspace.foundation", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dreamspace.foundation",
    domain_name_reversed: "foundation.dreamspace",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.foundation.git",
    git_branch: "master",
    git_src_dir: ""
  },
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "dev.dreamspace.foundation",
    domain_name_reversed: "foundation.dreamspace.dev",
    git_repo: "git@github.com:dreamspace-academy/dreamspace.foundation.git",
    git_branch: "dev",
    git_src_dir: ""
  }
]);
