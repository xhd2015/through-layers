#!/bin/sh

# send-deploy  user host id_file  file dir src_dir 
# example:
#  ./send-deploy.sh root 10.101.92.121 ~/.ssh/id_rsa_xhd2015 deploy.tar.gz /root/deploy/test3 /root/deploy/test3/src


user="$1"
host="$2"
id_file="$3"
file="$4"
dir="$5"
src_dir="$6"

if [[ -z "$user" ]] || [[ -z "$host" ]] || [[ -z "$id_file" ]] || [[ -z "$file" ]] || [[ -z "$dir" ]] || [[ -z "$src_dir" ]] ;then
	echo 'send-deploy.sh user host id_file file dir src_dir'
	exit 1
fi
# firstly send to home, in case the directory does not exist
ssh -i "$id_file" "$user@$host" "mkdir -p '$dir';rm -rf '$dir'/*"
scp -i "$id_file" "$file" "$user@$host:$dir"
ssh -i "$id_file" "$user@$host" "cd '$dir';tar -xzvf ./'$file';export INTERFACE_ROOT=\$(pwd);export SRC_ROOT='$src_dir';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;util_deploy_maven_repo;util_deploy_maven;util_deploy_catalina;util_deploy_jdk;"
