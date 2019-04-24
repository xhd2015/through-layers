/**
   mybatis with java
 */
parser grammar MyBatisParser;

options {tokenVocab = MyBatisLexer;}

// if a token exists in two modes, then it should be clarified which to use
start :  EXEC ('[' identifierList? ']')? (typeType IDENTIFIER '=')? BEGIN sqlStatement END;

// to simplify, mark type just simple
typeType : IDENTIFIER ; 

identifierList :  IDENTIFIER (',' IDENTIFIER)* ;

sqlStatement : selectStatement
              | updateStatement
              ;
selectStatement : SELECT colList FROM tableSpec (WHERE )?  ;

colList : columnSpec (',' columnSpec)* ;

tableSpec : BACK_QUOTE IDENTIFIER BACK_QUOTE
              | IDENTIFIER ;

columnSpec : BACK_QUOTE columnLiteral BACK_QUOTE
             | columnLiteral ; 

columnLiteral : (IDENTIFIER COLUMN_SEP)? (IDENTIFIER | ANY )
             ;

updateStatement : UPDATE ;