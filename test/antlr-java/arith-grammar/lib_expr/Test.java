
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
            is = new FileInputStream(inputFile);
        }
        ANTLRInputStream input = 
        new ANTLRInputStream(is);

        LibExprLexer lexer = new LibExprLexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        LibExprParser parser = new LibExprParser(tokens);

        ParseTree tree = parser.prog();

        // System.out.println(tree.toStringTree(parser));

        // ParseTreeWalker walker = new ParseTreeWalker();
        // walker.walk(, tree);
        // System.out.println();

        EvalVisitor visitor = new EvalVisitor();
        visitor.visit(tree);

        if(is!=System.in){
            is.close();
        }
    }

}


class EvalVisitor extends LibExprBaseVisitor<Integer>{

    Map<String,Integer> memory = new HashMap<String,Integer>();

    @Override
    public Integer visitAssign(LibExprParser.AssignContext ctx){
        String id = ctx.ID().getText();
        int value = visit(ctx.expr());
        memory.put(id,value);
        return value;
    }
    @Override
    public Integer visitPrintExpr(LibExprParser.PrintExprContext ctx){
        Integer value = visit(ctx.expr());
        System.out.println(value);
        return null;
    }
    
    @Override
    public Integer visitInt(LibExprParser.IntContext ctx){
        return Integer.valueOf(ctx.INT().getText());
    }

    
    // note this id and previous id are different
    @Override
    public Integer visitId(LibExprParser.IdContext ctx){
        String id = ctx.ID().getText();
        if(memory.containsKey(id)){
            return memory.get(id);
        }
        return null;
    }
    @Override
    public Integer visitMulDiv(LibExprParser.MulDivContext ctx){
        Integer left = visit(ctx.expr(0));
        Integer right = visit(ctx.expr(1));
        if(left!=null && right!=null){
            switch(ctx.op.getType()){
                case LibExprParser.MUL:
                return left*right;
                default:
                return left/right;
            }
        }
        return null;
    }
    @Override
    public Integer visitAddSub(LibExprParser.AddSubContext ctx){
        Integer left = visit(ctx.expr(0));
        Integer right = visit(ctx.expr(1));
        if(left!=null && right!=null){
            switch(ctx.op.getType()){
                case LibExprParser.ADD:
                return left+right;
                default:
                return left-right;
            }
        }
        return null;
    }

    @Override
    public Integer visitParens(LibExprParser.ParensContext ctx){
        return visit(ctx.expr());
    }

    @Override
    public Integer visitClear(LibExprParser.ClearContext ctx){
        List<TerminalNode> ids = ctx.getTokens(LibExprParser.ID);
        if(ids!=null){
            for(TerminalNode node:ids){
                memory.remove(node.getText());
            }
        }
        return null;
    }
}