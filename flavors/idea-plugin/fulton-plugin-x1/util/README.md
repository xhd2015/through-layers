# About
This archive is meant to be used to deploy `war` files to `tomcat` server, with `ssh`,`git`,`maven`,etc.
# Get Started
- in the very beginning, modify the [client/init.sh](client/init.sh) file to make it correspond to your environment
```bash
# see client/init.sh for a list of required environment variables
source client/init.sh
```
- ensure directory `bundle/` contains the following file,if not yet, download them, if an OS version is needed, choose for linux/rpm.
```bash
apache-maven-3.6.1-bin.tar.gz

apache-tomcat-7.0.94.tar.gz

jdk-7u80-linux-x64.tar.gz
```
- make sure the remote server can recognize your ssh identity file(if you have completed this step,just skip)
```bash
# you will need to type password to access the remote server, you need type password twice,once for scp,another for ssh
./send-public-key "$REMOTE_USER" "$REMOTE_HOST" /path/to/publicKey
```
- init ssh config,copy this file to target server,create a specific directory for it
```bash
./init-all.sh "$REMOTE_USER" "$REMOTE_HOST" "$REMOTE_SSH_ID_FILE"  "$REMOTE_GIT_DIR"
./archive-deploy.sh 
./send-deploy "$REMOTE_USER" "$REMOTE_HOST" "$REMOTE_SSH_ID_FILE" deploy.tar.gz "$REMOTE_INTERFACE_ROOT" "$REMOTE_GIT_DIR"
```
- after the previous step, the server should have been prepared,then deploy your working directory to the remote server
```bash
util_remote_deploy_working
```
- verify the log
```bash
util_remote_view_logs
```

