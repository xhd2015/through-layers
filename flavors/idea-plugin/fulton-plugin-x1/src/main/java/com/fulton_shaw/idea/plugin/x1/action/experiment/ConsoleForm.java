package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.openapi.project.Project;

/**
 * @author xiaohuadong
 * @date 2019/04/20
 */
public class ConsoleForm extends ProjectComponentBase {
    public ConsoleForm(Project project) {
        super(project);
    }

    @Override
    public void projectOpened() {
        super.projectOpened();
        ExperimentConsoleForm consoleForm = new ExperimentConsoleForm();

    }

}
