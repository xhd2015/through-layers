package com.fulton_shaw.idea.plugin.x1.action.util;

import org.junit.Assert;
import org.junit.Test;

import java.util.List;

import static com.fulton_shaw.idea.plugin.x1.action.util.StringCaseUtils.CaseType.*;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class StringCaseUtilsTest {
    @Test
    public void testCaseConvert() {
        List<String> insert = SNAKE_CASE_DOT.split("insert");
        Assert.assertTrue(insert.size() > 0);
    }
}
