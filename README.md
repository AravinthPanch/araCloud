# araCloud
An automated deployment system for all websites and apps on the private virtual server.

## To set up development environment
- `brew install node`
- `npm install -g flightplan`
- `npm install flightplan`

## To create a new server
- Add relevant server details in config/config.js
- `fly create-server:aracloud`

## To create a new website
- Add host ip to the domain in Godaddy
- Add host, domain, git info of the website to flightplan.js
- Add hostname to webhook.json
- Add webhook setting in GitHub
  - Payload URL - http://aravinth.info:9000/hooks/new_domain_name
  - Content type - application/json
  - Which events would you like to trigger this webhook? Just the push event
  - Active
- Run `fly create-website:new_domain_name`
- Add the domain to HTTPS
  - sudo certbot --expand -d aravinth.info,arabot.aravinth.info,files.aravinth.info,timeline.aravinth.info,www.aravinth.info,meet.aravinth.info,cal.aravinth.info

## To sync araCloud flightplan scripts with server
- `fly sync-server:aracloud`

### Created objects
- `fly create-website:aravinth.info`
- `fly create-website:aracreate.com`
- `fly create-website:dreamspace.academy`
- `fly create-website:hardwarestartups.berlin`
- `fly create-website:macsxperts.com`
- `fly create-website:terrace.dreamspace.academy`
- `fly create-app:arametrics-clockify-google`
- `fly create-redirect:cal.aravinth.info`
