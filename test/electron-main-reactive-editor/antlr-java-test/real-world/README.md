
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