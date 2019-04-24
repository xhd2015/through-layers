package com.fulton_shaw.antlr.test;

import com.fulton_shaw.antlr.test.gen.Java7Lexer;
import com.fulton_shaw.antlr.test.gen.Java7Parser;
import com.fulton_shaw.antlr.test.gen.Java7Parser.*;
import com.fulton_shaw.antlr.test.gen.Java7ParserBaseVisitor;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStreamRewriter;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * @author xiaohuadong
 * @date 2019/04/14
 */
public class TestRewriteAddingGetInfo {
    public static void main(String[] args) {
        InputStream resourcesStream = Utils.getResourcesStream(args.length>0?args[0]:"Simple");
        TestTriplet<Java7Lexer, Java7Parser> triplet = Utils.createTriplet(resourcesStream,Java7Lexer.class,Java7Parser.class);

        CompilationUnitContext tree = triplet.parser.compilationUnit();
        TypeDeclarationContext clzDecl = null;
        List<ClassBodyDeclarationContext> bodyDeclList = null;
        for (TypeDeclarationContext decl : tree.typeDeclaration()) {
            for (ClassOrInterfaceModifierContext mod : decl.classOrInterfaceModifier()) {
                if(mod.PUBLIC()!=null &&
                         decl.classDeclaration()!=null){
                    clzDecl = decl;
                    bodyDeclList = decl.classDeclaration().classBody().classBodyDeclaration();
                    break;
                }
            }
        }
        if(clzDecl==null || bodyDeclList==null){
            System.err.println("No Public class or class body available");
            return;
        }
        CommonTokenStream tokens = triplet.tokens;
        List<TypeNameField> fields = new ArrayList<TypeNameField>();
        List<ClassBodyDeclarationContext> declGetters = new ArrayList<ClassBodyDeclarationContext>();
        List<String> declGetterFields = new ArrayList<String>();
        // field
        for (ClassBodyDeclarationContext decl : bodyDeclList) {
            if(decl.memberDeclaration()!=null &&decl.memberDeclaration().fieldDeclaration()!=null){

                TypeTypeContext type = decl.memberDeclaration().fieldDeclaration().typeType();

                String typeName = (type.classOrInterfaceType()!=null? tokens.getText(type.classOrInterfaceType()): tokens.getText(type.primitiveType()));
                for (VariableDeclaratorContext varDecl : decl.memberDeclaration().fieldDeclaration().variableDeclarators().variableDeclarator()) {
                    // name
                    varDecl.variableDeclaratorId().IDENTIFIER();
                    fields.add(new TypeNameField(typeName,tokens.getText(varDecl.variableDeclaratorId().IDENTIFIER().getSourceInterval())));
                }
            }
            MethodDeclarationContext mdecl = decl.memberDeclaration().methodDeclaration();
            GenericMethodDeclarationContext gmdec = decl.memberDeclaration().genericMethodDeclaration();
            if(mdecl==null &&gmdec!=null){
                mdecl=gmdec.methodDeclaration();
            }
            String methodName = mdecl!=null? tokens.getText(mdecl.IDENTIFIER().getSourceInterval()):null;
            if(methodName!=null && methodName.startsWith("get")){
                declGetters.add(decl);
                declGetterFields.add(Utils.decapitalize(methodName.substring("get".length())));
            }
        }

        System.out.println("declared fields:" + fields);
        System.out.println("declared fields with getters:" + declGetterFields);
        TokenStreamRewriter rewriter = new TokenStreamRewriter(tokens);
        int i = 0;
        for (TypeNameField field : fields) {
            int idx = declGetterFields.indexOf(field.name);
            if(idx >= 0){
                continue;
            }
            System.out.println("generating getter for:"+ field.name);
            ClassBodyDeclarationContext nearest = declGetters.get(0);

            // find for nearest getter
            rewriter.insertAfter(nearest.stop,"\n    public " + field.type + " get" + Utils.capitalize(field.name)+"(){\n     return this." +field.name+";\n    }");
            ++i;
        }

        System.out.println("now, enjoy the whole result:");
        System.out.println(rewriter.getText());

    }
}
class FieldGetterComplementor extends Java7ParserBaseVisitor{

}

class TypeNameField{
    public String type;
    public String name;

    public TypeNameField(String type, String name) {
        this.type = type;
        this.name = name;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{");
        sb.append("type='").append(type).append('\'');
        sb.append(", name='").append(name).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
