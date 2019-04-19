package com.fulton_shaw.idea.plugin.lang.properties;

import com.fulton_shaw.idea.plugin.lang.properties.psi.SimpleProperty;
import com.intellij.codeInsight.daemon.RelatedItemLineMarkerInfo;
import com.intellij.codeInsight.daemon.RelatedItemLineMarkerProvider;
import com.intellij.codeInsight.navigation.NavigationGutterIconBuilder;
import com.intellij.openapi.project.Project;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiLiteralExpression;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;
import java.util.List;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/17
 */
public class SimpleLineMarkerProvider extends RelatedItemLineMarkerProvider {
    private static final Logger LOG = LoggerFactory.getLogger(SimpleLineMarkerProvider.class);
    @Override
    protected void collectNavigationMarkers(@NotNull PsiElement element, @NotNull Collection<? super RelatedItemLineMarkerInfo> result) {
        LOG.debug("psiFile viewProvider type = {}", element.getContainingFile().getViewProvider().getClass().getName());
        if(element instanceof PsiLiteralExpression){
            PsiLiteralExpression expression = (PsiLiteralExpression)element;
            String value = expression.getValue() instanceof String? (String) expression.getValue() :null;
            String prefix = "simple:";
            if(value!=null && value.startsWith(prefix)){
                Project project = element.getProject();
                List<SimpleProperty> properties = SimpleUtil.findProperties(project, value.substring(prefix.length()));
                if(properties.size() > 0){
                    NavigationGutterIconBuilder<PsiElement> builder =
                            NavigationGutterIconBuilder.create(SimpleIcons.FILE)
                            .setTargets(properties)
                            .setTooltipText("Navigate to a simple property");
                    result.add(builder.createLineMarkerInfo(element));
                }
            }
        }
    }
}
