# Links
https://github.com/JetBrains/jediterm

https://github.com/JetBrains/pty4j

# About
A terminal/pseduo-terminal is a special process that accepts command and in ture execute these command under that process or create a new wrapper process.

The terminal is created differently as compared with normal process. Its output contains control sequence.

# PtyProcess
```java
 PtyProcess extends Process
```

3 sub classes: `CygwinPtyProcess`,
# TtyConnector Classes
- TtyConnector
bind the process input stream and output stream.

- ProcessTtyConnector
Base implementation of TtyCOnnector
- PtyProcessTtyConnector
