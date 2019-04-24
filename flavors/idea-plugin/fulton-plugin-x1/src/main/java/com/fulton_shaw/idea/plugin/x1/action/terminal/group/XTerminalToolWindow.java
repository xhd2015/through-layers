package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.fulton_shaw.common.lang.value.IntPack;
import com.google.common.base.Predicate;
import com.intellij.icons.AllIcons;
import com.intellij.openapi.actionSystem.*;
import com.intellij.openapi.project.DumbAwareAction;
import com.intellij.openapi.ui.SimpleToolWindowPanel;
import com.intellij.openapi.ui.popup.JBPopupFactory;
import com.intellij.openapi.ui.popup.ListPopup;
import com.intellij.ui.components.JBTabbedPane;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.*;
import java.util.ArrayList;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class XTerminalToolWindow {
    private static final Logger LOG = LoggerFactory.getLogger(XTerminalToolWindow.class);

    private SimpleToolWindowPanel toolWindowPanel;
    private JBTabbedPane tabbedPane;
    private java.util.List<StandaloneTerminalWidgetWrapper> wrappers;

    public JComponent getRootComponent() {
        return toolWindowPanel;
    }

    public XTerminalToolWindow() {
        tabbedPane = new JBTabbedPane();
        wrappers = new ArrayList<>();


        DefaultActionGroup group = new DefaultActionGroup();
        AnAction newSession = new DumbAwareAction("New Session", "Create New Terminal Session", AllIcons.General.Add) {
            @Override
            public void actionPerformed(AnActionEvent e) {
                newSession(e);
            }
        };
        AnAction removeSession = new DumbAwareAction("Close Session", "Close Terminal Session", AllIcons.Actions.Delete) {
            @Override
            public void actionPerformed(AnActionEvent e) {
                removeSession(e);
            }
        };
        AnAction moveSessionOutside = new DumbAwareAction("Session to Window", "Make Current Session Outside", AllIcons.Actions.ChangeView) {
            @Override
            public void actionPerformed(AnActionEvent e) {
                moveSession(e);
            }
        };

        group.add(newSession);
        group.add(removeSession);
        group.add(moveSessionOutside);

        this.toolWindowPanel = new SimpleToolWindowPanel(false, true);
        ActionToolbar toolbar = ActionManager.getInstance().createActionToolbar("XTerminal", group, false);
        final Content content = ContentFactory.SERVICE.getInstance().createContent(this.toolWindowPanel, "", false);

        // set toolbar and content
        content.setCloseable(true);
        toolbar.setTargetComponent(toolWindowPanel);
        toolWindowPanel.setToolbar(toolbar.getComponent());
        toolWindowPanel.setContent(tabbedPane);
    }

    // @ in event dispatcher
    private void newSession(AnActionEvent e) {
        // popup
        XTerminalActionGroup xTerminalActionGroup = new XTerminalActionGroup() {
            @Override
            protected AnAction createAction(FultonTerminalOptionsProvider.SingleTabState singleTabState) {
                DumbAwareAction xTerminalInvokeInline = new DumbAwareAction(singleTabState.getTitle()) {
                    @Override
                    public void actionPerformed(AnActionEvent e) {
                        FultonTerminalOptionsProvider.SingleTabState state = singleTabState;
                        StandaloneTerminalWidgetWrapper widgetWrapper = new StandaloneTerminalWidgetWrapper(e.getProject(), e.getData(CommonDataKeys.VIRTUAL_FILE), state);
                        IntPack index = new IntPack();
                        widgetWrapper.addTerminationCallback(new Runnable() {
                            @Override
                            public void run() {
                                removeTab(index.get());
                            }
                        });
                        addTab(widgetWrapper);
                        index.set(wrappers.size() - 1);
                    }
                };
                return xTerminalInvokeInline;
            }
        };
        ListPopup createSession = JBPopupFactory.getInstance().createActionGroupPopup("Create Session", xTerminalActionGroup, e.getDataContext(), JBPopupFactory.ActionSelectionAid.SPEEDSEARCH, true);
        createSession.showUnderneathOf(e.getInputEvent().getComponent());
    }

    // @ in event dispatcher
    private void removeSession(AnActionEvent e) {
        removeTab(tabbedPane.getSelectedIndex());
    }

    private void removeTab(int idx) {
        if (idx >= 0) {
            tabbedPane.removeTabAt(idx);
            wrappers.remove(idx);
        }
    }

    private void addTab(StandaloneTerminalWidgetWrapper wrapper) {
        tabbedPane.addTab(wrapper.getState().getTitle(), wrapper.getWidget());
        wrappers.add(wrapper);
        tabbedPane.setSelectedComponent(wrapper.getWidget());
    }

    private void moveSession(AnActionEvent e) {
        int idx = tabbedPane.getSelectedIndex();
        if (idx == -1) {
            return;
        }
        StandaloneTerminalWidgetWrapper wrapper = wrappers.get(idx);
        removeTab(idx);
        wrapper.showInFrame();
    }

}
