package com.fulton_shaw.idea.plugin.x1.action.string;

import com.fulton_shaw.idea.plugin.x1.action.util.ActionEventUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.StringCaseUtils;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiIdentifier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/18
 */
public class ConfigIdentifierToSnakeCase extends StringManipulationAction {
    private static final Logger LOG = LoggerFactory.getLogger(ConfigIdentifierToSnakeCase.class);

    public ConfigIdentifierToSnakeCase() {
        super(StringCaseUtils.CaseType.UPPER_CASE, StringCaseUtils.CaseType.SNAKE_CASE_DOT);
    }


    /**
     * return a string to be operated later
     *
     * @param e
     * @return the string tobe operated, null--> cannot execute this operation
     */
    @Override
    protected String getTargetString(AnActionEvent e) {
        PsiElement element = ActionEventUtils.getElementAtCurrentCaret(e);
        if (!(element instanceof PsiIdentifier)) {
            return null;
        }
        return ((PsiIdentifier) element).getText();
    }
}
