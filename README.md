# araCloud

## Create a new website

Create basic folders
- `cd /var/www/`
- `sudo mkdir -p abc.com/html`
- `sudo chown -R $USER:$USER abc.com/html`
- `sudo chown -R $USER:$USER abc.com`
- `cd ~/`
- `ln -s /var/www/abc.com`
- `cd ~/abc.com`
- `git clone git@github.com:AravinthPanch/abc.com.git repo`

Create deploy-abc-com.sh and apache-abc-com.conf on host machine and scp to the remote server
- `scp deploy-abc-com.sh apache-abc-com.conf araCloud:/home/aravinth/abc.com/`

Setup apache webserver on the remote
- `cd ~/abc.com/`
- `sudo mv apache-abc-com.conf /etc/apache2/sites-available/`
- `ln -s /etc/apache2/sites-available/apache-abc-com.conf`
- `sudo a2ensite apache-abc-com.conf`
- `sudo apache2ctl configtest`
- `sudo systemctl reload apache2`
- `sudo systemctl restart apache2`

## Webhook

Webhook Supervisor service
- `scp webhook.conf araCloud:/etc/supervisor/conf.d/`

Webhook github hook
- `scp webhook.json araCloud:/home/aravinth/webhook/webhook.json`


## Apache2 Webserver

Check enabled websites
- `a2query -s`

Disable a website
- `sudo a2dissite apache-abc-com.conf`
