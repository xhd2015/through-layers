@ECHO off
REM compile
..\antlr.bat -visitor -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\MyBatisLexer.g4 && ..\antlr.bat -visitor  -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\MyBatisParser.g4 && ..\antlr.bat -visitor  -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\Java7SqlLexer.g4

REM NOTE -o <DIR> dir must be absolute,else it will cause wrong output
REM  ..\antlr.bat -visitor  -o %~dp0src\main\java\com\fulton_shaw\antlr\test\gen -package com.fulton_shaw.antlr.test.gen %~dp0src\main\resources\grammar\HashLexer.g4

REM javac -d gen\classes gen\*.java
@ECHO on