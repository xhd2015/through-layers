package com.fulton_shaw.idea.plugin.lang.properties.view;

import com.intellij.lang.Language;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.FileViewProvider;
import com.intellij.psi.FileViewProviderFactory;
import com.intellij.psi.PsiManager;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/17
 */
public class PropertiesInJavaFileViewProviderFactory implements FileViewProviderFactory {
    @NotNull
    @Override
    public FileViewProvider createFileViewProvider(@NotNull VirtualFile file, Language language, @NotNull PsiManager manager, boolean eventSystemEnabled) {
        return new PropertiesInJavaFileViewProvider(manager,file,eventSystemEnabled,language);
    }
}
