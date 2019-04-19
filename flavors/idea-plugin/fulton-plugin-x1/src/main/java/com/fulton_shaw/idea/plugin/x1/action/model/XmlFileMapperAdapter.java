package com.fulton_shaw.idea.plugin.x1.action.model;

import com.intellij.psi.PsiElement;
import com.intellij.psi.xml.XmlFile;
import com.intellij.psi.xml.XmlTag;

import javax.annotation.concurrent.NotThreadSafe;
import java.util.concurrent.atomic.AtomicReference;

/**
 * a flatten view of the tree
 *
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
@NotThreadSafe
public class XmlFileMapperAdapter {
    private static final String MAPPER = "mapper";
    private XmlFile xmlFile;
    private AtomicReference<XmlTag> rootTag;

    public XmlTag getRootTag() {
        if (rootTag == null) {
            rootTag = new AtomicReference<>();
            // document
            PsiElement doc = xmlFile.getFirstChild();
            //doctype
            PsiElement firstElement = doc == null ? null : doc.getFirstChild();
            PsiElement el = firstElement;
            if (el != null) {
                while (el != null) {
                    if (el instanceof XmlTag && MAPPER.equals(((XmlTag) el).getName())) {
                        break;
                    }
                    el = el.getNextSibling();
                }
            }
            rootTag.set((XmlTag) el);
        }
        return rootTag.get();
    }

    public XmlFileMapperAdapter(XmlFile xmlFile) {
        this.xmlFile = xmlFile;
    }

    public XmlFile getXmlFile() {
        return xmlFile;
    }

    public String getMapperNamespace() {
        XmlTag rootTag = getRootTag();
        if (rootTag != null) {
            return rootTag.getAttributeValue("namespace");
        }
        return null;
    }


    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("XmlFileMapperAdapter{");
        sb.append("xmlFile=").append(xmlFile);
        sb.append('}');
        return sb.toString();
    }
}
