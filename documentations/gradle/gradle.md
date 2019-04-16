
# Gradle Reference
https://gradle.org/

# Get Started
- require: java8
- download gradle bin zip
- unzip, add `bin` to `PATH`

NOTE: command completion is ready for `bash`.
# Using Gradle Wrapper,`gradlew`
to update:
```bash
./gradlew wrapper --gradle-version=5.3.1 --distribution-type=bin
./gradlew tasks
```


# Building Java Libraries
```bash
# create dir
mkdir building-java-libraries
cd building-java-libraries

# run init task, first, generate gradlew,then creates a new project with a concrete structure: build.gradle, gradle/{wrapper/{gradel-wrapper.jar,gradle-wrapper.properties}}, gradlew, gradlew.bat, settings.gradle, src/main/java, test/main/java
gradle init --type java-library --project-name jvm-library
```

generated build.gradle
```gradle
plugins {
    id 'java-library'
    // id 'war'  //  using war plugin
     id 'org.gretty' version '2.2.0' // using jetty plugin,./gradlew appRun to run
}

repositories {
    jcenter()  // public center
    mavenCentral()
}

dependencies {
    api 'org.apache.commons:commons-math3:3.6.1'  // export, like scope=compile

    implementation 'com.google.guava:guava:26.0-jre'  //internally,not exposed,like scope=test

    testImplementation 'junit:junit:4.12' // JUnit Testing

    providedCompile 'javax.servlet:javax.servlet-api:3.1.0' // provided
}
```
Then ,build the project
```bash
# build the project
./gradlew build
# customize the jar
./gradlew jar
# generate javadoc
./gradlew javadoc
```

Customize Jar
```gradle
jar {
    manifest {
        attributes('Implementation-Title': project.name,
                   'Implementation-Version': project.version)
    }
}
```
custom repostory
```gradle
repositories {
    ivy {
        // URL can refer to a local directory
        url "../local-repo"
    }
}
```
publishing
```gradle
uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: "file://localhost/tmp/myRepo/")
        }
    }
}

uploadArchives {
    repositories {
        add project.repositories.fileRepo
        ivy {
            credentials {
                username "username"
                password "pw"
            }
            url "http://repo.mycompany.com"
        }
    }
}
```