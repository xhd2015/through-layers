package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.pom.Navigatable;
import com.intellij.psi.*;
import com.intellij.psi.xml.XmlTag;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class PsiTypeUtils {
    private PsiTypeUtils() {
    }

    public static boolean isVoid(PsiType psiType) {
        return "void".equals(psiType.getCanonicalText());
    }

    public static PsiParameter getTheOnlyParam(PsiMethod method) {
        PsiParameterList list = method.getParameterList();
        return list.getParametersCount() == 1 ? list.getParameters()[0] : null;
    }

    public static PsiElement d(XmlTag tag) {
        return tag;
    }

}
