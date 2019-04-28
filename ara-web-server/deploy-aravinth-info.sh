#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/aravinth.info/deploy.log
echo "Pulling repo" >> /home/aravinth/aravinth.info/deploy.log
cd /home/aravinth/aravinth.info/repo/ && git pull
echo "Removing old html" >> /home/aravinth/aravinth.info/deploy.log
rm -rf /home/aravinth/aravinth.info/html
mkdir /home/aravinth/aravinth.info/html
echo "Creating new html" >> /home/aravinth/aravinth.info/deploy.log
cp -rf /home/aravinth/aravinth.info/repo/2015/* /home/aravinth/aravinth.info/html/
