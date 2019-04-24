package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.openapi.actionSystem.ActionGroup;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.components.ServiceManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.List;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class XTerminalActionGroup extends ActionGroup {

    @NotNull
    @Override
    public AnAction[] getChildren(@Nullable AnActionEvent e) {
        FultonTerminalOptionsProvider optionsProvider = ServiceManager.getService(e.getProject(), FultonTerminalOptionsProvider.class);
        int n = optionsProvider.getStateCount();
        List<AnAction> actions = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            FultonTerminalOptionsProvider.SingleTabState option = optionsProvider.getStateAt(i);
            AnAction action = createAction(option);
            actions.add(action);
        }
        return actions.toArray(new AnAction[actions.size()]);
    }

    protected AnAction createAction(FultonTerminalOptionsProvider.SingleTabState singleTabState) {
        return new XTerminalInvokeAction(singleTabState);
    }
}
