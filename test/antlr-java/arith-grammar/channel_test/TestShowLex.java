
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.*;
import java.util.*;

public class TestShowLex {
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

        ChannelTestLexer lexer = new ChannelTestLexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        tokens.fill();
        // while(true){
        //    Token token =  tokens.nextToken();
        //    if(token.getType()==ChannelTestLexer.EOF){
        //        break;
        //    }
        // }

        System.out.print(tokens.getText());
        // ChannelTestParser parser = new ChannelTestParser(tokens);

        // ParseTree tree = parser.prog();

    }

}
