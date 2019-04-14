@ECHO OFF
REM SET CLASSPATH=.;.\resources\jar\antlr-4.7.2-complete.jar;%CLASSPATH%

REM SET TEST_CURRENT_DIR=%CLASSPATH:.;=%
REM if "%TEST_CURRENT_DIR%" == "%CLASSPATH%" ( SET CLASSPATH=.;%CLASSPATH% )
java -cp "%CLASSPATH%;%~dp0..\..\resources\jar\antlr-4.7.2-complete.jar" org.antlr.v4.gui.TestRig %*
@ECHO ON