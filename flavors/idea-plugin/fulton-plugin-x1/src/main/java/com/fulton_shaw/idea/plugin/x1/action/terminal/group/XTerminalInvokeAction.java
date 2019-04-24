package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import org.jetbrains.annotations.Nullable;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class XTerminalInvokeAction extends AnAction {
    public static final String[] SPECIAL_KEYS = new String[]{"SELECTED", "PROJECT_ROOT", "WORKSPACE_ROOT"};
    private FultonTerminalOptionsProvider.SingleTabState state;


    public XTerminalInvokeAction(FultonTerminalOptionsProvider.SingleTabState state) {
        this(state.getTitle(), state);
    }

    public XTerminalInvokeAction(@Nullable String text, FultonTerminalOptionsProvider.SingleTabState state) {
        super(text);
        this.state = state;
    }

    public FultonTerminalOptionsProvider.SingleTabState getState() {
        return state;
    }

    @Override
    public void actionPerformed(AnActionEvent e) {
        // wrapped into a class
        StandaloneTerminalWidgetWrapper wrapper = new StandaloneTerminalWidgetWrapper(e.getProject(), e.getData(CommonDataKeys.VIRTUAL_FILE), state);
        wrapper.showInFrame();
    }
}
