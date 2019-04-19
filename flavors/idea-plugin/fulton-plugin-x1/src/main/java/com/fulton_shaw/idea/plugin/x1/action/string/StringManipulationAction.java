package com.fulton_shaw.idea.plugin.x1.action.string;

import com.fulton_shaw.idea.plugin.x1.action.util.ActionEventUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.ClipboardUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.StringCaseUtils.CaseType;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public abstract class StringManipulationAction extends AnAction {
    private static final Logger LOG = LoggerFactory.getLogger(StringManipulationAction.class);
    private CaseType srcType;
    private CaseType targetType;
    private static ThreadLocal<String> cacheString = new ThreadLocal<>();
    private static ThreadLocal<List<String>> cacheResult = new ThreadLocal<>();

    public StringManipulationAction(CaseType srcType, CaseType targetType) {
        this.srcType = srcType;
        this.targetType = targetType;
    }


    @Override
    public void actionPerformed(AnActionEvent e) {
        List<String> list = cacheResult.get();
        if (list == null) {
            return;
        }
        String result = targetType.join(list);
        ClipboardUtils.setClipboardString(result);
    }

    @Override
    public void update(AnActionEvent e) {
        LOG.debug("StringManipulationAction update");
        String targetString = getTargetString(e);
        if (Objects.equals(cacheString.get(), targetString)) {
            LOG.debug("the result is cached because the same request in the same thread repeated");
            return;
        }
        List<String> splitList = targetString != null && !targetString.isEmpty() ? srcType.split(targetString) : Collections.emptyList();
        if (splitList.isEmpty()) {
            ActionEventUtils.setEnable(e, false);
            return;
        }
        cacheString.set(targetString);
        cacheResult.set(splitList);
    }

    /**
     * return a string to be operated later
     *
     * @param e
     * @return the string tobe operated, null--> cannot execute this operation
     */
    protected abstract String getTargetString(AnActionEvent e);
}
