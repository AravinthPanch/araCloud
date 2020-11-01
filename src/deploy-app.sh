#!/bin/bash

# Description:   Automatic deployment of websites on araCloud
# Author:        Aravinth Panch

aracloud_root='/var/www/aracloud/'
timestamp=$(date)
repo_name=$1

echo -e "\n [$timestamp] Deploying the app [$repo_name]"
cd $aracloud_root && fly deploy-app:$repo_name
