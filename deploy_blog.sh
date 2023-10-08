##!/bin/bash
npm run build &&
ssh -p 26266 root@42.96.5.18  'rm -rf /var/www/html/tienhoangdevblog' &&
scp -P 26266 -r build root@42.96.5.18:/var/www/html/tienhoangdevblog

