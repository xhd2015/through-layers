package com.fulton_shaw.idea.plugin.lang.properties;

import com.intellij.lexer.FlexAdapter;
import com.intellij.lexer.FlexLexer;
import org.jetbrains.annotations.NotNull;

import java.io.Reader;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
public class SimpleLexerAdapter extends FlexAdapter {
    public SimpleLexerAdapter() {
        super(new SimpleLexer((Reader)null));
    }
}
