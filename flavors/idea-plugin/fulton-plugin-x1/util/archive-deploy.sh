#!/bin/sh
rm -f deploy.tar.gz
tar -czf deploy.tar.gz  bundle  client deploy.sh deploy-env.sh deploy-env-unset.sh README.md  archive-deploy.sh send-deploy.sh init-all.sh send-public-key.sh
