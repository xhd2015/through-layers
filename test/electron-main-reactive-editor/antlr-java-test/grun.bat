@ECHO OFF
REM SET CLASSPATH=.;.\resources\jar\antlr-4.7.2-complete.jar;%CLASSPATH%

SET TEST_CURRENT_DIR=%CLASSPATH:.;=%
if "%TEST_CURRENT_DIR%" == "%CLASSPATH%" ( SET CLASSPATH=.;%CLASSPATH% )
@ECHO ON
java org.antlr.v4.gui.TestRig %*