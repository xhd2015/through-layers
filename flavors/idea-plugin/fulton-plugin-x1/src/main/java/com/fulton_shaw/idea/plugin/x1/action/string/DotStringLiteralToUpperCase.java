package com.fulton_shaw.idea.plugin.x1.action.string;

import com.fulton_shaw.idea.plugin.x1.action.util.ActionEventUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.ClipboardUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.StringCaseUtils;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.psi.JavaTokenType;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiJavaToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/18
 */
public class DotStringLiteralToUpperCase extends StringManipulationAction {
    private static final Logger LOG = LoggerFactory.getLogger(DotStringLiteralToUpperCase.class);

    public DotStringLiteralToUpperCase() {
        super(StringCaseUtils.CaseType.SNAKE_CASE_DOT, StringCaseUtils.CaseType.UPPER_CASE);
    }

    @Override
    protected String getTargetString(AnActionEvent e) {
        PsiElement element = ActionEventUtils.getElementAtCurrentCaret(e);
        boolean enable = ActionEventUtils.requireElementNonSpace(e, element);
        enable &= (element instanceof PsiJavaToken) && ((PsiJavaToken) element).getTokenType() == JavaTokenType.STRING_LITERAL;
        if (!enable) {
            return null;
        }
        String text = ((PsiJavaToken) element).getText();
        if (text.length() < 2) {
            return null;
        }
        return text.substring(1, text.length() - 1);
    }
}
