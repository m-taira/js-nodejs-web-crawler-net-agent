#!/bin/bash

PATH=/Users/taira/.nodebrew/current/bin:/usr/local/bin:/usr/bin:/bin
NODE_PATH=/Users/taira/.nodebrew/current/lib/node_modules

cd `dirname $0`
node  kawase-usd_jpy.js
