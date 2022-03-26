#!/bin/bash

cd /home/vgihan/social-soseol-front
mkdir node_modules
sudo chmod -R 777 node_modules
yarn
pm2 start yarn --name Social-Soseol -- start