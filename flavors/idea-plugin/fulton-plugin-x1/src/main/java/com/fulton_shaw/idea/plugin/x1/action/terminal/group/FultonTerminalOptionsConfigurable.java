package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.openapi.Disposable;
import com.intellij.openapi.components.ServiceManager;
import com.intellij.openapi.options.ConfigurationException;
import com.intellij.openapi.options.SearchableConfigurable;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.Disposer;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class FultonTerminalOptionsConfigurable implements SearchableConfigurable, Disposable {

    private Project project;
    private MultiTabPanel multiTabPanel;
    private FultonTerminalSettingsPanel panel;

    public FultonTerminalOptionsConfigurable(Project project) {
        this.project = project;
    }

    @Override
    public void dispose() {
        panel = null;
    }

    @NotNull
    @Override
    public String getId() {
        return "xterminal";
    }

    @Nullable
    @Override
    public Runnable enableSearch(String option) {
        return null;
    }

    @Nls(capitalization = Nls.Capitalization.Title)
    @Override
    public String getDisplayName() {
        return "X Terminal";
    }

    @Nullable
    @Override
    public JComponent createComponent() {
        FultonTerminalOptionsProvider provider = ServiceManager.getService(project, FultonTerminalOptionsProvider.class);
        this.multiTabPanel = new MultiTabPanel();
        multiTabPanel.refreshState(provider);
        return multiTabPanel.getRootPanel();
    }

    @Override
    public boolean isModified() {
        return multiTabPanel.isModified();
    }

    @Override
    public void apply() throws ConfigurationException {
        multiTabPanel.apply();
    }

    @Override
    public void disposeUIResources() {
        Disposer.dispose(this);
    }

    @Override
    public void reset() {
        // reset to default
        FultonTerminalOptionsProvider provider = ServiceManager.getService(project, FultonTerminalOptionsProvider.class);
        multiTabPanel.refreshState(provider);
    }


}
