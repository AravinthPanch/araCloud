#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/timeline.aravinth.info/deploy.log
echo "Pulling repo" >> /home/aravinth/timeline.aravinth.info/deploy.log
cd /home/aravinth/timeline.aravinth.info/repo/ && git pull
echo "Removing old html" >> /home/aravinth/timeline.aravinth.info/deploy.log
rm -rf /home/aravinth/timeline.aravinth.info/html
mkdir /home/aravinth/timeline.aravinth.info/html
echo "Creating new html" >> /home/aravinth/timeline.aravinth.info/deploy.log
cp -rf /home/aravinth/timeline.aravinth.info/repo/2018/timeline/* /home/aravinth/timeline.aravinth.info/html/
