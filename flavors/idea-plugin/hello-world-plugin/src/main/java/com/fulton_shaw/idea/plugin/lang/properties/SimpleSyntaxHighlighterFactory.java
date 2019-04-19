package com.fulton_shaw.idea.plugin.lang.properties;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
import com.intellij.openapi.fileTypes.*;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

public class SimpleSyntaxHighlighterFactory extends SyntaxHighlighterFactory {
    @NotNull
    @Override
    public SyntaxHighlighter getSyntaxHighlighter(Project project, VirtualFile virtualFile) {
        return new SimpleSyntaxHighlighter();
    }
}
