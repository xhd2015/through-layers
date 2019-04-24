package com.fulton_shaw.idea.plugin.x1.action.test;

import com.fulton_shaw.common.util.concurrent.ThreadUtils;
import com.fulton_shaw.idea.plugin.x1.action.model.JavaFileAdapter;
import com.fulton_shaw.idea.plugin.x1.action.util.*;
import com.intellij.ide.FileSelectInContext;
import com.intellij.ide.SelectInContext;
import com.intellij.ide.SelectInTarget;
import com.intellij.ide.projectView.ProjectView;
import com.intellij.ide.projectView.impl.AbstractProjectViewPane;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.command.WriteCommandAction;
import com.intellij.openapi.fileEditor.FileDocumentManager;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.*;
import com.intellij.psi.impl.source.PsiClassImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Objects;

/**
 * Create Test Action, can be triggered in three places:
 * 1.File
 * same as Class
 * 2.Editor -> Class(Not Abstract,Not Interface)
 * create a class, if it already exists, just navigate to it
 * 3.Editor -> Class -> Concrete Method
 * ensure the action for a class can execute,
 * create the test method, with name and Test imported
 *
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class CreateTestAction extends AnAction {
    private static final Logger LOG = LoggerFactory.getLogger(CreateTestAction.class);

    private static ThreadLocal<JavaFileAdapter> localJavaFileAdapter = new ThreadLocal<>();
    // used to indicate whether the update is called successfully, ensure they happens serially
    private static ThreadLocal<PsiJavaFile> localPsiJavaFile = new ThreadLocal<>();
    private static ThreadLocal<PsiClass> localPsiClass = new ThreadLocal<>();
    private static ThreadLocal<PsiMethod> localPsiMethod = new ThreadLocal<>();

    @Override
    public void actionPerformed(AnActionEvent e) {
        if (localPsiJavaFile.get() == null) {
            return;
        }
        // name = Test.java,  virtualfile.name = Test.java
        // path = full
        PsiJavaFile psiJavaFile = localPsiJavaFile.get();
        LOG.info("psiJavaFile PackageName = {},Name = {},Path = {}", localPsiJavaFile.get().getPackageName(), localPsiJavaFile.get().getName(), localPsiJavaFile.get().getVirtualFile().getPath());
        Project project = e.getProject();

        VirtualFile javaRoot = VirtualFileUtils.getContainingRootDir(psiJavaFile);
        if (javaRoot == null || !javaRoot.exists()) {
            return;
        }
        VirtualFile srcDir = VirtualFileUtils.getSrcDirFromMainJavaSource(javaRoot);
        if (srcDir == null || !srcDir.exists()) {
            return;
        }
        WriteCommandAction.runWriteCommandAction(project, new Runnable() {
            @Override
            public void run() {
                VirtualFile testJavaDir = VirtualFileUtils.getOrCreateTestJavaSourceDir(srcDir);
                if (testJavaDir == null || !testJavaDir.exists()) {
                    return;
                }
                // create the test file
                VirtualFile theTestFile = VirtualFileUtils.findOrCreateDataByPackage(testJavaDir, psiJavaFile.getPackageName(), "Test" + psiJavaFile.getName());
                PsiJavaFile testPsiFile = (PsiJavaFile) PsiManager.getInstance(project).findFile(theTestFile);
                JavaFileAdapter testAdapter = new JavaFileAdapter(testPsiFile);
                PsiElementFactory elementFactory = JavaPsiFacade.getElementFactory(project);

                if (!Objects.equals(testPsiFile.getPackageName(), psiJavaFile.getPackageName())) {
                    testPsiFile.setPackageName(psiJavaFile.getPackageName());
                }
                PsiClass testClz = testAdapter.getThePublicClass();
                if (testClz == null) {
                    testClz = elementFactory.createClass("Test" + localPsiClass.get().getName());
                    testClz.getModifierList().setModifierProperty(PsiModifier.PUBLIC, true);
                    testClz = (PsiClass) testPsiFile.add(testClz);
                    // refresh now
//                    PsiDocumentManager.getInstance(project).doPostponedOperationsAndUnblockDocument(FileDocumentManager.getInstance().getDocument(theTestFile));
                    testAdapter.refresh();
                }
                PsiElement toNav = testClz;
                PsiMethod testMethod = null;
                String testMethodName = null;
                if (localPsiMethod.get() != null) {
                    testMethodName = "test" + StringCaseUtils.toCaseType(localPsiMethod.get().getName(), StringCaseUtils.CaseType.CAMEL_CASE, StringCaseUtils.CaseType.PASCAL_CASE);
                    List<PsiMethod> psiMethods = testAdapter.findPsiMethods(testMethodName, false);
                    if (psiMethods != null && !psiMethods.isEmpty()) {
                        testMethod = psiMethods.get(0);
                    } else {
                        // create the method
//                        testMethod = elementFactory.createMethodFromText("@Test public void " + methodName + "(){}", testClz);
                        PsiUtils.importIfNecessary(testPsiFile, elementFactory, "org.junit", "Test");
                        testMethod = elementFactory.createMethodFromText("@Test public void " + testMethodName + "(){}", testClz);
                        testMethod = (PsiMethod) testClz.add(testMethod);
//                        PsiDocumentManager.getInstance(project).doPostponedOperationsAndUnblockDocument(FileDocumentManager.getInstance().getDocument(theTestFile));
                    }
                    toNav = testMethod;
                }
                if (toNav != null) {
                    PsiUtils.navigate(toNav, true);
                    // and navigate the tree view to that file, note that if the file initially does not exist, then it won't goto there
                    SelectInContext context = new FileSelectInContext(project, theTestFile);

                    ProjectView projectView = ProjectView.getInstance(project);
                    AbstractProjectViewPane pane = projectView.getCurrentProjectViewPane();
                    SelectInTarget selectInTarget = pane == null ? null : pane.createSelectInTarget();
                    //
                    if (selectInTarget != null
                        // this should be  called in a read action
//                            && selectInTarget.canSelect(context)
                    ) {
                        selectInTarget.selectIn(context, true);
                    }
                }
            }
        });


//        project.get
    }

    @Override
    public void update(AnActionEvent e) {
        localPsiJavaFile.set(null);
        PsiFile psiFile = e.getData(CommonDataKeys.PSI_FILE);
        PsiJavaFile psiJavaFile = null;
        JavaFileAdapter javaFileAdapter = null;
        PsiClass psiClass = null;
        PsiMethod psiMethod = null;
        boolean canDo = psiFile instanceof PsiJavaFile;
        if (canDo) {
            psiJavaFile = (PsiJavaFile) psiFile;
            javaFileAdapter = new JavaFileAdapter(psiJavaFile);
            psiClass = javaFileAdapter.getThePublicClass();
            canDo = psiClass != null && PsiUtils.isConcreteClass(psiClass);
        }
        if (canDo) {
            PsiElement psiElement = e.getData(CommonDataKeys.PSI_ELEMENT);
            // if click on class, it must be the public class
            if (psiElement instanceof PsiClass) {
                canDo = psiElement == psiClass;
            } else {
                canDo = psiElement == null || psiElement instanceof PsiMethod;
                psiMethod = canDo ? (PsiMethod) psiElement : null;
            }
        }
        if (!canDo) {
            ActionEventUtils.setVisibility(e, false);
        }
        localPsiJavaFile.set(psiJavaFile);
        localJavaFileAdapter.set(javaFileAdapter);
        localPsiClass.set(psiClass);
        localPsiMethod.set(psiMethod);
    }

}
