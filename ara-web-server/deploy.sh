#! /bin/bash

#TODO: Parameterize links, check files before operations

echo "Executing deploy.sh" >> /home/aravinth/dreamspace.academy/deploy.log
echo "Pulling repo" >> /home/aravinth/dreamspace.academy/deploy.log
cd /home/aravinth/dreamspace.academy/repo/ && git pull
echo "Removing old html" >> /home/aravinth/dreamspace.academy/deploy.log
rm -r /home/aravinth/dreamspace.academy/html
mkdir /home/aravinth/dreamspace.academy/html
echo "Creating new html" >> /home/aravinth/dreamspace.academy/deploy.log
cp -r /home/aravinth/dreamspace.academy/repo/* /home/aravinth/dreamspace.academy/html/
