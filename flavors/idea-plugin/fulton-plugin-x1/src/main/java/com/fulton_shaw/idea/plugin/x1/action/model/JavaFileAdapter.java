package com.fulton_shaw.idea.plugin.x1.action.model;

import com.intellij.psi.*;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class JavaFileAdapter {
    private PsiJavaFile javaFile;
    private AtomicReference<PsiClass> thePublicClass;

    public JavaFileAdapter(PsiJavaFile javaFile) {
        this.javaFile = javaFile;
    }

    public PsiJavaFile getJavaFile() {
        return javaFile;
    }

    public PsiClass getThePublicClass() {
        if (thePublicClass == null) {
            thePublicClass = new AtomicReference<>();
            PsiClass[] clzes = javaFile.getClasses();
            for (PsiClass clz : javaFile.getClasses()) {
                PsiModifierList modifierList = clz.getModifierList();
                if (modifierList != null && modifierList.hasModifierProperty(PsiModifier.PUBLIC)) {
                    thePublicClass.set(clz);
                    break;
                }
            }
        }
        return thePublicClass.get();
    }

    //    public PsiClass

    public List<PsiMethod> findPsiMethods(String name, boolean checkBases) {
        PsiClass clz = getThePublicClass();
        if (clz == null) {
            return null;
        }
        PsiMethod[] methods = clz.findMethodsByName(name, checkBases);
        return Arrays.asList(methods);
    }

    public void refresh(PsiJavaFile psiJavaFile) {
        this.javaFile = psiJavaFile;
        this.refresh();
    }

    public void refresh() {
        this.thePublicClass = null;
    }
}
