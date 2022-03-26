#!/bin/bash

cd /home/vgihan/social-soseol-front
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
/root/.nvm/versions/node/v14.17.3/bin/yarn
/root/.nvm/versions/node/v14.17.3/bin/pm2 start yarn --name Social-Soseol -- start