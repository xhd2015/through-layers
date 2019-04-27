#!/bin/sh
# static environment
# NOTE: you must unset the variable to get its generated value
#   Maybe you want to run the following before import this:
#     unset JAVA_HOME
#     unset CLASSPATH
#     unset MAVEN_HOME
#     unset CATALINA_HOME
# TO BE USED WITH source

[[ -z "$INTERFACE_ROOT" ]] && echo 'INTERFACE_ROOT must be given' >&2 && return 1
[[ -z "$SRC_ROOT" ]] && echo 'SRC_ROOT must be given' >&2 && return 1
[[ -z "$BUILD_BASE_NAME" ]] && BUILD_BASE_NAME=$(basename "$SRC_ROOT")

# used to determine the base name of the build
[[ -z "$BUILD_ARCHIVE_ROOT" ]] && BUILD_ARCHIVE_ROOT="$INTERFACE_ROOT/build-archive/$BUILD_BASE_NAME"

#[[ -z "$BUILD_ROOT" ]] && BUILD_ROOT="$SRC_ROOT/target"
[[ -z "$DEPLOY_ROOT" ]] && DEPLOY_ROOT="$INTERFACE_ROOT/war-exploded/$BUILD_BASE_NAME"
# unchecked:DEPLOY_CONTEXT_PATH
[[ -z "$DEPLOY_PORT" ]] && DEPLOY_PORT=8000
[[ -z "$DEPLOY_JPDA_PORT" ]] && DEPLOY_JPDA_PORT=8404
[[ -z "$DEPLOY_SHUTDOWN_PORT" ]] && DEPLOY_SHUTDOWN_PORT=8405
[[ -z "$DEPLOY_REDIRECT_PORT" ]] && DEPLOY_REDIRECT_PORT=8406

[[ -z "$INTERFACE_BUNDLE" ]] && INTERFACE_BUNDLE="$INTERFACE_ROOT/bundle"
[[ -z "$INTERFACE_DEPLOY_BUNDLE" ]] && INTERFACE_DEPLOY_BUNDLE="$INTERFACE_ROOT/deploy-bundle"
[[ -z "$INTERFACE_STD_DEPLOY_BUNDLE" ]] && INTERFACE_STD_DEPLOY_BUNDLE="$INTERFACE_ROOT/std-deploy-bundle"

[[ -z "$MAVEN_HOME" ]] && MAVEN_HOME="$INTERFACE_STD_DEPLOY_BUNDLE/maven"
[[ -z "$MAVEN_REPO" ]] && MAVEN_REPO="$INTERFACE_STD_DEPLOY_BUNDLE/maven_repo"
[[ -z "$MAVEN_BIN" ]] && MAVEN_BIN="$MAVEN_HOME/bin/mvn"

[[ -z "$SRC_MAVEN_ARCHIVE" ]] && SRC_MAVEN_ARCHIVE="$INTERFACE_BUNDLE/apache-maven-3.6.1-bin.tar.gz"
[[ -z "$SRC_JDK_ARCHIVE" ]] && SRC_JDK_ARCHIVE="$INTERFACE_BUNDLE/jdk-7u80-linux-x64.tar.gz"
[[ -z "$SRC_CATALINA_ARCHIVE" ]] && SRC_CATALINA_ARCHIVE="$INTERFACE_BUNDLE/apache-tomcat-7.0.94.tar.gz"
[[ -z "$SRC_MAVEN_SETTINGS" ]] && SRC_MAVEN_SETTINGS="$INTERFACE_BUNDLE/maven_settings.xml"
[[ -z "$SRC_CATALINA_SERVER_TEMPLATE" ]] && SRC_CATALINA_SERVER_TEMPLATE="$INTERFACE_BUNDLE/catalina_server.xml"


[[ -z "$MAVEN_SETTINGS" ]] && MAVEN_SETTINGS="$MAVEN_REPO/settings.xml"

[[ -z "$JAVA_HOME" ]] && JAVA_HOME="$INTERFACE_STD_DEPLOY_BUNDLE/jdk" && PATH="$JAVA_HOME/bin:$PATH"
[[ -z "$JAVA_BIN" ]] && JAVA_BIN="$JAVA_HOME/bin/java"
[[ -z "$CLASSPATH" ]] && CLASSPATH="$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar"


[[ -z "$CATALINA_HOME" ]] && CATALINA_HOME="$INTERFACE_STD_DEPLOY_BUNDLE/tomcat"
[[ -z "$CATALINA_BIN" ]] && CATALINA_BIN="$CATALINA_HOME/bin/catalina.sh"
[[ -z "$CATALINA_LOG" ]] && CATALINA_LOG="$CATALINA_HOME/logs/catalina.out"
[[ -z "$LOG" ]] && LOG="$CATALINA_LOG"

[[ -z "$GIT_BIN" ]] && GIT_BIN=git



export INTERFACE_ROOT
export SRC_ROOT

export BUILD_BASE_NAME
export BUILD_ARCHIVE_ROOT

export DEPLOY_PORT
export DEPLOY_ROOT
export DEPLOY_CONTEXT_PATH
export DEPLOY_JPDA_PORT
export DEPLOY_SHUTDOWN_PORT
export DEPLOY_REDIRECT_PORT

export INTERFACE_BUNDLE
export INTERFACE_DEPLOY_BUNDLE
export INTERFACE_STD_DEPLOY_BUNDLE 

export SRC_MAVEN_ARCHIVE
export SRC_JDK_ARCHIVE
export SRC_CATALINA_ARCHIVE
export SRC_MAVEN_SETTINGS
export SRC_CATALINA_SERVER_TEMPLATE

export MAVEN_HOME
export MAVEN_REPO
export MAVEN_SETTINGS

export JAVA_HOME
export CLASSPATH
export PATH

export CATALINA_HOME
export CATALINA_BIN
export CATALINA_LOG
export LOG

export GIT_BIN
