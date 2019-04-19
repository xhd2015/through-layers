# Links

# Virtual File System
VFS is a component of IntelliJ Platform, it encapsulate most of its activity for working with files, regardless of where the file comes from.

All VFS access operations on a file goes through snapshot.Snapshot is application level, not project level.

# Document
A document is an editable sequence of Unicode characters.

Get:

- From an action:`e.getData(PlatformDataKeys.EDITOR).getDocument()`
- From a virtual file: `FileDocumentManager.getDocument()`
- From a PSI file: `PsiDocumentManager.getInstance().getDocument()`

Document are meant to serve as plain text editor.
# Editor

Register an action for Editor
```xml
<actions>
    <action id="EditorBasics.EditorIllustration" class="EditorIllustration" text="Editor Basics"
        description="Illustrates how to plug an action in">
        <add-to-group group-id="EditorPopupMenu" anchor="last"/>
    </action>
</actions>
```

Define if the actions is shown,just override `update`:
```java
public class EditorIllustration extends AnAction {
    @Override
    public void update(AnActionEvent e) {
        //Get required data keys
        final Project project = e.getProject();
        final Editor editor = e.getData(CommonDataKeys.EDITOR);
        //Set visibility only in case of existing project and editor
        e.getPresentation().setVisible(project != null && editor != null);
    }
}
```

Obtaining a caret model and selection
```java
editor.getSelectionModel()
```

Full Code:
```java
@Override
public void actionPerformed(final AnActionEvent e) {
    //Get all the required data from data keys
    final Editor editor = e.getRequiredData(CommonDataKeys.EDITOR);
    final Project project = e.getProject();
    //Access document, caret, and selection
    final Document document = editor.getDocument();
    final SelectionModel selectionModel = editor.getSelectionModel();

    final int start = selectionModel.getSelectionStart();
    final int end = selectionModel.getSelectionEnd();
    //Making the replacement
    WriteCommandAction.runWriteCommandAction(project, () ->
        document.replaceString(start, end, "Replacement")
    );
    selectionModel.removeSelection();
}
```
