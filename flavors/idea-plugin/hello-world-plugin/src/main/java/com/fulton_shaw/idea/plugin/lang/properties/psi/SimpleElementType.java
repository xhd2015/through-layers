package com.fulton_shaw.idea.plugin.lang.properties.psi;


import com.fulton_shaw.idea.plugin.lang.properties.SimpleLanguage;
import com.intellij.psi.tree.IElementType;
import org.jetbrains.annotations.*;
/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */

public class SimpleElementType extends IElementType {
    public SimpleElementType(@NotNull @NonNls String debugName) {
        super(debugName, SimpleLanguage.INSTANCE);
    }
}