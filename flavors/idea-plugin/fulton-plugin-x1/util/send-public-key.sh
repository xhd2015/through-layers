#!/bin/bash

# send-public-key user host id_file  
# example:
#  ./send-public-key.sh root 10.101.92.121 ~/.ssh/id_rsa_xhd2015.pub


user="$1"
host="$2"
id_pub_file="$3"

if [[ -z "$user" ]] || [[ -z "$host" ]] || [[ -z "$id_pub_file" ]]  ;then
	echo 'send-public-key.sh user host id_pub_file'
	exit 1
fi
# test
if echo exit|ssh -o "PasswordAuthentication no" -T "$user@$host" 2>&1 >/dev/null;then 
	echo "you can already connect to the remote server,config pass"
	exit 0
fi

echo "send public key:$id_pub_file to remote server,you need type password twice"
tmp=$(mktemp)
base=$(basename "$tmp")
scp "$id_pub_file" "$user@$host:~/$base" && ssh "$user@$host" "[[ -d ~/.ssh ]] || mkdir -p ~/.ssh;[[ -f ~/.ssh/authorized_keys ]] || { touch ~/.ssh/authorized_keys; chmod og-rwx ~/.ssh/authorized_keys ; } ; cat ~/'$base' >> ~/.ssh/authorized_keys;rm ~/'$base'"

rm -f "$tmp"
