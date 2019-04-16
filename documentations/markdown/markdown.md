# Reference
`>`

`>>`

`>>>`

# Splitting Line
`----`

`-----`

`*****`

`******`

# Unordered List
`-` `+` `*`

# Ordered List
`1. ` `2. `

 note there is space between.

# Table
NOTE: better to use double line`--` instead of `-` in the second, else it may be recognized as a list rather that a table by github.
```markdown
Head|Head|Head
---|:---:|---:
CONTENT|CONTENT|CONTENT
```
`:` is used for alignment.

# Flow (Not supported by all clients)
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```