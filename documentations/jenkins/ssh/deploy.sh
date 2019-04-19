source ./env.sh

[[ -z "$HOST" || -z "ENV" ]] && echo 'no HOST nor ENV specified' && exit 1
###=======================START TOMCAT=======================
cat > tmp.sh << EOF
/usr/sbin/lsof -i :8000|grep -v "PID"|awk '{print "kill -9",\$2}'|sh

rm -rf /root/ads/*
unzip -od /root/ads/ /root/ads-admin.war

rm -rf /root/ads-admin.war

rm -rf /root/apache-tomcat-7.0.72/work/*

rm -rf /root/apache-tomcat-7.0.72/logs/*
cd /root/apache-tomcat-7.0.72/bin
export JAVA_OPTS="\${JAVA_OPTS} -Dapp.env=${ENV}" 
sh  catalina.sh jpda start
EOF

scp -o "StrictHostKeyChecking no" -i "$ID_FILE" tmp.sh  "$WAR_FILE" "root@${HOST}:/root" && ssh -i "$ID_FILE" "root@${HOST}" "cd /root && sh tmp.sh"