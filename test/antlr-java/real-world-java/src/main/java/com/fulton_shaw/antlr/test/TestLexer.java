package com.fulton_shaw.antlr.test;

import com.fulton_shaw.antlr.test.gen.Java7Lexer;
import com.fulton_shaw.antlr.test.gen.Java7Parser;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.*;

public class TestLexer {
    public static void main(String[] args) throws Exception{
        String inputFile = null;
        if(args.length > 0){
            inputFile = args[0];
        }
        InputStream is = System.in;
        if(inputFile!=null){
            is = new FileInputStream(inputFile);
        }
        ANTLRInputStream input = 
        new ANTLRInputStream(is);

        Java7Lexer lexer = new Java7Lexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        Java7Parser parser = new Java7Parser(tokens);

        ParseTree tree = parser.compilationUnit();

        // System.out.println(tree.toStringTree(parser));

        // ParseTreeWalker walker = new ParseTreeWalker();
        // walker.walk(, tree);
        // System.out.println();

        // EvalVisitor visitor = new EvalVisitor();
        // visitor.visit(tree);

        System.out.print(tokens.getText());

        if(is!=System.in){
            is.close();
        }
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