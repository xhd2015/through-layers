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
public class ProjectComponentBase implements ProjectComponent {

    private Project project;
    private ToolWindowManager toolWindowManager;
    private ContentFactory contentFactory;

    public ProjectComponentBase(Project project) {
        this.project = project;
    }

    @Override
    public void projectOpened() {
        this.toolWindowManager = ToolWindowManager.getInstance(project);
        this.contentFactory = ContentFactory.SERVICE.getInstance();
    }

    public Project getProject() {
        return project;
    }

    public ToolWindowManager getToolWindowManager() {
        return toolWindowManager;
    }

    public ContentFactory getContentFactory() {
        return contentFactory;
    }
}
