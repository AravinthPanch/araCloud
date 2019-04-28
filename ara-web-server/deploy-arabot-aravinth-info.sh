#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/arabot.aravinth.info/deploy.log
echo "Pulling repo" >> /home/aravinth/arabot.aravinth.info/deploy.log
cd /home/aravinth/arabot.aravinth.info/repo/ && git pull
echo "Removing old html" >> /home/aravinth/arabot.aravinth.info/deploy.log
rm -rf /home/aravinth/arabot.aravinth.info/html
mkdir /home/aravinth/arabot.aravinth.info/html
echo "Creating new html" >> /home/aravinth/arabot.aravinth.info/deploy.log
cp -rf /home/aravinth/arabot.aravinth.info/repo/2018/arabot/* /home/aravinth/arabot.aravinth.info/html/
