package com.fulton_shaw.idea.plugin.lang.properties;

import com.intellij.lang.annotation.Annotation;
import com.intellij.lang.annotation.AnnotationHolder;
import com.intellij.lang.annotation.Annotator;
import com.intellij.openapi.editor.DefaultLanguageHighlighterColors;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.TextRange;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiLiteralExpression;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
public class SimpleAnnotator implements Annotator {
    @Override
    public void annotate(@NotNull PsiElement element, @NotNull AnnotationHolder holder) {
        if(element instanceof PsiLiteralExpression){
            PsiLiteralExpression literalExpression = (PsiLiteralExpression)element;
            Object literalValue = literalExpression.getValue();
            String value = literalValue instanceof String? (String)literalValue:null;
            String prefix = "simple:";
            if(value!=null && value.startsWith(prefix)){
                Project project = element.getProject();
                String key = value.substring(prefix.length());
                if(!"fixme".equals(key)){
                    TextRange range = new TextRange(element.getTextRange().getStartOffset() + prefix.length(), element.getTextRange().getStartOffset() + prefix.length());
                    Annotation annotation = holder.createInfoAnnotation(range,null);
                    annotation.setTextAttributes(DefaultLanguageHighlighterColors.LINE_COMMENT);
                }else{
                    TextRange range = new TextRange(element.getTextRange().getStartOffset() + prefix.length(), element.getTextRange().getEndOffset());
                    holder.createErrorAnnotation(range,"Please Fix Me!");
                    // override it(not shown)
                    Annotation annotation = holder.createInfoAnnotation(range, "Fix me again");

                }
            }
        }
    }
}
