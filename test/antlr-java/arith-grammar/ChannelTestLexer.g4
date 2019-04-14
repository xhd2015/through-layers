

lexer grammar ChannelTestLexer;
import CommonLexerRules;
// HIDDEN is reserved
// channels {HIDDEN}
channels {MYHIDDEN}

// prog   :   stat+ ;

// stat   :    expr NEWLINE
//            | ID '=' expr NEWLINE
//            | NEWLINE
//            ;

// expr   :    expr ('*'|'/') expr
//            | expr ('+'|'-') expr
//            | INT
//            | ID
//            | '(' expr ')'
//            ;

WS      : [ \t]+ -> channel(MYHIDDEN) ;
PLUS    : [+]+ -> channel(HIDDEN);

OP      : [*/\-()=]+ ;