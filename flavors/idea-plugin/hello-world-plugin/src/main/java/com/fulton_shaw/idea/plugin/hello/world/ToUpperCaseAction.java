package com.fulton_shaw.idea.plugin.hello.world;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.command.WriteCommandAction;
import com.intellij.openapi.editor.Document;
import com.intellij.openapi.editor.Editor;
import com.intellij.openapi.editor.SelectionModel;
import com.intellij.openapi.externalSystem.model.project.ProjectData;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.TextRange;

/**
 * This action shows how to manipulate editor text
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
public class ToUpperCaseAction extends AnAction {
    @Override
    public void actionPerformed(AnActionEvent e) {
        //Get all the required data from data keys
        final Editor editor = e.getRequiredData(CommonDataKeys.EDITOR);
        final Project project = e.getProject();
        //Access document, caret, and selection
        final Document document = editor.getDocument();
        final SelectionModel selectionModel = editor.getSelectionModel();

        final int start = selectionModel.getSelectionStart();
        final int end = selectionModel.getSelectionEnd();
        //Making the replacement
        WriteCommandAction.runWriteCommandAction(project, () -> {
                    String s = document.getText(new TextRange(start, end)).toUpperCase();
                    document.replaceString(start, end, s);
                }
        );
        selectionModel.removeSelection();
    }

    @Override
    public void update(AnActionEvent e) {
        Project project = e.getProject();
        Editor editor =  e.getData(CommonDataKeys.EDITOR);
        SelectionModel selModel = editor==null?null: editor.getSelectionModel();
        if(project!=null && selModel!=null){
            e.getPresentation().setVisible(selModel!=null && selModel.hasSelection());
        }
    }
}
