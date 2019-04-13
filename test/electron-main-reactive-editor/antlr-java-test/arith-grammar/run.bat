REM====================FOR LibExpr.g4======================

REM generate
..\antlr.bat -visitor -lib . -o lib_expr LibExpr.g4

REM compile
javac -d lib_expr\classes lib_expr\*.java

REM run
java -cp "%CLASSPATH%;lib_expr\classes" Test expr.txt