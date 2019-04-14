@echo off
REM doskey antlr4=java org.antlr.v4.Tool $*
REM doskey grun =java org.antlr.v4.gui.TestRig $*
REM SET CLASSPATH=.;..\resources\jar\antlr-4.7.2-complete.jar;%CLASSPATH%
java -cp "%CLASSPATH%;%~dp0\..\..\resources\jar\antlr-4.7.2-complete.jar" org.antlr.v4.Tool %*
@echo on


