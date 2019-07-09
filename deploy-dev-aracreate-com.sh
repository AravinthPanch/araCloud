#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/dev.aracreate.com/deploy.log
echo "Pulling repo" >> /home/aravinth/dev.aracreate.com/deploy.log
cd /home/aravinth/dev.aracreate.com/repo/ && git checkout dev && git pull
echo "Removing old html" >> /home/aravinth/dev.aracreate.com/deploy.log
rm -rf /home/aravinth/dev.aracreate.com/html
mkdir /home/aravinth/dev.aracreate.com/html
echo "Creating new html" >> /home/aravinth/dev.aracreate.com/deploy.log
cp -rf /home/aravinth/dev.aracreate.com/repo/* /home/aravinth/dev.aracreate.com/html/
