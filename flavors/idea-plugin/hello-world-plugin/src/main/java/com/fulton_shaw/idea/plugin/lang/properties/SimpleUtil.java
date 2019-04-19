package com.fulton_shaw.idea.plugin.lang.properties;

import com.fulton_shaw.idea.plugin.lang.properties.psi.SimpleFile;
import com.fulton_shaw.idea.plugin.lang.properties.psi.SimpleProperty;
import com.fulton_shaw.idea.plugin.lang.properties.psi.impl.SimplePsiImplUtil;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiManager;
import com.intellij.psi.search.FileTypeIndex;
import com.intellij.psi.search.GlobalSearchScope;
import com.intellij.psi.util.PsiTreeUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/17
 */
public class SimpleUtil {
    public static List<SimpleProperty> findProperties(Project project,String key){
        List<SimpleProperty> result = null;
        Collection<VirtualFile> virtualFiles = FileTypeIndex.getFiles(SimpleFileType.INSTANCE, GlobalSearchScope.allScope(project));
        for(VirtualFile virtualFile : virtualFiles){
            SimpleFile simpleFile = (SimpleFile) PsiManager.getInstance(project).findFile(virtualFile);
            if(simpleFile!=null){
                SimpleProperty[] properties = PsiTreeUtil.getChildrenOfType(simpleFile, SimpleProperty.class);
                if(project!=null){
                    for (SimpleProperty property : properties) {
                        if(key.equals(SimplePsiImplUtil.getKey(property))){
                            if(result==null) {
                                result = new ArrayList<>();
                            }
                            result.add(property);
                        }
                    }
                }
            }
        }
        return  result==null? Collections.emptyList(): result;
    }
    public static List<SimpleProperty> findProperties(Project project){
        List<SimpleProperty> result = new ArrayList<SimpleProperty>();
        Collection<VirtualFile> virtualFiles =
                FileTypeIndex.getFiles(SimpleFileType.INSTANCE, GlobalSearchScope.allScope(project));
        for (VirtualFile virtualFile : virtualFiles) {
            SimpleFile simpleFile = (SimpleFile) PsiManager.getInstance(project).findFile(virtualFile);
            if (simpleFile != null) {
                SimpleProperty[] properties = PsiTreeUtil.getChildrenOfType(simpleFile, SimpleProperty.class);
                if (properties != null) {
                    Collections.addAll(result, properties);
                }
            }
        }
        return result;
    }
}
