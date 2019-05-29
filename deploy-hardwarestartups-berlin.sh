#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/hardwarestartups.berlin/deploy.log
echo "Pulling repo" >> /home/aravinth/hardwarestartups.berlin/deploy.log
cd /home/aravinth/hardwarestartups.berlin/repo/ && git pull
echo "Removing old html" >> /home/aravinth/hardwarestartups.berlin/deploy.log
rm -rf /home/aravinth/hardwarestartups.berlin/html
mkdir /home/aravinth/hardwarestartups.berlin/html
echo "Creating new html" >> /home/aravinth/hardwarestartups.berlin/deploy.log
cp -rf /home/aravinth/hardwarestartups.berlin/repo/* /home/aravinth/hardwarestartups.berlin/html/
