##!/bin/bash
# npm run build &&
ssh -p $SSH_PROD_SERVER_PORT root@$PROD_SERVER_IP  'rm -rf /var/www/html/tienhoangdevblog' &&
scp -P $SSH_PROD_SERVER_PORT -r build root@$PROD_SERVER_IP:/var/www/html/tienhoangdevblog

