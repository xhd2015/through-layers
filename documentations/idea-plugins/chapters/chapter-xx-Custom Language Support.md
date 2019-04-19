# Links
https://www.jetbrains.org/intellij/sdk/docs/reference_guide/custom_language_support.html

# Step-by-step tutorial(take .properties for example)
1. Prerequisites, install `Grammar-Kit` and `PsiViewer` plugins
2. Define a language, by extending `Language` class

```java
package com.simpleplugin;

import com.intellij.lang.Language;

public class SimpleLanguage extends Language {
  public static final SimpleLanguage INSTANCE = new SimpleLanguage();

  private SimpleLanguage() {
    super("Simple");
  }
}
```