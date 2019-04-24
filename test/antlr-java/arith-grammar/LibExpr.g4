grammar LibExpr;
import CommonLexerRules;

prog   :   stat+ ;

stat   :    expr NEWLINE              # printExpr
           | ID '=' expr NEWLINE      # assign
           | NEWLINE                  # blank
           | 'clear' (ID (',' ID)* ','?)? NEWLINE          # clear
           ;


expr   :    expr op=('*'|'/') expr       # MulDiv
           | expr op=('+'|'-') expr      # AddSub
           | INT                      # int
           | ID                       # id
           | '(' expr ')'             # parens
           ;

MUL     : '*' ;
DIV     : '/' ;
ADD     : '+' ;
SUB     : '-' ;