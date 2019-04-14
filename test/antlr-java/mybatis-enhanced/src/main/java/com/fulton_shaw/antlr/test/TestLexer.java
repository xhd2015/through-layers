package com.fulton_shaw.antlr.test;

import com.fulton_shaw.antlr.test.gen.MyBatisLexer;
import com.fulton_shaw.antlr.test.gen.MyBatisParser;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

import java.io.*;

public class TestLexer {
    public static String getNullable(String[] args, int i) {
        return args != null && args.length > i ? args[i] : null;
    }

    public static void main(String[] args) throws Exception {
        String lexerClass = getNullable(args, 0);
        String inputFile = getNullable(args, 1);
        if (lexerClass == null || inputFile == null) {
            System.err.println("example: TestLexer <lexer> <inputFile>");
        }
        InputStream is = new FileInputStream(inputFile);
        CharStream input = CharStreams.fromStream(is);

        Lexer lexer = Utils.createLexer((Class<Lexer>)Class.forName(lexerClass),input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);
        tokens.fill();
        System.out.print(tokens.getText());

        if (is != System.in) {
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