package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.execution.filters.TextConsoleBuilderFactory;
import com.intellij.execution.ui.ConsoleView;
import com.intellij.openapi.components.ProjectComponent;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.openapi.wm.ToolWindowAnchor;
import com.intellij.openapi.wm.ToolWindowManager;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;

/**
 * @author xiaohuadong
 * @date 2019/04/20
 */
public class DeployConsole implements ProjectComponent {

    private Project project;
    private ConsoleView console;

    public DeployConsole(Project project) {
        this.project = project;
    }

    public Project getProject() {
        return project;
    }

    public ConsoleView getConsole() {
        return console;
    }

    @Override
    public void projectOpened() {
        createToolWindow();
    }

    private void createToolWindow() {
        ToolWindowManager toolWindowManager = ToolWindowManager.getInstance(project);

        console = TextConsoleBuilderFactory.getInstance().createBuilder(project).getConsole();

        ContentFactory contentFactory = ContentFactory.SERVICE.getInstance();
        Content content = contentFactory.createContent(console.getComponent(), "Deploy Console", false);

        ToolWindow toolWindow = toolWindowManager.registerToolWindow("com.fulton_shaw.idea.plugin.x1.action.experiment.DeployConsole.console", true, ToolWindowAnchor.BOTTOM);
        toolWindow.getContentManager().addContent(content);
    }
}
