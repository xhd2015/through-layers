@ECHO off
REM compile
..\antlr.bat -visitor -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\Java7Lexer.g4 && ..\antlr.bat -visitor  -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\Java7Parser.g4

REM javac -d gen\classes gen\*.java
@ECHO on