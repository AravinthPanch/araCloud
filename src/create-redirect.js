/**
 * Description:   Automatic creation URL redirect on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");
var config = require("../config/config");

// create website on remote server
plan.remote("create-redirect", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  var apache2_conf_file = config.apache2_conf_dir + $.domain_name_reversed + ".conf";
  var virtual_host_str = "<VirtualHost *:" + config.http_port_number + ">";
  var server_admin_str = "ServerAdmin " + config.host;
  var server_name_str = "ServerName " + $.domain_name;
  var server_alias_str = "ServerAlias www." + $.domain_name;
  var redirect_url_str = "RedirectPermanent / " + $.redirect_url;
  var virtual_host_end_str = "</VirtualHost>";

  // create apache2 config
  remote.rm("-f " + apache2_conf_file);
  remote.touch(apache2_conf_file);
  remote.exec('echo "' + virtual_host_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_admin_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_name_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + server_alias_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + redirect_url_str + '" >> ' + apache2_conf_file);
  remote.exec('echo "' + virtual_host_end_str + '" >> ' + apache2_conf_file);

  //enable apache site
  remote.with("cd " + config.apache2_conf_dir, function () {
    remote.exec("a2ensite " + $.domain_name_reversed + ".conf");
  });
  remote.exec("apache2ctl configtest");
  remote.exec("systemctl restart apache2");
});
