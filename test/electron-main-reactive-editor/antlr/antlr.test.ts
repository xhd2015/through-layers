import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {Java7Lexer} from './Java7Lexer';
import {Java7Parser} from './Java7Parser';
import {resolve} from 'path'
import {readFileSync} from 'fs'
 
// Create the lexer and parser
let inputStream = new ANTLRInputStream(readFileSync(resolve(__dirname,"../Test.java"),"UTF-8"));
let lexer = new Java7Lexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new Java7Parser(tokenStream);
 
// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.compilationUnit();

console.log("key of tree:", Object.keys(tree))
console.log("tree = ", tree)
