package com.fulton_shaw.idea.plugin.x1.action.mapper;

import com.fulton_shaw.common.util.data.DataUtils;
import com.fulton_shaw.idea.plugin.x1.action.util.PsiFileUtils;
import com.intellij.lang.annotation.AnnotationHolder;
import com.intellij.lang.annotation.Annotator;
import com.intellij.openapi.util.TextRange;
import com.intellij.psi.*;
import com.intellij.psi.impl.source.PsiExtensibleClass;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class MapperMethodNameDuplicateAnnotator implements Annotator {
    private static final Logger LOG = LoggerFactory.getLogger(MapperMethodNameDuplicateAnnotator.class);

    @Override
    public void annotate(@NotNull PsiElement element, @NotNull AnnotationHolder holder) {
        LOG.info("element = {}", element);
        if (element instanceof PsiKeyword && ((PsiKeyword) element).getTokenType() == JavaTokenType.INTERFACE_KEYWORD) {
            PsiClass parent = (PsiClass) element.getParent();
            if (!(parent instanceof PsiExtensibleClass)) {
                return;
            }
            // do not annotate non-mapper file
            if (!PsiFileUtils.isMapperInterfaceFile(element.getContainingFile())) {
                return;
            }
            PsiExtensibleClass psiClass = (PsiExtensibleClass) parent;
            List<PsiMethod> ownMethods = psiClass.getOwnMethods();
            // build map list
            Map<String, List<PsiMethod>> map = new HashMap<>();
            for (PsiMethod ownMethod : ownMethods) {
                List<PsiMethod> list = DataUtils.getNonNull(map, ownMethod.getName(), ArrayList.class);
                list.add(ownMethod);
            }
            // iterate to mark
            for (List<PsiMethod> list : map.values()) {
                if (list.size() > 1) {
                    for (PsiMethod psiMethod : list) {
                        PsiIdentifier identifier = psiMethod.getNameIdentifier();
                        TextRange range = new TextRange(identifier.getTextRange().getStartOffset(), identifier.getTextRange().getEndOffset());
                        holder.createErrorAnnotation(range, "found duplicate method name:" + psiMethod.getName() + ",mapper does not allow duplicate");
                    }
                }
            }
        }
    }
}
