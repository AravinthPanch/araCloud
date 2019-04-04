# ara-web-server

- Webhook post-push deployment script for www.dreamspace.academy
`scp deploy.sh ara-web-server:/home/aravinth/dreamspace.academy/`

- Webhook Supervisor service
`scp webhook.conf ara-web-server:/etc/supervisor/conf.d/`

- Webhook github hook
`scp webhook.json ara-web-server:/home/aravinth/webhook/webhook.json`

- Apache sites
`scp dreamspace.academy.conf ara-web-server:/etc/apache2/sites-available/`
