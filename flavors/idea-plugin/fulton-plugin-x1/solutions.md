# Links

# About
How we meet and solve these problems

# Problem#1  `ESC` key not sent to bash
The following code snippet in JetBrains source code, intercept the `ESC` key so that the terminal will not send it.
```java
  @Override
  public List<TerminalAction> getActions() {
    List<TerminalAction> actions = super.getActions();
    if (!mySettingsProvider.overrideIdeShortcuts()) {
      actions
        .add(new TerminalAction("EditorEscape", new KeyStroke[]{KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0)}, input -> {
          if (!myTerminalPanel.getTerminalTextBuffer().isUsingAlternateBuffer()) {
            ToolWindowManager.getInstance(myProject).activateEditorComponent();
            return true;
          }
          else {
            return false;
          }
        }).withHidden(true));
    }
    return actions;
  }  
```

solution see :`com.fulton_shaw.idea.plugin.x1.action.terminal.group.StandaloneTerminalWidgetWrapper.removeEscIntercept`, which removes the `ESC` action.
```bash
the key process is as follows:
   Key Pressed-->
             ask for ActionProvider.getActions() -->
                                    is the key stroke matches current key code? handle it if you can(return true or false)
                                          if non handled, send the code
   Key Typed-->
            is ISO control ?  true --> return
                              false --> send the key
```