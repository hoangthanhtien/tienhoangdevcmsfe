##!/bin/bash
npm run build &&
ssh root@128.199.148.146 'rm -rf /var/www/html/tienhoangdevblog' &&
scp -r build root@128.199.148.146:/var/www/html/tienhoangdevblog
