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

## To deploy website locally on server
- `fly deploy-website:hardwarestartups.berlin`

## To sync araCloud flightplan scripts with server
- `fly sync-server:aracloud`

### Created objects
- `fly create-website:aravinth.info`
- `fly create-website:files.aravinth.info`
- `fly create-website:talents.aravinth.info`
- `fly create-website:jobs.aravinth.info`
- `fly create-website:dreamspace.academy`
- `fly create-website:team.dreamspace.academy`
- `fly create-website:terrace.dreamspace.academy`
- `fly create-website:corona.dreamspace.academy`
- `fly create-website:visualmakers.dreamspace.academy`
- `fly create-website:hardwarestartups.berlin`
- `fly create-website:macsxperts.com`
- `fly create-website:aracreate.com`
- `fly create-redirect:cal.aravinth.info`
- `fly create-app:arametrics-clockify-google`
- `fly create-website:trashfortrade.com`
- `fly create-website:oceanbio.me`
- `fly create-redirect:git.dreamspace.academy`

### Created ssl certificates
- sudo certbot --expand -d aracreate.com
- sudo certbot --expand -d aravinth.info,www.aravinth.info,arabot.aravinth.info,cal.aravinth.info,files.aravinth.info,meet.aravinth.info,projects.aravinth.info,talents.aravinth.info,jobs.aravinth.info
- sudo certbot --expand -d dreamspace.academy,www.dreamspace.academy,corona.dreamspace.academy,dev.dreamspace.academy,team.dreamspace.academy,terrace.dreamspace.academy,visualmakers.dreamspace.academy,git.dreamspace.academy
- sudo certbot --expand -d trashfortrade.com,dev.trashfortrade.com
- sudo certbot --expand -d oceanbio.me
