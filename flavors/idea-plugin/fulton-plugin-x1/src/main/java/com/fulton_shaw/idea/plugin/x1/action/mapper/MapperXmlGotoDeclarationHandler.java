package com.fulton_shaw.idea.plugin.x1.action.mapper;

import com.fulton_shaw.idea.plugin.x1.action.model.JavaFileAdapter;
import com.fulton_shaw.idea.plugin.x1.action.model.XmlFileMapperAdapter;
import com.fulton_shaw.idea.plugin.x1.action.util.PsiFileUtils;
import com.intellij.codeInsight.navigation.actions.GotoDeclarationHandler;
import com.intellij.codeInsight.navigation.actions.GotoDeclarationHandlerBase;
import com.intellij.openapi.actionSystem.DataContext;
import com.intellij.openapi.editor.Editor;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiJavaFile;
import com.intellij.psi.xml.XmlAttribute;
import com.intellij.psi.xml.XmlAttributeValue;
import com.intellij.psi.xml.XmlFile;
import com.intellij.psi.xml.XmlToken;
import org.jetbrains.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class MapperXmlGotoDeclarationHandler implements GotoDeclarationHandler {
    private static final Logger LOG = LoggerFactory.getLogger(MapperXmlGotoDeclarationHandler.class);


    @Nullable
    @Override
    public PsiElement[] getGotoDeclarationTargets(@Nullable PsiElement sourceElement, int offset, Editor editor) {
        if (!(sourceElement instanceof XmlToken)) {
            return null;
        }
        // XmlToken  XML_ATTRIBUTE_VALUE_TOKEN-->parent = XML_ATTRIBUTE_VALUE  XmlAttributeValue -> parent = XML_ATTRIBUTE
        XmlAttribute attr = (XmlAttribute) (sourceElement).getParent().getParent();
        if (attr == null || !"id".equals(attr.getName())) {
            return null;
        }
        String methodName = attr.getValue();
        PsiFile javaFile = PsiFileUtils.getSameNamePsiFile(sourceElement.getContainingFile(), ".java");
        if (!(javaFile instanceof PsiJavaFile)) {
            // no java file found,
            return null;
        }
        JavaFileAdapter adapter = new JavaFileAdapter((PsiJavaFile) javaFile);
        return (PsiElement[]) adapter.findPsiMethods(methodName, true).toArray();
    }

    @Nullable
    @Override
    public String getActionText(DataContext context) {
        return null;
    }
}
