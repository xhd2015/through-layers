package com.fulton_shaw.idea.plugin.x1.action.mapper;

import com.fulton_shaw.common.lang.value.Pack;
import com.fulton_shaw.idea.plugin.x1.action.model.XmlFileMapperAdapter;
import com.fulton_shaw.idea.plugin.x1.action.util.*;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.command.WriteCommandAction;
import com.intellij.psi.*;
import com.intellij.psi.xml.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;

import static com.intellij.lang.StdLanguages.XML;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
public class ImplementMapperMethodAction extends AnAction {
    private static final Logger LOG = LoggerFactory.getLogger(ImplementMapperMethodAction.class);

    public void actionPerformed(AnActionEvent e) {
        PsiMethod psiMethod = (PsiMethod) e.getRequiredData(CommonDataKeys.PSI_ELEMENT);
        PsiFile psiFile = e.getRequiredData(CommonDataKeys.PSI_FILE);
        PsiFile xmlPsiFile = PsiFileUtils.getSameNamePsiFile(psiFile, ".xml");
        if (!(xmlPsiFile instanceof XmlFile)) {
            // TODO prompt error
            throw new RuntimeException("file:" + xmlPsiFile.getName() + "does not exist or is not an XMLFile");
        }
        XmlFileMapperAdapter adapter = new XmlFileMapperAdapter((XmlFile) xmlPsiFile);
        XmlTag mapperTag = adapter.getRootTag();
        if (mapperTag == null) {
            // TODO prompt malformed, no mapper root tag
            throw new RuntimeException("malformed xml, no mapper tag");
        }
        String methodName = psiMethod.getName();
        XmlTag existingTag = null;
        // existing element with the same id
        for (XmlTag subTag : mapperTag.getSubTags()) {
            XmlAttribute id = subTag.getAttribute("id");
            if (id == null) {
                continue;
            }
            if (Objects.equals(id.getValue(), methodName)) {
                //we simply assume that existing tag has exactly the same type, we just replace return type,parameter type
                existingTag = subTag;
                break;
            }
        }
        Runnable writeAction = null;
        XmlTag theElementTag = existingTag;
        final Pack<XmlTag> selectedTag = new Pack<>();
        if (existingTag != null) {
            selectedTag.set(existingTag);
            writeAction = new Runnable() {
                @Override
                public void run() {
                    MapperUtils.setTypeAttribute(theElementTag, "returnType", psiMethod.getReturnType());
                    PsiParameter parameter = PsiTypeUtils.getTheOnlyParam(psiMethod);
                    PsiType paramType = parameter != null ? parameter.getType() : null;
                    if (paramType != null) {
                        MapperUtils.setTypeAttribute(theElementTag, "parameterType", paramType);
                    } else {
                        theElementTag.setAttribute("parameterType", null);
                    }
                }
            };
        } else {
            String xmlMapperMethod = MapperUtils.getXmlMapperMethod(psiMethod, "");
            XmlTag methodTag = XmlElementFactory.getInstance(e.getProject()).createTagFromText(xmlMapperMethod, XML);
            selectedTag.set(methodTag);
            writeAction = new Runnable() {
                @Override
                public void run() {
                    mapperTag.addSubTag(methodTag, false);
                }
            };
        }
        // this operation can be redo-ed
        Runnable finalWriteAction = writeAction;
        WriteCommandAction.runWriteCommandAction(e.getProject(), new Runnable() {
            @Override
            public void run() {
                Exception e = null;
                try {
                    finalWriteAction.run();
                } catch (Exception e0) {
                    e = e0;
                }
                if (e != null) {
                    // TODO prompt failed
                    LOG.error("add tag failed", e);
                } else {
                    // navigate to the xml method body
                    XmlTag toNav = selectedTag.get();
                    PsiElement i = toNav.getFirstChild();
                    if (i != null) {
                        while (i != null) {
                            if (i instanceof XmlToken && ((XmlToken) i).getTokenType() == XmlTokenType.XML_TAG_END) {
                                break;
                            }
                            i = i.getNextSibling();
                        }
                        // navigate to position after the end tag
                        if (i != null) {
                            i = i.getNextSibling();
                        }
                    }

                    if (i == null) {
                        i = toNav;
                    }
                    PsiUtils.navigate(i, true);
                }
            }
        });
    }

    @Override
    public void update(AnActionEvent e) {
        PsiFile psiFile = e.getData(CommonDataKeys.PSI_FILE);
        if (!PsiFileUtils.isMapperInterfaceFile(psiFile)) {
            ActionEventUtils.setVisibility(e, false);
            return;
        }
        PsiElement psiElement = e.getData(CommonDataKeys.PSI_ELEMENT);
        LOG.info("element = {}", psiElement);
        boolean canDo = psiElement != null;
        canDo &= psiElement instanceof PsiMethod;
        canDo &= e.getData(CommonDataKeys.VIRTUAL_FILE) != null;
        if (canDo) {
            PsiModifierList modifierList = ((PsiMethod) psiElement).getModifierList();
            canDo &= modifierList.hasModifierProperty(PsiModifier.ABSTRACT);
        }
        if (!canDo) {
            ActionEventUtils.setEnable(e, false);
        }
    }
}
