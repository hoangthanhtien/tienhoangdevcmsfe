##!/bin/bash
npm run build &&
ssh root@42.96.5.18 'rm -rf /var/www/html/tienhoangdevblog' &&
scp -r build root@42.96.5.18:/var/www/html/tienhoangdevblog
