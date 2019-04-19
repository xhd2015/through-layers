package com.fulton_shaw.idea.plugin.lang.properties.view;

import com.intellij.lang.Language;
import com.intellij.openapi.fileTypes.FileType;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.FileViewProvider;
import com.intellij.psi.PsiManager;
import com.intellij.psi.SingleRootFileViewProvider;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/17
 */
public class PropertiesInJavaFileViewProvider extends SingleRootFileViewProvider implements FileViewProvider {
    public PropertiesInJavaFileViewProvider(@NotNull PsiManager manager, @NotNull VirtualFile file) {
        super(manager, file);
    }

    public PropertiesInJavaFileViewProvider(@NotNull PsiManager manager, @NotNull VirtualFile virtualFile, boolean eventSystemEnabled) {
        super(manager, virtualFile, eventSystemEnabled);
    }

    public PropertiesInJavaFileViewProvider(@NotNull PsiManager manager, @NotNull VirtualFile virtualFile, boolean eventSystemEnabled, @NotNull FileType fileType) {
        super(manager, virtualFile, eventSystemEnabled, fileType);
    }

    protected PropertiesInJavaFileViewProvider(@NotNull PsiManager manager, @NotNull VirtualFile virtualFile, boolean eventSystemEnabled, @NotNull Language language) {
        super(manager, virtualFile, eventSystemEnabled, language);
    }

    protected PropertiesInJavaFileViewProvider(@NotNull PsiManager manager, @NotNull VirtualFile virtualFile, boolean eventSystemEnabled, @NotNull Language language, @NotNull FileType type) {
        super(manager, virtualFile, eventSystemEnabled, language, type);
    }
}
