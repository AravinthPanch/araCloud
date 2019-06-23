#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/dev.dreamspace.academy/deploy.log
echo "Pulling repo" >> /home/aravinth/dev.dreamspace.academy/deploy.log
cd /home/aravinth/dev.dreamspace.academy/repo/ && git checkout dev && git pull
echo "Removing old html" >> /home/aravinth/dev.dreamspace.academy/deploy.log
rm -rf /home/aravinth/dev.dreamspace.academy/html
mkdir /home/aravinth/dev.dreamspace.academy/html
echo "Creating new html" >> /home/aravinth/dev.dreamspace.academy/deploy.log
cp -rf /home/aravinth/dev.dreamspace.academy/repo/* /home/aravinth/dev.dreamspace.academy/html/
