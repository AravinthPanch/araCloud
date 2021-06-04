/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require("flightplan");
var config = require("./config/config");

// src
require("./src/create-server.js");
require("./src/create-website.js");
require("./src/deploy-website.js");
require("./src/create-redirect.js");
require("./src/create-app.js");
require("./src/sync-server.js");
require("./src/deploy-app.js");

// hosts
require("./hosts/host-aracreate-com.js");
require("./hosts/host-aravinth-info.js");
require("./hosts/host-dreamspace-academy.js");
require("./hosts/host-oceanbio-me.js");
require("./hosts/host-others.js");
require("./hosts/host-apps.js");
require("./hosts/host-jayanthan.js");
require("./hosts/host-cris.js");


// server
plan.target("aracloud", {
  host: config.host,
  username: config.username,
  privateKey: config.privateKey,
  agent: config.agent,
});
