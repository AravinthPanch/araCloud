#!/bin/bash

# Description:   Automatic deployment of websites on araCloud
# Author:        Aravinth Panch

webhook_dir='/var/www/webhook/'
timestamp=$(date)
repo_name=$1

echo -e "\n [$timestamp] Deploying the website [$repo_name]"
cd $webhook_dir
fly local-deploy-website:$repo_name
