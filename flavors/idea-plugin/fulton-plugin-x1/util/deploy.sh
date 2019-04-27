#!/bin/sh

# prerequisities: deploy-env.sh
unalias cp 2>/dev/null
unalias rm 2>/dev/null
unalias mv 2>/dev/null

true

function util_check_environment {
    local tmp
    for i in "$@";do
	    eval tmp=\"\$$i\"
	    [[ -z "$tmp" ]] && echo "$i is required but not set" >&2 && return 1
    done
    return 0
}

# requires: SRC_DIR
function util_git_init_dir_if_needed {
	util_check_environment SRC_DIR || return 1
	mkdir -p "$SRC_DIR"
	(cd "$SRC_DIR" && { [[ -d .git ]] || "$GIT_BIN" init;})
	return  
}

# requires: SRC_DIR SRC_GIT_ORIGIN
function util_git_init_origin {
	util_check_environment SRC_DIR SRC_GIT_ORIGIN ||  return 1
	# simply assume the git dir exists
	(cd "$SRC_DIR" && "$GIT_BIN" config remote.origin.url "$SRC_GIT_ORIGIN") 
}
# requires:  GIT_SSH_USER, GIT_SSH_HOST, GIT_SSH_ID_FILE
function util_ssh_init_config {
	util_check_environment  GIT_SSH_USER GIT_SSH_HOST GIT_SSH_ID_FILE
	# create the config if needed
	[[ -f "~/.ssh/config" ]] || { mkdir -p ~/.ssh && touch ~/.ssh/config && chmod og-rwx ~/.ssh/config ; }
	cat >> ~/.ssh/config << EOF

Host $GIT_SSH_HOST
    HostName $GIT_SSH_HOST
    User  $GIT_SSH_USER
    IdentityFile $GIT_SSH_ID_FILE
EOF
}

# requires: SRC_DIR 
# accepts:  commit
function util_git_exist_commit {
    local commit=$1	
    ( cd "$SRC_DIR" || return 1;
      local res=$("$GIT_BIN" branch --list "$commit")
      [[ -n "$res" ]]
      return
      )
}

# requires: SRC_DIR  SRC_COMMIT
# brief: pull from origin with given branch
function util_git_pull {
   util_check_environment SRC_DIR SRC_COMMIT
   pushd "$SRC_DIR"
   # checkout is ignored if not exist
   if util_git_exist_commit "$SRC_COMMIT";then
	   "$GIT_BIN" checkout "$SRC_COMMIT"
   else
	   "$GIT_BIN" checkout -b "$SRC_COMMIT" origin/"$SRC_COMMIT"
   fi
   "$GIT_BIN" reset --hard
   "$GIT_BIN" pull origin "$SRC_COMMIT"
   popd
}

function util_deploy_maven_repo {
    local dir=$(dirname "$MAVEN_SETTINGS")
    mkdir -p "$dir"
    cp -f "$SRC_MAVEN_SETTINGS" "$MAVEN_SETTINGS"
    local content=$(cat "$MAVEN_SETTINGS")
    echo "$content" | sed '\`UNIQUE_MAVEN_REPO`s`UNIQUE_MAVEN_REPO`'"$MAVEN_REPO"'`' > "$MAVEN_SETTINGS"
}

function util_fix_catalina_profiles {
    local serverXml="$CATALINA_HOME"/conf/server.xml
    #directly cat and redirect will truncate the file!!! so we read it first
    local content=$(cat "$serverXml")
    (echo "$content"|\
    sed '/UNIQUE_SHUTDOWN_PORT/s/UNIQUE_SHUTDOWN_PORT/'"$DEPLOY_SHUTDOWN_PORT"'/'|\
    sed '/UNIQUE_CONNECTOR_PORT/s/UNIQUE_CONNECTOR_PORT/'"$DEPLOY_PORT"'/' |\
    sed '/UNIQUE_CONNECTOR_REDIRECT_PORT/s/UNIQUE_CONNECTOR_REDIRECT_PORT/'"$DEPLOY_REDIRECT_PORT"'/'|\
    sed '\`UNIQUE_CONTEXT_DOC_BASE`s`UNIQUE_CONTEXT_DOC_BASE`'"$DEPLOY_ROOT"'`'|\
    sed '\`UNIQUE_CONTEXT_PATH`s`UNIQUE_CONTEXT_PATH`'"$DEPLOY_CONTEXT_PATH"'`'
    ) > "$serverXml"
}

# util_unzip_file FILE DIR
function util_unzip_file {
   local dir=$2
   [[ -z "$dir" ]] && dir=`pwd`
   [[ ! -d "$dir" ]] && mkdir -p "$dir"
   tar -xz --overwrite -C "$dir"  -f "$1"
}

# unzip_link FILE LINK_NAME_IN_STD
function util_unzip_link_std {
   util_unzip_file "$1" "$INTERFACE_DEPLOY_BUNDLE"
   #local base=$(basename "$1")
   # remove 'tar gz -bin' suffix
   #base=${base/%.gz/}
   #base=${base/%.tar/}
   #base=${base/%-bin/}
   local base=$(tar -tf "$1"|head -n1|cut -d '/' -f1)
   [[ ! -d "$INTERFACE_STD_DEPLOY_BUNDLE" ]] && mkdir -p "$INTERFACE_STD_DEPLOY_BUNDLE"
   ln -sf "$INTERFACE_DEPLOY_BUNDLE/$base" "$INTERFACE_STD_DEPLOY_BUNDLE/$2" 
}

function util_deploy_maven {
  util_unzip_link_std "$SRC_MAVEN_ARCHIVE" maven
}
function util_deploy_catalina {
  util_unzip_link_std "$SRC_CATALINA_ARCHIVE" tomcat
  cp -f "$SRC_CATALINA_SERVER_TEMPLATE" "$CATALINA_HOME/conf/server.xml"
  util_fix_catalina_profiles
}

function util_deploy_jdk {
   util_unzip_link_std "$SRC_JDK_ARCHIVE" jdk
}

function util_git_get_current_branch {
   git status|head -n1|cut -d ' ' -f3
}
function util_git_get_commit_id {
   local commit="$1"
   [[ -z "$commit" ]] && commit=HEAD
   local msg=$("$GIT_BIN" log --pretty=oneline "$commit" -1)
   local code=$?
   [[ $code != 0 ]] && return $code
   echo "$msg"|awk '{print $1}'
}
# accepts: commit
function util_git_reset_to_commit {
   "$GIT_BIN" reset --hard && git checkout "$1"
}

# required: BUILD_ARTIFACT,BUILD_POM, BUILD_TARGET
# return: COMMIT_ARTIFACT
function util_build_with_commit {
   unset COMMIT_ARTIFACT
   [[ -z "$BUILD_ARTIFACT" ]] && echo 'BUILD_ARTIFACT must be given' >&2 && return 1
   local resultFile=$(mktemp)
   (
	   cd "$SRC_ROOT"
	   [[ ! -z "$GIT_COMMIT" ]] && util_git_reset_to_commit "$GIT_COMMIT"
	   local branch=$(util_git_get_current_branch)
	   local id=$(util_git_get_commit_id)
	   local opts=""
	   [[ -n "$BUILD_POM" ]] && opts="-f $BUILD_POM"
	   [[ -n "$BUILD_TARGET" ]] && opts="$opts $BUILD_TARGET"
	   util_maven_build $opts
           local buildCode=$?
	   [[ $buildCode != 0 ]] && echo 'Maven Build Failed' >& 2 && return 2
           # archive the build
	   mkdir -p "$BUILD_ARCHIVE_ROOT"
	   local suffix=".war"
	   local baseName=$(basename "$ARTIFACT")
           baseName=${baseName/%.war/}
	   local finalName="$baseName"-"$id""$suffix"
           local finalPath="$BUILD_ARCHIVE_ROOT/$finalName"
	   mv "$BUILD_ARTIFACT" "$finalPath"
           if [[ $buildCode = 0 ]];then
		   echo "$finalPath" > "$resultFile"
           fi
   )
   COMMIT_ARTIFACT=$(cat "$resultFile")
   rm "$resultFile"
}


function util_maven_build {
   (cd "$SRC_ROOT" && "$MAVEN_BIN" -s "$MAVEN_SETTINGS" -U -DskipTests $@)
}


function util_catalina_install_build {
  [[ ! -f "$BUILD_ARTIFACT" ]] && echo "BUILD_ARTIFACT must be specified,and must be a file,relative path is not recommended, current value:$BUILD_ARTIFACT" >&2 && return 1
  if [[ -d "$DEPLOY_ROOT" ]];then
    rm -rf "$DEPLOY_ROOT"/*
  else
    mkdir -p "$DEPLOY_ROOT"
  fi
  unzip -od "$DEPLOY_ROOT" "$BUILD_ARTIFACT" 2>&1 > /dev/null
}


function util_catalina_stop {
  local pid=$(lsof -i :"$DEPLOY_PORT"|tail -n1|awk '{print $2}')
  [[ ! -z "$pid" ]] && kill -9 "$pid"
}

# requires APP_ENV
function util_catalina_start {
   [[ -z "$APP_ENV" ]] && echo "APP_ENV must be given, valid values are:dev,test,press,pre,prd" >&2 && return 1
  (export JPDA_ADDRESS="$DEPLOY_JPDA_PORT" ;
   export JAVA_OPTS="$JAVA_OPTS -Dapp.env=$APP_ENV";
  "$CATALINA_BIN" jpda start)
}
function util_catalina_restart {
  util_catalina_stop
  util_catalina_start
}
function util_catalina_clean_logs {
  rm -rf $CATALINA_HOME/logs/*
  rm -rf $CATALINA_HOME/works/*
}

# requires: BUILD_ARTIFACT
function util_catalina_deploy {
   util_catalina_install_build  || return 1
   util_catalina_restart
}


function util_catalina_restart {
   util_catalina_stop
   util_catalina_clean_logs
   util_catalina_start
}

function util_view_log {
   tail -fn 1000 "$LOG"
}

