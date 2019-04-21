package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.execution.ui.ConsoleViewContentType;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;

/**
 * @author xiaohuadong
 * @date 2019/04/20
 */
public class BaseExperimentAction extends AnAction {


    @Override
    public void actionPerformed(AnActionEvent e) {
        DeployConsole deployConsole = e.getProject().getComponent(DeployConsole.class);
        deployConsole.getConsole().print("hello world", ConsoleViewContentType.LOG_INFO_OUTPUT);
    }

    @Override
    public void update(AnActionEvent e) {
        super.update(e);
    }
}
