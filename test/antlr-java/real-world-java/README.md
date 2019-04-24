
# How
First,anltr extracts all constants from semantic rules, and place them before any semantic rule, explicit syntax rule.

And  remember that, the earlier appeared symbol has a higher priority.


## `fragment`

this  means that, this rule will not emit a corresponding semantic counter part.They are referenced internally.

## escape
```
STRING : '"'  (ESC|.)*? '"' ;
ESC : '\\"' | '\\\\' ; // double quote or slash
```

## comment and discard
```
LINE_COMMENT : '//' .*? '\n' -> skip ;
COMMENT : '/*' .*? '*/' -> skip ; 
```

## space
```
WS : [ \t\r\n] -> skip ; // note that skip will eventually discard all the tokens, -> channel(HIDDEN)
```

## EOF
```
EOF_SPECIAL : EOF ; // special symbol
```

## tokens
```
tokens {BEGIN END}
```

## change token content at lexer phase
```
// change 'x' to x
CHAR: '\'' . '\'' {setText(String.valueOf(getText().charAt(1)));}
```

## members,header,locals
```
@parser::members{

}

@lexer::members{

}
```


## dynamic semantic judgying(at parse phase)
A very common case is that, `enum` is imported until java5, so before that `enum` is not supported.
```
enumDecl:'enum' name=ID '{' ID (',' ID)* '}' ;
```
Add supporting to java4, enum can also be id.
```
enumDecl:'enum' name=id '{' id (',' id)* '}' ;

id : ID
     | {!java5}? 'enum'
     ;
```

{...}? is called a runtime switch on/off, that can cut off a sytax branch if the value is evaluated to false.

## dynamic syntax switch
for performace reason, semantic switch is better that dynamic swtich
```
ENUM:  'enum' {java5}?
ID  :   [a-zA-Z]+ ;
```

## sheild incorrect branch
in `c++`, `f(i)` can either be a function call or a type declaration,based on the type of `f`.
```
@parser::members{
    Set<String> types = new HashSet<>(){{
        add("T");
    }};
    boolean istype(){
        return types.contains(getCurrentToken().getText());
    }
}

decl:  ID ID
      | {istype()}? ID '(' ID ')'
expr:  INT
       | ID
       | {!istype()}? ID '(' expr ')'
```
```
f(i); // function call
T(i); // declaration
```

For other type of ambiguity, ANTLR will always choose the front-most branch.

## options
`-tokens`  output tokens

`-diagnostics` output diagnostic information,including ambiguious information

## token channels
```
channels{WHITESPACE,COMMENTS}
WS : [ \t\n\r]+ -> channel(WHITESPACE);

SL_COMMENT : '//' .*? '\n' -> channel(COMMENTS)  // java code: _channel=HIDDEN
```

## token rewriters
rewrite
```
int n = 0; // define a counter
int i = 9;
```
to
```
/* define a counter */
int n = 0;
int i = 9;
```
```
public static class CommenShifter extends CymbolBaseListener{
    BUfferedTokenStream tokens;
    TokenStreamRewriter rewriter;
    public CommentShifter(BUfferedTokenStream tokens){
        this.tokens = tokens;
        rewriter = new TokenStreamRewriter(tokens);
    }

    @Override
    public void exitVarDecl(CymbolParser.VarDeclContext ctx){
        Token semi = ctx.getStop();
        int i = semi.getTokenIndex();
        List<Token> cmtChannel = 
        tokens.getHiddenTokensToRight(i,CymbolLexer.COMMENTS);
        Token cmt = cmtChannel==null?null: cmtChannel.get(0);
        if(cmt!=null){
            String txt = cmt.getText().substring(2);
            String newCmt = "/* " + txt.trim() + "*/\n";
            rewriter.insertBefore(ctx.start,newCmt);
            rewriter.replace(cmt,"\n");
        }
    }
    // rewriter.getText() to gain the final text.
}
```


## mode change
```
lexer grammar ModeTagsLexer;

OPEN : "<" --> mode(ISLAND) ;
TEXT : ~'<'+ ;

mode ISLAND;
CLOSE : '>' -> mode(DEFAULT_MODLE)
SLASH : '/' ;
ID  : [a-zA-Z]+ ;
```
ues
```
parser grammar ModeTagsParser;

options {tokenVocab=ModeTagsLexer;}

file : (tag | TEXT)* ;
tag : '<' ID '>'
      | '<' '/' ID '>'
      ;
```