grammar SimpleGrammar;

TOKEN1: '$' DIGIT+ '$';

DIGIT: [0-9]+;

rule1: TOKEN1;

rule2: DIGIT rule1 DIGIT;
