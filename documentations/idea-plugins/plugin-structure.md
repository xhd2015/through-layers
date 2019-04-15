# Plugin Content
Component | Description
-|-
`Application` |IDE session
`Project`  | each instance in the IDE
`Module` | every `Module` inside a `Project`

Note: every Component should have interface and implementation classes specified in the configuration file.The same class may be specified as implementations for different interfaces, but not interfaces for different level components.

Each component has a unique name `getComponentName()`.It is recommended that the name follows:`<plugin_name>.<component_name>`

Component can be automatically saved and restored if it implements `PersistentStateComponent`.Default settings for component is located at `<component_name>.xml`, and the `readExternal()` is invoked for twice: once for default value,another for custom value.

**LifeCycle**
- Creation, `constructor`
- Initialization, `initComponent`
- Configuration, `readExternal`,`loadState`
- Module Initialization,`moduleAdded`
- Project Opened, `projectOpened` is a project has been loaded

- Saving Configuration,`writeExternal`, `getState`

- Disposal, `disposeComponent`


NOTE: refer component in `initComponent` or via constructor argument, do not use `getComponent` inside a constructor.
