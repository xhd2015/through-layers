package com.fulton_shaw.idea.plugin.lang.properties.psi.impl;

import com.fulton_shaw.idea.plugin.lang.properties.psi.SimpleProperty;
import com.fulton_shaw.idea.plugin.lang.properties.psi.SimpleTypes;
import com.intellij.lang.ASTNode;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/17
 */
public class SimplePsiImplUtil {

    public static String getKey(SimpleProperty element){
        ASTNode keyNode = element.getNode().findChildByType(SimpleTypes.KEY);
        if(keyNode!=null){
            return keyNode.getText().replaceAll("\\\\"," ");
        }else{
            return  null;
        }
    }
    public static String getValue(SimpleProperty element){
        ASTNode node = element.getNode().findChildByType(SimpleTypes.VALUE);
        return  node!=null? node.getText() : null;
    }
}
