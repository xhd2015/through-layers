# Links
https://docs.gradle.org/current/userguide/writing_build_scripts.html

# Overview
Almost everything in the build script manipulate the api exposed by `Project`
# Simple Start
```gradle
println name
println project.name
```

# Define Variable
use def
```gradle
def dest = "dest"

task copy(type: Copy) {
    from "source"
    into dest
}
```

# Extra Properties
extra properties can be accessed via `ext`
```gradle
plugins {
    id 'java'
}

ext {
    springVersion = "3.1.0.RELEASE"
    emailNotification = "build@master.org"
}

sourceSets.all { ext.purpose = null }

sourceSets {
    main {
        purpose = "production"
    }
    test {
        purpose = "test"
    }
    plugin {
        purpose = "production"
    }
}
```


# Manipulate/Config Arbitrary Object
```groovy
import java.text.FieldPosition

task configure {
    doLast {
        def pos = configure(new FieldPosition(10)) {
            beginIndex = 1
            endIndex = 5
        }
        println pos.beginIndex
        println pos.endIndex
    }
}
```

# Using `apply` to Call External Script
```groovy
task configure {
    doLast {
        def pos = new java.text.FieldPosition(10)
        // Apply the script
        apply from: 'other.gradle', to: pos
        println pos.beginIndex
        println pos.endIndex
    }
}
```

# Some Groovy Basics
The groovy jdk added many useful methods to the java langauage, such that `Iterable` has an `each` method.
```groovy
// Iterable gets an each() method
configurations.runtime.each { File f -> println f }
```

- Property Accessor
groovy automatically convert access to getter/setter
```groovy
// Using a getter method
println project.buildDir
println getProject().getBuildDir()

// Using a setter method
project.buildDir = 'target'
getProject().setBuildDir('target')
```

- Optional parenthese on method calls
```groovy
test.systemProperty 'some.prop', 'value'
test.systemProperty('some.prop', 'value')
```
- Closure as an argument
```groovy
repositories {
    println "in a closure"
}
repositories() { println "in a closure" }
repositories({ println "in a closure" })
```

- Closure `delegate`
Each closure has a `delegate` which is used to resolve variables
```groovy
dependencies {
    assert delegate == project.dependencies
    testCompile('junit:junit:4.12')
    delegate.testCompile('junit:junit:4.12')
}
```

- Gradle auto-import
For sake of convienence, gradle has added many imports,the list can be found at here: https://docs.gradle.org/current/userguide/writing_build_scripts.html