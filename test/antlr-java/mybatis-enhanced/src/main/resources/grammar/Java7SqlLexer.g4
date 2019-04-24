lexer grammar Java7SqlLexer;

@lexer::members{
    int currentMode(){
        return _mode;
    }
    int modeStackSize(){
       return _modeStack.size();
    }
    int lastNthMode(int i){
        return _modeStack.get(_modeStack.size()-1-i);
    }
}

// Keywords
ABSTRACT:           'abstract';
ASSERT:             'assert';
BOOLEAN:            'boolean';
BREAK:              'break';
BYTE:               'byte';
CASE:               'case';
CATCH:              'catch';
CHAR:               'char';
CLASS:              'class';
CONST:              'const';
CONTINUE:           'continue';
DEFAULT:            'default';
DO:                 'do';
DOUBLE:             'double';
ELSE:               'else';
ENUM:               'enum';
EXTENDS:            'extends';
FINAL:              'final';
FINALLY:            'finally';
FLOAT:              'float';
FOR:                'for';
IF:                 'if';
GOTO:               'goto';
IMPLEMENTS:         'implements';
IMPORT:             'import';
INSTANCEOF:         'instanceof';
INT:                'int';
INTERFACE:          'interface';
LONG:               'long';
NATIVE:             'native';
NEW:                'new';
PACKAGE:            'package';
PRIVATE:            'private';
PROTECTED:          'protected';
PUBLIC:             'public';
RETURN:             'return';
SHORT:              'short';
STATIC:             'static';
STRICTFP:           'strictfp';
SUPER:              'super';
SWITCH:             'switch';
SYNCHRONIZED:       'synchronized';
THIS:               'this';
THROW:              'throw';
THROWS:             'throws';
TRANSIENT:          'transient';
TRY:                'try';
VOID:               'void';
VOLATILE:           'volatile';
WHILE:              'while';

// Literals

DECIMAL_LITERAL:    ('0' | [1-9] (Digits? | '_'+ Digits)) [lL]?;
HEX_LITERAL:        '0' [xX] [0-9a-fA-F] ([0-9a-fA-F_]* [0-9a-fA-F])? [lL]?;
OCT_LITERAL:        '0' '_'* [0-7] ([0-7_]* [0-7])? [lL]?;
BINARY_LITERAL:     '0' [bB] [01] ([01_]* [01])? [lL]?;
                    
FLOAT_LITERAL:      (Digits '.' Digits? | '.' Digits) ExponentPart? [fFdD]?
             |       Digits (ExponentPart [fFdD]? | [fFdD])
             ;

HEX_FLOAT_LITERAL:  '0' [xX] (HexDigits '.'? | HexDigits? '.' HexDigits) [pP] [+-]? Digits [fFdD]?;

BOOL_LITERAL:       'true'
            |       'false'
            ;

CHAR_LITERAL:       '\'' (~['\\\r\n] | EscapeSequence) '\'';

STRING_LITERAL:     '"' (~["\\\r\n] | EscapeSequence)* '"';

NULL_LITERAL:       'null';

// Separators

LPAREN:             '(';
RPAREN:             ')';
LBRACE:             '{';
RBRACE:             '}';
LBRACK:             '[';
RBRACK:             ']';
SEMI:               ';';
COMMA:              ',';
DOT:                '.';

// Operators

ASSIGN:             '=';
GT:                 '>';
LT:                 '<';
BANG:               '!';
TILDE:              '~';
QUESTION:           '?';
COLON:              ':';
EQUAL:              '==';
LE:                 '<=';
GE:                 '>=';
NOTEQUAL:           '!=';
AND:                '&&';
OR:                 '||';
INC:                '++';
DEC:                '--';
ADD:                '+';
SUB:                '-';
MUL:                '*';
DIV:                '/';
BITAND:             '&';
BITOR:              '|';
CARET:              '^';
MOD:                '%';

ADD_ASSIGN:         '+=';
SUB_ASSIGN:         '-=';
MUL_ASSIGN:         '*=';
DIV_ASSIGN:         '/=';
AND_ASSIGN:         '&=';
OR_ASSIGN:          '|=';
XOR_ASSIGN:         '^=';
MOD_ASSIGN:         '%=';
LSHIFT_ASSIGN:      '<<=';
RSHIFT_ASSIGN:      '>>=';
URSHIFT_ASSIGN:     '>>>=';

// Java 8 tokens

ARROW:              '->';
COLONCOLON:         '::';

// Additional symbols not defined in the lexical specification

AT:                 '@';
ELLIPSIS:           '...';

// Whitespace and comments

WS:                 [ \t\r\n\u000C]+ -> channel(HIDDEN);
COMMENT:            '/*' .*? '*/'    -> channel(HIDDEN);
LINE_COMMENT:       '//' ~[\r\n]*    -> channel(HIDDEN);

// exec must be placed before IDENTIFIER
EXEC  : 'exec'
    -> pushMode(SQL_EXEC)
     ;
 BEGIN : 'begin'
 {
       // into SQL_INLINE
       if(modeStackSize()>1 && lastNthMode(0)==SQL_EXEC && lastNthMode(1)==DEFAULT_MODE){
           popMode();
           popMode();
           pushMode(SQL_INLINE);
       }else{
         throw new RuntimeException("begin without a previous minor mode");
         }
 };
// Identifiers

IDENTIFIER:         Letter LetterOrDigit*;




mode SQL_EXEC;
SQL_EXEC_IDENTIFIER : IdentifierFragment ;
LINDEX : '[' ;
RINDEX : ']' -> pushMode(DEFAULT_MODE);
SQL_EXEC_WS : WS_FRAGENT -> channel(HIDDEN) ;


mode SQL_INLINE;
SELECT : [sS][eE][lL][eE][cC][tT];
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
PLACEHOLDER : '#{' ;
VERBATIM_PLACEHOLDER : '${' ;
SQL_PLACEHOLDER_RBRACE : '}' ;
END   :  'end' -> popMode;
LITERAL_BEGIN : '`' -> pushMode(SQL_LITERAL) ;
SQL_COMMENT : ('/*' .*? '*/'
         | '--\n'
         | '--' SQL_WS ~[\n]+ )-> channel(HIDDEN) ;
ANY : '*' ;
STATEMENT_END : ';' ;
COLUMN_SEP : '.' ;
NUMBER : [0-9]+ ;


SQL_INLINE_IDENTIFIER : IdentifierFragment ;
SQL_WS : WS_FRAGENT -> channel(HIDDEN) ;

mode SQL_LITERAL ;
LITERAL_END : '`' -> popMode ;


// Fragment rules

fragment WS_FRAGENT :  [ \t\n\r]+;


fragment ExponentPart
    : [eE] [+-]? Digits
    ;

fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;

fragment HexDigits
    : HexDigit ((HexDigit | '_')* HexDigit)?
    ;

fragment HexDigit
    : [0-9a-fA-F]
    ;

fragment Digits
    : [0-9] ([0-9_]* [0-9])?
    ;

fragment IdentifierFragment :   Letter LetterOrDigit*;


fragment LetterOrDigit
    : Letter
    | [0-9]
    ;

fragment Letter
    : [a-zA-Z$_] // these are the "java letters" below 0x7F
    | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
    | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
    ;



