package com.fulton_shaw.idea.plugin.lang.properties;

import com.intellij.lang.Language;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */

public class SimpleLanguage extends Language {
    public static final SimpleLanguage INSTANCE = new SimpleLanguage();


    private SimpleLanguage() {
        super("Simple");
    }
}