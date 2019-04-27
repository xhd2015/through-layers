package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.fulton_shaw.common.lang.value.IntPack;
import com.google.common.base.Predicate;
import com.intellij.icons.AllIcons;
import com.intellij.openapi.actionSystem.*;
import com.intellij.openapi.project.DumbAwareAction;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.SimpleToolWindowPanel;
import com.intellij.openapi.ui.popup.JBPopupFactory;
import com.intellij.openapi.ui.popup.ListPopup;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.ui.components.JBTabbedPane;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class XTerminalToolWindow {
    private static final Logger LOG = LoggerFactory.getLogger(XTerminalToolWindow.class);

    private ToolWindowProxy toolWindowPanel;
    private JBTabbedPane tabbedPane;
    private java.util.List<StandaloneTerminalWidgetWrapper> wrappers;
    private java.util.List<IntPack> liveIndex;

    public static XTerminalToolWindow getInstance(ToolWindow toolWindow) {
        if (toolWindow == null) {
            return null;
        }
        Content content = toolWindow.getContentManager().getContent(0);
        if (content != null) {
            JComponent com = content.getComponent();
            if (com instanceof ToolWindowProxy) {
                return ((ToolWindowProxy) com).getXTerminalToolWindow();
            }
        }
        return null;
    }

    private static class ToolWindowProxy extends SimpleToolWindowPanel {
        private XTerminalToolWindow xTerminalToolWindow;

        public XTerminalToolWindow getXTerminalToolWindow() {
            return xTerminalToolWindow;
        }

        public ToolWindowProxy(boolean vertical, XTerminalToolWindow xTerminalToolWindow) {
            super(vertical);
            this.xTerminalToolWindow = xTerminalToolWindow;
        }

        public ToolWindowProxy(boolean vertical, boolean borderless, XTerminalToolWindow xTerminalToolWindow) {
            super(vertical, borderless);
            this.xTerminalToolWindow = xTerminalToolWindow;
        }
    }

    public JComponent getRootComponent() {
        return toolWindowPanel;
    }

    public XTerminalToolWindow() {
        tabbedPane = new JBTabbedPane();
        wrappers = new ArrayList<>();
        liveIndex = new ArrayList<>();

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

        this.toolWindowPanel = new ToolWindowProxy(false, true, this);
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
                        addExternalTerminal(widgetWrapper);
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
            decrementLiveIndexUpFrom(idx);
        }
    }

    /**
     * append, no need to maintain the index
     *
     * @param wrapper
     */
    public void addExternalTerminal(StandaloneTerminalWidgetWrapper wrapper) {
        IntPack index = new IntPack();
        liveIndex.add(index);
        wrapper.changeContainer(tabbedPane, new StandaloneTerminalWidgetWrapper.MyLifecycle() {
            @Override
            public void onRemoveFromContainer(Component currentContainer) {
                if (currentContainer == tabbedPane) {
                    removeTab(index.get());
                }
                liveIndex.remove(index);
            }

            @Override
            public void onTerminalExit(Component currentContainer) {
                if (currentContainer == tabbedPane) {
                    removeTab(index.get());
                }
                liveIndex.remove(index);
            }
        });
        addTab(wrapper);
        index.set(wrappers.size() - 1);
    }

    /**
     * before this, component must be removed from the original container
     *
     * @param wrapper
     */
    private void addTab(StandaloneTerminalWidgetWrapper wrapper) {
        tabbedPane.addTab(wrapper.getState().getTitle(), wrapper.getWidget());
        wrappers.add(wrapper);
        tabbedPane.setSelectedComponent(wrapper.getWidget());
    }

    // move to outside
    private void moveSession(AnActionEvent e) {
        int idx = tabbedPane.getSelectedIndex();
        if (idx == -1) {
            return;
        }
        StandaloneTerminalWidgetWrapper wrapper = wrappers.get(idx);
        wrapper.showInFrame();
    }

    /**
     * if i is deleted, all indexes that are greater that i must be decremented
     * if i is inserted, all indexes that are greater or equals to i must be incremented
     *
     * @param i
     */
    private void decrementLiveIndexUpFrom(int i) {
        for (IntPack index : liveIndex) {
            if (index.get() > i) {
                index.set(index.get() - 1);
            }
        }
    }

    private void incrementLiveIndexUpFrom(int i) {
        for (IntPack index : liveIndex) {
            if (index.get() >= i) {
                index.set(index.get() + 1);
            }
        }
    }
}
