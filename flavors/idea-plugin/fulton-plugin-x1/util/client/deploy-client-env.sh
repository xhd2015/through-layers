#!/bin/sh

[[ -z "$REMOTE_GIT_DIR" ]] && echo "REMOTE_GIT_DIR must be given" >&2 && return 1
[[ -z "$REMOTE_SSH_ID_FILE" ]] && echo "REMOTE_SSH_ID_FILE must be given" >&2 && return 1
[[ -z "$REMOTE_HOST" ]] && echo "REMOTE_HOST must be given" >&2 && return 1
[[ -z "$REMOTE_USER" ]] && echo "REMOTE_USER must be given" >&2 && return 1
[[ -z "$LOCAL_GIT_DIR" ]] && echo "LOCAL_GIT_DIR must be given" >& 2 && return 1
[[ -z "$CLIENT_SCRIPT_ROOT" ]] && echo "CLIENT_SCRIPT_ROOT must be given" >& 2 && return 1


[[ -z "$GIT_BIN" ]] && GIT_BIN=git
[[ -z "$SSH_BIN" ]] && SSH_BIN=ssh
[[ -z "$SCP_BIN" ]] && SCP_BIN=scp



export REMOTE_GIT_DIR
export REMOTE_SSH_ID_FILE
export REMOTE_HOST
export REMOTE_USER
export LOCAL_GIT_DIR


export GIT_BIN
export SSH_BIN
export SCP_BIN
