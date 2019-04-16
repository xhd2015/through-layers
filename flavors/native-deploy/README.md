# About
**Native Deploy** is itself a ssh server with some predefined scripts.

These scripts can read environment from a specified file,and act differently.

First, define a famliy of scripts, which should contain `env script`,`init script`,`destroy script`, and should also contain related resouces.Once requested, the script dispatcher sends all these script and resouces to a remote machine, via `ssh` and corresponding identify file and target directory,specifying a `env script`.

The `init script` does something related to the machine context,and if necessary it writes some permanent settings to a script which will be evaluated to represent current context.

To use git, both the slave and the master interacts with an intermediate git server.The client can direct the master to pull branches from the resource and use that a the code base to build.

To build `java`, the resources should contains: jdk,apache tomcat,maven.They are located in the `resouces` directory and is linked to root directory with version suffix removed.

The `init script` and `destroy script` can also triggers script in other directory if succeed, events are:`scripts/preinit.d/*.sh`,`scripts/postinit.d/*.sh` and `scripts/predestroy.d/*.sh` and `scripts/postdestroy.d/*.sh`.


The family of scripts defines a standard interface to interact with,and 

# structure

```
/path/to/instance/
                  env.sh
                  README.md
                  functions.sh
                  context.sh #generated
                  scripts/
                      init.sh
                      destroy.sh
                      preinit.d/
                                *.sh
                      postinit.d/
                                *.sh
                      predestroy.d/
                                *.sh
                      postdestroy.d/
                                *.sh
                  resources/
                        jdk-7u8u/...
                        maven-3.6/...
                        tomcat-7.3.06/...
                  java-->resouces/jdk-7u8u
                  maven-->resouces/maven-3.6
                  tomcat-->tomcat-7.3.06

```