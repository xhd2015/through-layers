package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.ui.components.JBTabbedPane;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class MultiTabPanel {

    private FultonTerminalOptionsProvider provider;
    private JPanel container;
    private JButton addButton;
    private JButton removeButton;
    private JBTabbedPane tabbedPane;
    private java.util.List<FultonTerminalSettingsPanel> settingsPanelList;

    public MultiTabPanel() {

        this.container = new JPanel(new BorderLayout());
        this.tabbedPane = new JBTabbedPane();
        JPanel buttonGroup = new JPanel(new BorderLayout());

        this.addButton = new JButton("Add a Config");
        this.removeButton = new JButton("Remove Config");
        buttonGroup.add(addButton, BorderLayout.LINE_START);
        buttonGroup.add(removeButton, BorderLayout.LINE_END);


        this.container.add(tabbedPane, BorderLayout.CENTER);
        this.container.add(buttonGroup, BorderLayout.PAGE_END);

        this.settingsPanelList = new ArrayList<>();

        this.addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (provider == null) {
                    return;
                }
                List<FultonTerminalOptionsProvider.SingleTabState> list = provider.getState().getStates();
                FultonTerminalOptionsProvider.SingleTabState tabState = new FultonTerminalOptionsProvider.SingleTabState();
                list.add(tabState);
                tabState.setTitle("Unnamed");

                FultonTerminalSettingsPanel settingsPanel = new FultonTerminalSettingsPanel();
                settingsPanelList.add(settingsPanel);
                settingsPanel.refreshState(tabState);
                tabbedPane.addTab(tabState.getTitle(), settingsPanel.getRootPanel());
                tabbedPane.setSelectedComponent(settingsPanel.getRootPanel());
            }
        });
        this.removeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (provider == null) {
                    return;
                }
                int idx = tabbedPane.getSelectedIndex();
                if (idx == -1) {
                    return;
                }
                List<FultonTerminalOptionsProvider.SingleTabState> list = provider.getState().getStates();
                list.remove(idx);
                settingsPanelList.remove(idx);
                tabbedPane.removeTabAt(idx);
            }
        });


    }

    public void refreshState(FultonTerminalOptionsProvider provider) {
        this.provider = provider;
        // clear all tabs
        while (tabbedPane.getTabCount() > 0) {
            tabbedPane.removeTabAt(0);
        }
        // init each component
        int n = provider.getStateCount();
        if (n == 0) {
            return;
        }
        settingsPanelList = new ArrayList<>(n);

        for (int i = 0; i < n; i++) {
            FultonTerminalOptionsProvider.SingleTabState state = provider.getStateAt(i);
            FultonTerminalSettingsPanel settingsPanel = new FultonTerminalSettingsPanel();
            settingsPanelList.add(settingsPanel);
            settingsPanel.refreshState(state);
            this.tabbedPane.addTab(state.getTitle(), settingsPanel.getRootPanel());
        }
        int lastSelected = provider.getLastSelected();
        if (lastSelected != -1) {
            tabbedPane.setSelectedIndex(lastSelected);
        }
    }

    public JComponent getRootPanel() {
        return container;
    }

    public boolean isModified() {
        boolean modified = tabbedPane.getTabCount() != provider.getStateCount() ||
                tabbedPane.getSelectedIndex() != provider.getLastSelected();
        if (!modified) {
            int n = tabbedPane.getTabCount();
            for (int i = 0; i < n; i++) {
                FultonTerminalSettingsPanel settingsPanel = settingsPanelList.get(i);
                if (settingsPanel.isModified()) {
                    modified = true;
                    break;
                }
            }
        }
        return modified;
    }

    public void apply() {
        int n = tabbedPane.getTabCount();
        provider.getState().setStates(new ArrayList<>());
        for (int i = 0; i < n; i++) {
            FultonTerminalSettingsPanel settingsPanel = settingsPanelList.get(i);
            settingsPanel.apply();
            provider.getState().getStates().add(settingsPanel.getState());
        }
        provider.setLastSelected(tabbedPane.getSelectedIndex());
    }
}
