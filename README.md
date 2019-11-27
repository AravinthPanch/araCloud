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
- `fly remote-setup-website:domain_name`
