lexer grammar MyBatisLexer;
import CommonLexer;

EXEC  : 'exec'
    -> pushMode(SQL_EXEC)
     ;
BEGIN : 'begin' ->
        pushMode(SQL_INLINE) ;
END   :  'end' -> popMode;
EQ     : '=' ;
DOT    : '.' ;
STAR   :'*' ;
BACK_QUOTE : '`' ;
COMMAN : ',' ;
WS   : WS_FRAGENT -> channel(HIDDEN);
IDENTIFIER : IdentifierFragment ;

mode SQL_EXEC;
SQL_EXEC_IDENTIFIER : IdentifierFragment ;
LINDEX : '[' ;
RINDEX : ']' -> popMode ;
SQL_EXEC_WS : WS_FRAGENT -> channel(HIDDEN) ;

mode SQL_INLINE;
SELECT : [sS][eE][lL][eE][cC][tT] ;
UPDATE : [uU][pP][dD][tT][eE] ;
FROM   : [fF][rR][oO][mM] ;
WHERE  : [wW][hH][eE][rR][eE] ;
LIMIT  : [lL][iI][mM][iI][tT] ;
ORDER  : [oO][rR][dD][eE][rR] ;
BY     : [bB][yY] ;
GROUP  : [gG][rR][oO][uU][pP] ;
HAVING : [hH][aA][vV][iI][nN][gG] ;
SQL_OPERATOR : ('<' | '>' |'<=' |'=' | '>=' | '<>' | IN | BETWEEN) ;
IN     : [iI][nN] ;
BETWEEN : [bB][eE][tT][wW][eE][eE][nN] ;

LITERAL_BEGIN : '`' -> pushMode(SQL_LITERAL) ; 

COMMENT : '/*' .*? '*/' -> channel(HIDDEN) ;

ANY : '*' ;
COLUMN_SEP : '.' ;
NUMBER : [0-9]+ ;

SQL_INLINE_IDENTIFIER : IdentifierFragment ;

SQL_WS : WS_FRAGENT -> channel(HIDDEN) ;



mode SQL_LITERAL ; 
LITERAL_END : '`' -> popMode ;


fragment WS_FRAGENT :  [ \t\n\r]+;


