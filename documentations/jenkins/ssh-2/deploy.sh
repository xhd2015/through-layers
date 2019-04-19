source ./env.sh

[[ -z "$HOST" || -z "ENV" ]] && echo 'no HOST nor ENV specified' && exit 1
###=======================START TOMCAT=======================
cat > tmp.sh << EOF
#!/bin/sh
function kill_tomcat {
   /usr/sbin/lsof -i :"$PORT"|grep -v "PID"|awk '{print "kill -9",\$2}'|sh
}
function reset_tomcat_war {
   rm -rf "${REMOTE_WAR_DIR}"/*
   unzip -od "${REMOTE_WAR_DIR}" "${REMOTE_WAR_FILE}"
}
function clean_tomcat_work_log {
  rm -rf "${REMOTE_TOMCAT_DIR}"/work/*
  rm -rf "${REMOTE_TOMCAT_DIR}"/logs/*
}

function start_tomcat {
   (cd "$REMOTE_TOMCAT_DIR"/bin &&  export JAVA_OPTS="\${JAVA_OPTS} -Dapp.env=${ENV}" && sh  catalina.sh jpda start)
}


if [[ "$PROCESS_MODE" = "restart" ]];then
    kill_tomcat
    start_tomcat
elif [[  "$PROCESS_MODE" = "deploy" ]];then
    kill_tomcat
    reset_tomcat_war
    clean_tomcat_work_log
    start_tomcat
fi
EOF

# copy files if necessary
FILES_TO_COPY=tmp.sh
if [[ "$PROCESS_MODE" = "deploy" ]];then
   FILES_TO_COPY="$FILES_TO_COPY $ID_FILE"
fi
if [[ ! -z "$FILES_TO_COPY" ]]; then
  scp -o "StrictHostKeyChecking no" -i "$ID_FILE" $FILES_TO_COPY  "$WAR_FILE" "root@${HOST}:/root"
fi
[[ $? = 0 ]] && ssh -o "StrictHostKeyChecking no" -i "$ID_FILE" "root@${HOST}" "cd /root && sh tmp.sh"