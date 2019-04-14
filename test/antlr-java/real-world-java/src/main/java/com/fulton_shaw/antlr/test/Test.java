package com.fulton_shaw.antlr.test;

import com.fulton_shaw.antlr.test.gen.*;
import com.fulton_shaw.antlr.test.gen.Java7Parser.*;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.*;
import java.util.*;

public class Test {
    public static void main(String[] args) throws Exception{
        String inputFile = null;
        if(args.length > 0){
            inputFile = args[0];
        }
        InputStream is = System.in;
        if(inputFile!=null){
            is = new ByteArrayInputStream(Resources.getStringSource(inputFile).getBytes());
        }
        ANTLRInputStream input = 
        new ANTLRInputStream(is);

        Java7Lexer lexer = new Java7Lexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        Java7Parser parser = new Java7Parser(tokens);

        ParseTree tree = parser.compilationUnit();

        // System.out.println(tree.toStringTree(parser));

        ParseTreeWalker walker = new ParseTreeWalker();
        PositionBuilder positionBuilder = new PositionBuilder(tokens);
        walker.walk(positionBuilder, tree);

        SummaryInfo  summaryInfo = positionBuilder.getSummaryInfo();


        // EvalVisitor visitor = new EvalVisitor();
        // visitor.visit(tree);

        System.out.printf("Summary: %s", summaryInfo.toString());

        if(is!=System.in){
            is.close();
        }
    }
}


class SummaryInfo {
    private CommonTokenStream tokens;
    private PackageDeclarationContext pkgContext;
    private List<ImportDeclarationContext> imports;
    TypeDeclarationContext primaryDeclaration;
    
    public SummaryInfo(CommonTokenStream tokens){
        this.tokens = tokens;
    }

    /**
     * @return the tokens
     */
    public CommonTokenStream getTokens() {
        return tokens;
    }

    /**
     * @param tokens the tokens to set
     */
    public void setTokens(CommonTokenStream tokens) {
        this.tokens = tokens;
    }

    /**
     * @return the pkgContext
     */
    public PackageDeclarationContext getPkgContext() {
        return pkgContext;
    }

    /**
     * @param pkgContext the pkgContext to set
     */
    public void setPkgContext(PackageDeclarationContext pkgContext) {
        this.pkgContext = pkgContext;
    }

    /**
     * @return the imports
     */
    public List<ImportDeclarationContext> getImports() {
        return imports;
    }

    /**
     * @param imports the imports to set
     */
    public void setImports(List<ImportDeclarationContext> imports) {
        this.imports = imports;
    }

    /**
     * @return the primaryDeclaration
     */
    public TypeDeclarationContext getPrimaryDeclaration() {
        return primaryDeclaration;
    }

    /**
     * @param primaryDeclaration the primaryDeclaration to set
     */
    public void setPrimaryDeclaration(TypeDeclarationContext primaryDeclaration) {
        this.primaryDeclaration = primaryDeclaration;
    }

    public String toString(){
        StringBuilder s = new StringBuilder();

        if(pkgContext!=null){
            s.append("package = ")
            .append(tokens.getText(getPkgContext().qualifiedName()))
            .append(",");
        }
        if(imports!=null){
            s.append("import = [");
            for (ImportDeclarationContext imp : imports) {
                s.append(tokens.getText(imp.qualifiedName())).append(",");
            }
            s.append("],");
        }
        if(primaryDeclaration!=null){
            s.append("primary declaration = ");
            if(primaryDeclaration.classDeclaration()!=null){
                s.append(tokens.getText(primaryDeclaration.classDeclaration().IDENTIFIER().getSourceInterval()));
                s.append(",");
            }
        }
        return s.toString();
    }
}

class PositionBuilder extends Java7ParserBaseListener {

    private SummaryInfo summaryInfo;

    public PositionBuilder(CommonTokenStream tokens){
        this.summaryInfo = new SummaryInfo(tokens);
    }

    public SummaryInfo getSummaryInfo(){
        return this.summaryInfo;
    }


	@Override public void enterCompilationUnit(Java7Parser.CompilationUnitContext ctx) {
        summaryInfo.setPkgContext(ctx.packageDeclaration());
        List<ImportDeclarationContext> imports = ctx.importDeclaration();
        summaryInfo.setImports(imports);

        List<TypeDeclarationContext> types = ctx.typeDeclaration();
        for(TypeDeclarationContext tx:types){
            List<ClassOrInterfaceModifierContext> mods= tx.classOrInterfaceModifier();
            for(ClassOrInterfaceModifierContext mod:mods){
                if(mod.PUBLIC()!=null){
                    summaryInfo.setPrimaryDeclaration(tx);
                    break;
                }
            }
        }
     }


    @Override public void exitImportDeclaration(Java7Parser.ImportDeclarationContext ctx) {

     }

	@Override public void exitClassDeclaration(Java7Parser.ClassDeclarationContext ctx) {

        System.out.println("class name:" + ctx.IDENTIFIER().getText());
    }
}


// class EvalVisitor extends Java7BaseVisitor<Integer>{

//     Map<String,Integer> memory = new HashMap<String,Integer>();

//     @Override
//     public Integer visitAssign(Java7Parser.AssignContext ctx){
//         String id = ctx.ID().getText();
//         int value = visit(ctx.expr());
//         memory.put(id,value);
//         return value;
//     }
//     @Override
//     public Integer visitPrintExpr(Java7Parser.PrintExprContext ctx){
//         Integer value = visit(ctx.expr());
//         System.out.println(value);
//         return null;
//     }
    
//     @Override
//     public Integer visitInt(Java7Parser.IntContext ctx){
//         return Integer.valueOf(ctx.INT().getText());
//     }

    
//     // note this id and previous id are different
//     @Override
//     public Integer visitId(Java7Parser.IdContext ctx){
//         String id = ctx.ID().getText();
//         if(memory.containsKey(id)){
//             return memory.get(id);
//         }
//         return null;
//     }
//     @Override
//     public Integer visitMulDiv(Java7Parser.MulDivContext ctx){
//         Integer left = visit(ctx.expr(0));
//         Integer right = visit(ctx.expr(1));
//         if(left!=null && right!=null){
//             switch(ctx.op.getType()){
//                 case Java7Parser.MUL:
//                 return left*right;
//                 default:
//                 return left/right;
//             }
//         }
//         return null;
//     }
//     @Override
//     public Integer visitAddSub(Java7Parser.AddSubContext ctx){
//         Integer left = visit(ctx.expr(0));
//         Integer right = visit(ctx.expr(1));
//         if(left!=null && right!=null){
//             switch(ctx.op.getType()){
//                 case Java7Parser.ADD:
//                 return left+right;
//                 default:
//                 return left-right;
//             }
//         }
//         return null;
//     }

//     @Override
//     public Integer visitParens(Java7Parser.ParensContext ctx){
//         return visit(ctx.expr());
//     }

//     @Override
//     public Integer visitClear(Java7Parser.ClearContext ctx){
//         List<TerminalNode> ids = ctx.getTokens(Java7Parser.ID);
//         if(ids!=null){
//             for(TerminalNode node:ids){
//                 memory.remove(node.getText());
//             }
//         }
//         return null;
//     }
// }