package com.fulton_shaw.idea.plugin.mybatis;

import com.intellij.codeInsight.generation.PsiMethodMember;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.command.WriteCommandAction;
import com.intellij.openapi.fileTypes.FileType;
import com.intellij.openapi.fileTypes.FileTypes;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */
public class ImplementMapperMethodAction extends AnAction {
    private static final Logger LOG = LoggerFactory.getLogger(ImplementMapperMethodAction.class);

    @Override
    public void actionPerformed(AnActionEvent e) {
        PsiElement element = e.getData(CommonDataKeys.PSI_ELEMENT);
        PsiFile file = e.getData(CommonDataKeys.PSI_FILE);

        LOG.debug("langauge = {}", file.getLanguage());
        LOG.debug("psiFile = {}", file);
        LOG.debug("virtual file = {}", file.getVirtualFile());
        LOG.debug("file type = {}", file.getFileType());
        LOG.debug("element = {}", element);
        if (element instanceof PsiMethod) {
            PsiMethod method = (PsiMethod) element;
            String name = file.getName();
            if (name.endsWith(".java")) {
                name = name.substring(0, name.length() - ".java".length());
            }
            VirtualFile xmlChild = file.getVirtualFile().getParent().findChild(name + ".xml");
            if (xmlChild != null) {
                WriteCommandAction.runWriteCommandAction(e.getProject(), new Runnable() {
                    @Override
                    public void run() {
                        OutputStream outputStream = null;
                        try {
                            outputStream = xmlChild.getOutputStream(e);
                            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(outputStream, StandardCharsets.UTF_8));
                            writer.write("<select id=\"" + method.getName() + "\"></select>");
                            writer.flush();
                            writer.close();
                        } catch (IOException e1) {
                            throw new RuntimeException(e1);
                        }
                    }
                });
            }
        }

    }

    @Override
    public void update(AnActionEvent e) {
        super.update(e);
    }
}
