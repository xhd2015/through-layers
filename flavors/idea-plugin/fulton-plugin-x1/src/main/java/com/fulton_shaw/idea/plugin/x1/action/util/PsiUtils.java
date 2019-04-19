package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.lang.jvm.JvmClassKind;
import com.intellij.pom.Navigatable;
import com.intellij.psi.*;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class PsiUtils {
    private PsiUtils() {
    }

    public static boolean isPublic(PsiClass psiClass) {
        return hasModifier(psiClass, PsiModifier.PUBLIC);
    }

    public static boolean isAbstract(PsiClass psiClass) {
        return hasModifier(psiClass, PsiModifier.ABSTRACT);
    }

    public static boolean isInterface(PsiClass psiClass) {
        return psiClass.isInterface();
    }

    // non abstract, just class
    public static boolean isConcreteClass(PsiClass psiClass) {
        return psiClass.getClassKind() == JvmClassKind.CLASS && !isAbstract(psiClass);
    }

    public static boolean hasModifier(PsiClass psiClass, String name) {
        PsiModifierList modifierList = psiClass.getModifierList();
        return modifierList != null && modifierList.hasModifierProperty(name);
    }


    public static void navigate(PsiElement e, boolean requestFocus) {
        PsiElement nav = e.getNavigationElement();
        if (nav == null || !(nav instanceof Navigatable)) {
            return;
        }
        ((Navigatable) nav).navigate(requestFocus);
    }

    /**
     * @param name
     */
    public static void importIfNecessary(PsiJavaFile psiFile, PsiElementFactory elementFactory, String pkg, String name) {
        PsiImportStatement[] statements = psiFile.getImportList() == null ? null : psiFile.getImportList().getImportStatements();
        if (statements == null) {
            PsiImportStatement psiStatement = createImportStatement(psiFile, elementFactory, pkg, name);
            PsiPackageStatement packageStatement = psiFile.getPackageStatement();
            if (packageStatement != null) {
                psiFile.addAfter(psiStatement, packageStatement);
            } else {
                psiFile.add(psiStatement);
            }
        } else {
            for (PsiImportStatement statement : statements) {
                if (importContains(statement, pkg, name)) {
                    return;
                }
            }
            PsiImportStatement psiStatement = (PsiImportStatement) createImportStatement(psiFile, elementFactory, pkg, name);
            psiFile.getImportList().add(psiStatement);
        }
    }

    @NotNull
    private static PsiImportStatement createImportStatement(PsiJavaFile psiFile, PsiElementFactory elementFactory, String pkg, String name) {
        // the createOnDeman gives the form: import pkg.name.*;
//        return elementFactory.createImportStatementOnDemand(pkg + "." + name);
        PsiClass clz = elementFactory.createClass(name);
        // the java dummy clz
        PsiJavaFile psiJavaFile = (PsiJavaFile) clz.getParent();
        psiJavaFile.setPackageName(pkg);
        return elementFactory.createImportStatement(clz);
    }

    public static boolean importContains(PsiImportStatement statement, String pkg, @NotNull String name) {
        String qname = statement.getQualifiedName();
        if (qname != null && qname.startsWith(pkg)) {
            String lastPart = qname.substring(pkg.length() + 1);
            if ("*".equals(lastPart) || name.equals(lastPart)) {
                return true;
            }
        }
        return false;
    }
}
