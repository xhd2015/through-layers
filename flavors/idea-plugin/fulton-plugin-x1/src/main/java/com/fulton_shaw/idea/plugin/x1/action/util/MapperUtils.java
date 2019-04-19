package com.fulton_shaw.idea.plugin.x1.action.util;

import com.fulton_shaw.common.util.string.StringUtils;
import com.intellij.psi.JavaTokenType;
import com.intellij.psi.PsiMethod;
import com.intellij.psi.PsiType;
import com.intellij.psi.xml.XmlTag;
import org.codehaus.groovy.antlr.java.JavaTokenTypes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/18
 */
public class MapperUtils {
    private static final Logger LOG = LoggerFactory.getLogger(MapperUtils.class);

    public static enum StatementType {
        MAPPER,
        SQL,
        SELECT, INSERT, UPDATE, DELETE;
        String tag;

        StatementType() {
            this.tag = StringCaseUtils.toCaseType(name(), StringCaseUtils.CaseType.UPPER_CASE, StringCaseUtils.CaseType.CAMEL_CASE);
        }

        public String getTag() {
            return tag;
        }
    }

    private MapperUtils() {
    }

    public static StatementType getStatementType(PsiMethod method) {
        StatementType statementType = StatementType.SELECT;
        String methodName = method.getName();
        if (methodName.startsWith("update") || methodName.contains("update") || methodName.startsWith("set")) {
            statementType = StatementType.UPDATE;
        } else if (methodName.contains("save") || methodName.contains("insert")) {
            statementType = StatementType.INSERT;
        } else if (methodName.contains("delete") || methodName.contains("remove")) {
            statementType = StatementType.DELETE;
        }
        return statementType;
    }

    public static void setTypeAttribute(XmlTag tag, String attribute, PsiType type) {
        if (PsiTypeUtils.isVoid(type)) {
            tag.setAttribute(attribute, null);
        } else {
            tag.setAttribute(attribute, type.getCanonicalText());
        }
    }


    public static String getXmlMapperMethod(PsiMethod method, String body) {
        StringBuilder builder = new StringBuilder();
        String methodName = method.getName();
        StatementType statementType = getStatementType(method);
        String rootTag = statementType.getTag();
        PsiType returnType = method.getReturnType();
        String returnTypeName = null;
        LOG.info("return type  = {}, present = {}, canonical = {}", returnType, returnType.getPresentableText(), returnType.getCanonicalText());
        if (!PsiTypeUtils.isVoid(returnType)) {
            returnTypeName = returnType.getCanonicalText();
        }
        String paramType = null;
        if (method.getParameterList().getParametersCount() == 1) {
            paramType = method.getParameterList().getParameters()[0].getType().getCanonicalText();
        }
        builder.append("<").append(rootTag).append(" id=\"").append(methodName).append("\"");
        if (paramType != null) {
            builder.append(" parameterType=\"").append(paramType).append("\"");
        }
        if (returnTypeName != null) {
            builder.append(" resultType=\"").append(returnTypeName).append("\"");
        }
        builder.append(">").append("\n")
                .append(body).append("\n")
                .append("</").append(rootTag).append(">").append("\n");
        return builder.toString();
    }


}
