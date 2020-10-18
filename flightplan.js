/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require("flightplan");
var config = require("./config");

// scripts
require("./create-server.js");
require("./create-website.js");
require("./deploy-website.js");
require("./create-redirect.js");
require("./create-app.js");

// hosts
require("./host-aracreate-com.js");
require("./host-aravinth-info.js");
require("./host-dreamspace-academy.js");
require("./host-others.js");
require("./host-apps.js");


// server
plan.target("araCloud", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,
});
