#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/macsxperts.com/deploy.log
echo "Pulling repo" >> /home/aravinth/macsxperts.com/deploy.log
cd /home/aravinth/macsxperts.com/repo/ && git pull
echo "Removing old html" >> /home/aravinth/macsxperts.com/deploy.log
rm -rf /home/aravinth/macsxperts.com/html
mkdir /home/aravinth/macsxperts.com/html
echo "Creating new html" >> /home/aravinth/macsxperts.com/deploy.log
cp -rf /home/aravinth/macsxperts.com/repo/* /home/aravinth/macsxperts.com/html/
