#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/aracreate.com/deploy.log
echo "Pulling repo" >> /home/aravinth/aracreate.com/deploy.log
cd /home/aravinth/aracreate.com/repo/ && git pull
echo "Removing old html" >> /home/aravinth/aracreate.com/deploy.log
rm -rf /home/aravinth/aracreate.com/html
mkdir /home/aravinth/aracreate.com/html
echo "Creating new html" >> /home/aravinth/aracreate.com/deploy.log
cp -rf /home/aravinth/aracreate.com/repo/* /home/aravinth/aracreate.com/html/

echo "Deploy dev"
bash /home/aravinth/dev.aracreate.com/deploy-dev-dreamspace-com.sh
