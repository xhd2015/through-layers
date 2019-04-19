package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.editor.Caret;
import com.intellij.openapi.editor.CaretModel;
import com.intellij.openapi.editor.Editor;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiWhiteSpace;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/18
 */
public class ActionEventUtils {
    private ActionEventUtils() {
    }

    public static Editor getEditor(AnActionEvent event) {
        return event.getData(CommonDataKeys.EDITOR);
    }

    public static PsiElement getPsiElement(AnActionEvent event) {
        return event.getData(CommonDataKeys.PSI_ELEMENT);
    }

    public static PsiElement getElementAtCurrentCaret(AnActionEvent event) {
        PsiFile psiFile = event.getData(CommonDataKeys.PSI_FILE);
        if (psiFile == null) {
            return null;
        }
        Editor editor = event.getData(CommonDataKeys.EDITOR);
        if (editor == null) {
            return null;
        }
        int caretModelOffset = editor.getCaretModel().getCurrentCaret().getOffset();
        return psiFile.findElementAt(caretModelOffset);
    }

    public static boolean requireElementNotNull(AnActionEvent event, PsiElement element) {
        if (element == null) {
//            event.getPresentation().setVisible(false);
            return false;
        } else {
//            event.getPresentation().setVisible(true);
            return true;
        }
    }

    public static boolean requireElementNonSpace(AnActionEvent event, PsiElement element) {
        if (requireElementNotNull(event, element) && !(element instanceof PsiWhiteSpace)) {
            return true;
        }
//        setInvisiable(event);
        return false;
    }

    public static void setInvisiable(AnActionEvent event) {
        event.getPresentation().setVisible(false);
    }

    public static void setVisibility(AnActionEvent event, boolean visiable) {
        event.getPresentation().setVisible(visiable);
    }

    public static void setEnable(AnActionEvent event, boolean enable) {
        event.getPresentation().setEnabled(enable);
    }

    public static boolean requireCurrentCaretNonnullToken(AnActionEvent event) {
        return requireElementNotNull(event, getElementAtCurrentCaret(event));
    }
}
