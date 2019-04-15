# Extension and Extension Points
Like extending something, `Extension Point` is a point that a Plugin can declare what other Extension can extends, and `Extensions` declare what a plugin extends other `Extension Points`.

`plugin.xml` example:
```xml
<extensionPoints>
  <extensionPoint name="MyExtensionPoint1" beanClass="MyPlugin.MyBeanClass1">
  <extensionPoint name="MyExtensionPoint2" interface="MyPlugin.MyInterface">
</extensionPoints>
```


```xml
<!-- Declare extensions to access extension points in the IntelliJ Platform.
     These extension points have been declared using the "interface" attribute.
 -->
  <extensions defaultExtensionNs="com.intellij">
    <appStarter implementation="MyTestPackage.MyTestExtension1" />
    <applicationConfigurable implementation="MyTestPackage.MyTestExtension2" />
  </extensions>

<!-- Declare extensions to access extension points in a custom plugin
     The MyExtensionPoint1 extension point has been declared using *beanClass* attribute.
-->
  <extensions defaultExtensionNs="MyPluginID">
     <MyExtensionPoint1 key="keyValue" implementationClass="MyTestPackage.MyClassImpl"></MyExtensionPoint1>
  </extensions>
  ```

  # Links for core extension points
  https://upsource.jetbrains.com/idea-ce/file/idea-ce-4f9b5f89b2a19ce700b1373a465c16b28ed8ad52/platform/platform-resources/src/META-INF/LangExtensionPoints.xml

  https://upsource.jetbrains.com/idea-ce/file/idea-ce-4f9b5f89b2a19ce700b1373a465c16b28ed8ad52/platform/platform-resources/src/META-INF/PlatformExtensionPoints.xml

  https://upsource.jetbrains.com/idea-ce/file/idea-ce-4f9b5f89b2a19ce700b1373a465c16b28ed8ad52/platform/platform-resources/src/META-INF/VcsExtensionPoints.xml