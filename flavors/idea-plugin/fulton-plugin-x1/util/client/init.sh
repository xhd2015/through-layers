#!/bin/sh

# the directory that contains the 'deploy-client.sh' and 'deploy-client-env.sh', recommended using absolute path
export CLIENT_SCRIPT_ROOT=/cygdrive/d/repos/through-layers/flavors/idea-plugin/fulton-plugin-x1/util/client

# the source directory that is a git repository, and will be deployed onto the remote server
export LOCAL_GIT_DIR=/cygdrive/d/repos/ad-all/vivo-ads-2.9.7

# the remote directory that holds the source copy
export REMOTE_GIT_DIR=/root/deploy/ads-web-new/src

# the ssh id file used to connect the remote server
export REMOTE_SSH_ID_FILE=~/.ssh/id_rsa_xhd2015

# the remote host
export REMOTE_HOST=10.101.92.121

# the remote user
export REMOTE_USER=root


# remote bundle directory, into which the deploy bundle will be uncompressed
export REMOTE_INTERFACE_ROOT=/root/deploy/ads-web-new

# for Maven:the default pom used to build
export BUILD_POM=vivo-ads-builder-bom/vivo-ads-web-builder/pom.xml

# for Maven:the default target
export BUILD_TARGET=install

# the primary built artifact
export BUILD_ARTIFACT=vivo-ads-web/target/ads-web.war

# the target deploy environment
export APP_ENV=dev

# unset binaries used by this script, laterly it will be set by deploy-client-env.sh
unset GIT_BIN
unset SSH_BIN
unset SCP_BIN

source "$CLIENT_SCRIPT_ROOT"/deploy-client-env.sh
source "$CLIENT_SCRIPT_ROOT"/deploy-client.sh
