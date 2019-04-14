
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

public class Test {
    public static void main(String[] args) throws Exception{
        ANTLRInputStream input = new ANTLRInputStream(System.in);

        ArrayInitLexer lexer = new ArrayInitLexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        ArrayInitParser parser = new ArrayInitParser(tokens);

        ParseTree tree = parser.init();

        // System.out.println(tree.toStringTree(parser));

        ParseTreeWalker walker = new ParseTreeWalker();
        walker.walk(new ShortToUnicodeString(), tree);

        System.out.println();
    }

}


class ShortToUnicodeString extends ArrayInitBaseListener{


    @Override
    public void enterInit(ArrayInitParser.InitContext ctx){
        System.out.printf("\"");
    }
    @Override
    public void exitInit(ArrayInitParser.InitContext ctx){
        System.out.printf("\"");
    }

    @Override
    public void enterValue(ArrayInitParser.ValueContext ctx){
        int value = Integer.valueOf(ctx.INT().getText());
        System.out.printf("\\u%04x",value);
    }
}