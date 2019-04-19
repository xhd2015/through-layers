package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiJavaFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.io.UncheckedIOException;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class VirtualFileUtils {
    private VirtualFileUtils() {
    }

    /**
     * return the root dir where the package name started to count
     * 'src/main/java/com/a/b/D.java' --> 'src/main/java'
     * null if such file is malformed, e.g. the package path cannot be fully reverted to a dir
     * <p>
     * note: we do not check the existence of the returned file
     *
     * @param psiJavaFile
     * @return
     */
    public static VirtualFile getContainingRootDir(PsiJavaFile psiJavaFile) {
        VirtualFile iter = psiJavaFile.getVirtualFile().getParent();
        String pkg = psiJavaFile.getPackageName();
        // if pkg is empty, need not to go back
        if (!pkg.isEmpty()) {
            String[] split = pkg.split("\\.");
            int n = split.length;
            for (int i = n - 1; i >= 0; --i) {
                String seg = split[i];
                if (!seg.equals(iter.getName())) {
                    return null;
                }
                iter = iter.getParent();
            }
        }
        return iter;
    }

    public static VirtualFile getSrcDirFromMainJavaSource(@NotNull VirtualFile mainJavaSrc) {
        //              java-->main------>src
        return mainJavaSrc.getParent().getParent();
    }

    public static VirtualFile findOrCreateDirectory(@NotNull VirtualFile dir, String name) {
        VirtualFile subDir = dir.findChild(name);
        if (subDir == null || !subDir.exists()) {
            try {
                subDir = dir.createChildDirectory(VirtualFile.class, name);
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        }
        return subDir;
    }

    /**
     * @param srcDir
     * @return
     */
    @Nullable
    public static VirtualFile getOrCreateTestJavaSourceDir(@NotNull VirtualFile srcDir) {
        VirtualFile testDir = findOrCreateDirectory(srcDir, "test");
        return findOrCreateDirectory(testDir, "java");
    }

    public static VirtualFile findOrCreateDataByPackage(VirtualFile base, String pkg, String name) {
        if (pkg.isEmpty()) {
            try {
                return base.findOrCreateChildData(VirtualFileUtils.class, name);
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        }
        VirtualFile f = base;
        for (String seg : pkg.split("\\.")) {
            f = findOrCreateDirectory(f, seg);
        }
        try {
            return f.findOrCreateChildData(VirtualFileUtils.class, name);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
