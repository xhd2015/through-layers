package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.execution.filters.TextConsoleBuilderFactory;
import com.intellij.openapi.project.DumbAware;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.openapi.wm.ToolWindowAnchor;
import com.intellij.openapi.wm.ToolWindowFactory;
import com.intellij.openapi.wm.ToolWindowManager;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/24
 */
public class XTerminalToolWindowFactory implements ToolWindowFactory , DumbAware {
    @Override
    public void createToolWindowContent(@NotNull Project project, @NotNull ToolWindow toolWindow) {
        ToolWindowManager toolWindowManager = ToolWindowManager.getInstance(project);

        XTerminalToolWindow xTerminalToolWindow = new XTerminalToolWindow();

        ContentFactory contentFactory = ContentFactory.SERVICE.getInstance();
        Content content = contentFactory.createContent(xTerminalToolWindow.getRootComponent(), "X Terminal", false);

        // dynamic register
//        ToolWindow toolWindow = toolWindowManager.registerToolWindow("com.fulton_shaw.idea.plugin.x1.action.experiment.DeployConsole.console", true, ToolWindowAnchor.BOTTOM);

        // the tool window content manager manages a series of tabs
        toolWindow.getContentManager().addContent(content);
    }
}
