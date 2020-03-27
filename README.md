# araCloud

## Setup Local
- `brew install node`
- `npm install -g flightplan`
- `npm install flightplan`

## Create Remote Server
- `fly remote-setup-server:araCloud`

## Create Website
- `fly remote-setup-website:aravinth.info`
- `fly remote-setup-website:aracreate.com`
- `fly remote-setup-website:dreamspace.academy`
- `fly remote-setup-website:hardwarestartups.berlin`
- `fly remote-setup-website:macsxperts.com`
- `fly remote-setup-website:watergenics.tech`
- `fly remote-setup-website:terrace.dreamspace.academy`

## Create Redirect
- `fly remote-setup-redirect:cal.aravinth.info`

## To Create A New Website
- Add host ip to the domain in Godaddy
- Add host, domain, git info of the website to flightplan.js
- Add hostname to webhook.json
- `fly remote-setup-website:new_domain_name`


- Add webhook setting in GitHub
  - Payload URL - http://aravinth.info:9000/hooks/new_domain_name
  - Content type - application/json
  - Which events would you like to trigger this webhook? Just the push event
  - Active

- Add the domain to HTTPS
  - sudo certbot --apache -d dreamspace.academy -d blog.dreamspace.academy -d dev.dreamspace.academy -d team.dreamspace.academy -d terrace.dreamspace.academy -d www.dreamspace.academy -d new_domain_name
