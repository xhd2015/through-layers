REM====================CUSTOM CLASSPATH=================
SET CLASSPATH=.;D:\Pool\Projects\wobstorm\through-layers\test\electron-main-reactive-editor\resources\jar\antlr-4.7.2-complete.jar;%CLASSPATH%
REM====================FOR LibExpr.g4======================

REM generate
..\antlr.bat -visitor -lib . -o lib_expr LibExpr.g4

REM compile
javac -d lib_expr\classes lib_expr\*.java

REM run
java -cp "%CLASSPATH%;lib_expr\classes" Test expr.txt

REM=======================FOR ChannelTestLexer.g4==================
REM generate
..\antlr.bat -visitor -lib . -o channel_test ChannelTestLexer.g4

REM compile
javac -d channel_test\classes channel_test\*.java

REM run
java -cp "%CLASSPATH%;channel_test\classes" TestShowLex channel_test.txt