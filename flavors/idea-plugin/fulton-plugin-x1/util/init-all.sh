#!/bin/sh

# init-ssh user host id_file  
# example:
#  ./send-deploy.sh root 10.101.92.121 ~/.ssh/id_rsa_xhd2015


user="$1"
host="$2"
id_file="$3"
remote_git_dir="$4"

if [[ -z "$user" ]] || [[ -z "$host" ]] || [[ -z "$id_file" ]]  || [[ -z "$remote_git_dir" ]];then
	echo 'send-deploy.sh user host id_file remote_git_dir'
	exit 1
fi
# firstly send to home, in case the directory does not exist
echo 'init local ~/.ssh/config, map user,hostname and identityFile'
if [[ ! -f ~/.ssh/config ]];then
	mkdir -p ~/.ssh
	touch ~/.ssh/config
        chmod og-rwx ~/.ssh/config
fi
cfg=$(cat ~/.ssh/config)
hostline="Host $host"
hostnameline="    HostName $host"
userline="    User     $user"
idline="    IdentityFile $id_file"
content=$(cat << EOF

$hostline
$hostnameline
$userline
$idline
EOF
)

if ! { echo "$cfg"|grep -q "$hostnameline" && echo "$cfg"|grep -q "$userline" ;};then
	echo "$content" >> ~/.ssh/config
#else
#	(
#       echo "$content"|\
#       sed "/$hostline"'$'"/s//$hostline/" |\
#       sed "/$hostnameline"'$'"/s//$hostnameline/" |\
#       sed "/$userline"'$'"/s//$userline/" |\
#       sed "$idline"'$'"/s//$idline/"
#      ) >> ~/.ssh/config
fi


# then init remote bashrc
    echo 'init remote ~/.bashrc, make it accepts CUSTOM_BASHRC'
    tmp=$(mktemp)
    base=$(basename "$tmp")
    cat > "$tmp" << 'EOF'
[[ -f ~/.bashrc ]] || touch ~/.bashrc
rc=$(cat ~/.bashrc)
content='[[ ! -f "$CUSTOM_BASHRC" ]] || source "$CUSTOM_BASHRC" #UNIQUE_CUSTOM_BASHRC_LINE'
if ! echo "$rc"|grep -q UNIQUE_CUSTOM_BASHRC_LINE;then
   echo  >> ~/.bashrc
   echo "$content" >> ~/.bashrc
else
   echo "$rc"|sed '/.*UNIQUE_CUSTOM_BASHRC_LINE$/s//'"$content"'/' > ~/.bashrc
fi

EOF
    "$SCP_BIN" "$tmp" "$REMOTE_USER@$REMOTE_HOST:~/$base"  2>&1 1>/dev/null
    "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "bash ~/'$base';rm -f ~/'$base'"
   rm "$tmp"


echo 'init remote git dir, config receive.denyCurrentBranch=ignore'
   [[ -z "$remote_git_dir" ]] || \
    "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "mkdir -p '$remote_git_dir';cd '$remote_git_dir' && { [[ -d .git ]] || git init ;} && git config receive.denyCurrentBranch ignore;exit"

