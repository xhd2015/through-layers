const {
    parse
} = require("java-parser");
const javaText = `
public class HelloWorldExample{
  public static void main(String args[]){
    System.out.println("Hello World !");
  }
}
`;

const cst = parse(javaText);
// explore the CST

const {
    BaseJavaCstVisitor,
    BaseJavaCstVisitorWithDefaults
} = require("java-parser");

// Use "BaseJavaCstVisitor" if you need to implement all the visitor methods yourself.
class LambdaArrowsPositionCollector extends 
BaseJavaCstVisitorWithDefaults 
// BaseJavaCstVisitor
{
    constructor() {
        super();
        this._result = [];
        this.validateVisitor();
    }

    // lambdaExpression(ctx) {
    //     // Collects all the starting offsets of lambda arrows in lambdas with short (no parenthesis)
    //     // single argument lists: e.g:
    //     // - n -> n*n (will be collected)
    //     // - (n) -> n*n (not collected)
    //     if (ctx.lambdaParameters.children.Identifier.length > 0) {
    //         this._result.push(ctx.Arrow[0].startOffset);
    //     }
    // }
    result(ctx){
        // ignore return type
    }
    methodDeclaration(ctx){
        console.log("methodDeclaration:", JSON.stringify(ctx))
    }
}

const lambdaArrowsCollector = new LambdaArrowsPositionCollector();
// The CST result from the previous code snippet
lambdaArrowsCollector.visit(cst);
// lambdaArrowsCollector._result.forEach(arrowOffset => {
//     console.log(arrowOffset);
// });