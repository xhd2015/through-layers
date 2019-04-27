#!/bin/sh

# FULTON DEPLOY SCRIPTS
#    to simplify stuffs, we split the deploy process into 'client' and 'server' phases. Functionalities are provided by the server, and the client uses ssh to invoke the remote server's function
#    Sophisticated environments are set at the server side, leaving serverl import environment variables to be set by the client.Normally, these variables includes: REMOTE_INTERFACE_ROOT, REMOTE_USER, REMOTE_HOST, REMOTE_SSH_ID_FILE, REMOTE_GIT_DIR
#
#   It is important to setup the ssh config when initializing the client, run `util_git_ssh_config` to complete that.


function util_git_get_commit_id {
   local commit="$1"
   [[ -z "$commit" ]] && commit=HEAD
   local msg=$(cd "$LOCAL_GIT_DIR" && "$GIT_BIN" log --pretty=oneline "$commit" -1)
   local code=$?
   [[ $code != 0 ]] && return $code
   echo "$msg"|awk '{print $1}'
}


function util_git_get_current_branch {
    # git status sometimes costs time
   # git status|head -n1|cut -d ' ' -f3
    local match=$(cd "$LOCAL_GIT_DIR" && "$GIT_BIN" branch|grep -o -P '^\*.*')
    [[ -z "$match" ]] && return 1
    echo "$match"|cut -d ' ' -f2
}


function util_git_ssh_config {
    cat >> ~/.ssh/config << EOF
Host $REMOTE_HOST   
   HostName $REMOTE_HOST
   User $REMOTE_USER
   IdentityFile $REMOTE_SSH_ID_FILE
EOF
}


# foribely push
function util_git_push {
   local branchFrom="$1"
   local branchTo="$2"
   pushd "$LOCAL_GIT_DIR"
   [[ -z "$branchFrom" ]] && branchFrom=$(util_git_get_current_branch)
   [[ -z "$branchTo" ]] && branchTo=$branchFrom
   local commit=$(util_git_get_commit_id "$branchFrom")
   "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "mkdir -p '$REMOTE_GIT_DIR';cd '$REMOTE_GIT_DIR';[[ -d .git ]] || git init ;git checkout '$branchTo' 2>&1 1>/dev/null && git reset --hard $commit"
   "$GIT_BIN" push "$REMOTE_USER@$REMOTE_HOST:$REMOTE_GIT_DIR" "$branchFrom":"$branchTo" && \
	   "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "cd '$REMOTE_GIT_DIR';git checkout '$branchTo' && git reset --hard"
   popd
}

function util_git_config_remote_receive {
    "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "cd '$REMOTE_GIT_DIR';"$GIT_BIN" config receive.denyCurrentBranch ignore"
}

# init the git dir,make it configured with receive.denyCurrentBranch=ignore
function util_remote_init_git_dir {
   local gitdir=$1
   [[ -z "$gitdir" ]] && return
   util_remote_sh_raw "mkdir -p '$gitdir';cd '$gitdir' && { [[ -d .git ]] || git init ;} && git config receive.denyCurrentBranch ignore;exit"
}

# requires: REMOTE_INTERFACE_ROOT, BUILD_ARTIFACT, BUILD_POM,BUILD_TARGET
#   depend parameter: REMOTE_USER, REMOTE_HOST,REMOTE_GIT_DIR
# returns: COMMIT_ARTIFACT
function util_remote_build_working {
   [[ -z "$REMOTE_INTERFACE_ROOT" ]] && echo 'REMOTE_INTERFACE_ROOT is not given' >&2 && return 1
   [[ -z "$BUILD_ARTIFACT" ]] && echo 'BUILD_ARTIFACT is not given' >&2 && return 1
   [[ -z "$BUILD_POM" ]] && echo 'BUILD_POM is not given' >&2 && return 1
   [[ -z "$BUILD_TARGET" ]] && echo 'BUILD_TARGET is not given,a list is accpeted' >&2 && return 1
   unset COMMIT_ARTIFACT	
   local commited=false
   (cd "$LOCAL_GIT_DIR" && "$GIT_BIN" add --all && "$GIT_BIN" commit -m ":tmp:") && commited=true
  local tempFile=$(mktemp)
   # subprocess avoid crash influence 
  (
	  util_git_push
	  local pushCode=$?
	  local res
	  [[ $pushCode = 0 ]] && "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "export INTERFACE_ROOT='$REMOTE_INTERFACE_ROOT';export SRC_ROOT='$REMOTE_GIT_DIR';cd '$REMOTE_INTERFACE_ROOT';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;BUILD_ARTIFACT='$BUILD_ARTIFACT';BUILD_POM='$BUILD_POM';BUILD_TARGET='$BUILD_TARGET';util_build_with_commit;echo COMMIT_ARTIFACT=\$COMMIT_ARTIFACT" | tee "$tempFile"
	  res=$(cat "$tempFile"|tail -n1|sed -n '/^COMMIT_ARTIFACT=/p'|cut -d '=' -f2)
	  echo "$res" > "$tempFile"
	  # after built, if we pushed something new, we reset it
	  [[ $commited = true && $pushCode = 0 ]] && "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "cd '$REMOTE_GIT_DIR';"$GIT_BIN" reset --hard HEAD~1"
   )
   [[ $commited = true ]] && "$GIT_BIN" reset --soft HEAD~1 
   COMMIT_ARTIFACT=$(cat "$tempFile") 
   rm "$tempFile"
   [[ -n "$COMMIT_ARTIFACT" ]]
   return $?
}


# requires: BUILD_ARTIFACT, APP_ENV
#   depends: REMOTE_INTERFACE_ROOT, REMOTE_GIT_DIR
function util_remote_deploy {
	[[ -z "$BUILD_ARTIFACT" ]] && echo "BUILD_ARTIFACT is not given" >&2 && return 1
	  "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "export INTERFACE_ROOT='$REMOTE_INTERFACE_ROOT';export SRC_ROOT='$REMOTE_GIT_DIR';cd '$REMOTE_INTERFACE_ROOT';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;BUILD_ARTIFACT='$BUILD_ARTIFACT';APP_ENV='$APP_ENV'; util_catalina_deploy"
}

function util_remote_deploy_working {
    util_remote_build_working  &&  (export BUILD_ARTIFACT=$COMMIT_ARTIFACT;util_remote_deploy)
}
function util_remote_view_logs {
	  "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "export INTERFACE_ROOT='$REMOTE_INTERFACE_ROOT';export SRC_ROOT='$REMOTE_GIT_DIR';cd '$REMOTE_INTERFACE_ROOT';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;util_view_log"

}
function util_remote_catalina_restart {
	  "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "export INTERFACE_ROOT='$REMOTE_INTERFACE_ROOT';export SRC_ROOT='$REMOTE_GIT_DIR';cd '$REMOTE_INTERFACE_ROOT';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;APP_ENV='$APP_ENV';util_catalina_restart"
}
function util_remote_catalina_stop {
	  "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "export INTERFACE_ROOT='$REMOTE_INTERFACE_ROOT';export SRC_ROOT='$REMOTE_GIT_DIR';cd '$REMOTE_INTERFACE_ROOT';source deploy-env-unset.sh;source deploy-env.sh;source deploy.sh;util_catalina_stop"
}



function util_remote_backup_bashrc {
   "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "unalias cp;[[ -f ~/.bashrc ]] && cp ~/.bashrc ~/.bashrc_raw_backup"
}
function util_remote_restore_bashrc {
   "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "unalias cp;[[ -f ~/.bashrc_raw_backup ]] && cp ~/.bashrc_raw_backup ~/.bashrc"
}

# the result will remain the same even when this funciton is invoked mutliple times

function util_remote_init_all {
    echo 'init local ~/.ssh/config, map REMOTE_USER,REMOTE_HOST and REMOTE_SSH_ID_FILE'
    util_git_ssh_config
    # firstly,clear the line, then replace with a newer one
    local tmp=$(mktemp)
    local base=$(basename "$tmp")
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
    echo 'init remote ~/.bashrc, make it accepts CUSTOM_BASHRC'
    "$SCP_BIN" "$tmp" "$REMOTE_USER@$REMOTE_HOST:~/$base"  2>&1 1>/dev/null
    "$SSH_BIN" "$REMOTE_USER@$REMOTE_HOST" "bash ~/'$base';rm -f ~/'$base'" 
   rm "$tmp"
     echo 'init remote git dir'
     util_remote_init_git_dir "$REMOTE_GIT_DIR"
}

# brief: base framework for executing command on remote ssh server
# the script is seperated into 2 parts: 
# requires:  any command line to be executed on the remote server
# before this function can correctly work, you must first run 'util_remote_init_all' to init .bashrc to accept CUSTOM_BASHRC
# !!!IMPORTANT!!!
#   NOTE: this is extremely important: you cannot output anything when using scp to transfer files, especially .bashrc, I was suffered from this a long time a long time ago
function util_remote_sh_raw {
    local tmp=$(mktemp)
    # initial script
     echo '#!/bin/sh' >> "$tmp"
     echo "$@" >> "$tmp"
     local remoteName=$(basename "$tmp")
     # avoid name collasion
     # FOUND A BUG: if you output something from .bashrc, scp will not send the file
     "$SCP_BIN" "$tmp" "$REMOTE_USER@$REMOTE_HOST:~/$remoteName" 2>&1 1>/dev/null
     # -t forces a tty allocation(necessary for custom bash)
     "$SSH_BIN" -t "$REMOTE_USER@$REMOTE_HOST" "export CUSTOM_BASHRC=~/'$remoteName';bash --login -i;rm ~/'$remoteName'"
      rm -f "$tmp"
}

function util_remote_sh {
	local script=$(cat << EOF
	export INTERFACE_ROOT="$REMOTE_INTERFACE_ROOT"
	export SRC_ROOT="$REMOTE_GIT_DIR"
        export APP_ENV="$APP_ENV"
        export BUILD_POM="$BUILD_POM"
        export BUILD_TARGET="$BUILD_TARGET"
        export BUILD_ARTIFACT="$BUILD_ARTIFACT"
EOF
)
        script=$script$(cat << 'EOF'

	cd "$INTERFACE_ROOT"
	source deploy-env-unset.sh
	source deploy-env.sh
	source deploy.sh
EOF
)
        script=$script$(cat << EOF

        $@
EOF
)
        util_remote_sh_raw "$script"
}


function util_remote_login {
   util_remote_ssh
}

# REQUIRES: REMOTE_NTERFACE_ROOT SRC_ROOT
# init the remote value
function util_remote_deploy_bundle {
	util_remote_sh 'util_deploy_maven_repo;util_deploy_maven ; util_deploy_catalina ;util_deploy_jdk'
}
