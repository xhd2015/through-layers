package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.editor.Editor;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiManager;
import com.intellij.psi.PsiMethod;
import com.intellij.psi.xml.XmlFile;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class PsiFileUtils {
    private PsiFileUtils() {
    }

    /**
     * get the same file under that
     *
     * @param psiFile
     * @param extension
     * @return
     */
    public static PsiFile getSameNamePsiFile(PsiFile psiFile, String extension) {
        VirtualFile virtualFile = psiFile.getVirtualFile();
        String file = virtualFile.getNameWithoutExtension() + extension;
        VirtualFile eVirtualFile = virtualFile.getParent().findChild(file);
        if (eVirtualFile == null || !eVirtualFile.exists()) {
            return null;
        }
        PsiFile ePsiFile = PsiManager.getInstance(psiFile.getProject()).findFile(eVirtualFile);
        return ePsiFile;
    }

    public static boolean isMapperInterfaceFile(PsiFile psiFile) {
        PsiFile sameNamePsiFile = getSameNamePsiFile(psiFile, ".xml");
        return sameNamePsiFile != null;
    }
}
