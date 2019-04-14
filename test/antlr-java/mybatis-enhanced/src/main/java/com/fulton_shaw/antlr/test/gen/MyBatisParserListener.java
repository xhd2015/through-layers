// Generated from D:\Pool\Projects\wobstorm\through-layers\test\antlr-java\mybatis-enhanced\src\main\resources\grammar\MyBatisParser.g4 by ANTLR 4.7.2
package com.fulton_shaw.antlr.test.gen;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MyBatisParser}.
 */
public interface MyBatisParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(MyBatisParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(MyBatisParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#typeType}.
	 * @param ctx the parse tree
	 */
	void enterTypeType(MyBatisParser.TypeTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#typeType}.
	 * @param ctx the parse tree
	 */
	void exitTypeType(MyBatisParser.TypeTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierList(MyBatisParser.IdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierList(MyBatisParser.IdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#sqlStatement}.
	 * @param ctx the parse tree
	 */
	void enterSqlStatement(MyBatisParser.SqlStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#sqlStatement}.
	 * @param ctx the parse tree
	 */
	void exitSqlStatement(MyBatisParser.SqlStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void enterSelectStatement(MyBatisParser.SelectStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void exitSelectStatement(MyBatisParser.SelectStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#colList}.
	 * @param ctx the parse tree
	 */
	void enterColList(MyBatisParser.ColListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#colList}.
	 * @param ctx the parse tree
	 */
	void exitColList(MyBatisParser.ColListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#tableSpec}.
	 * @param ctx the parse tree
	 */
	void enterTableSpec(MyBatisParser.TableSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#tableSpec}.
	 * @param ctx the parse tree
	 */
	void exitTableSpec(MyBatisParser.TableSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#columnSpec}.
	 * @param ctx the parse tree
	 */
	void enterColumnSpec(MyBatisParser.ColumnSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#columnSpec}.
	 * @param ctx the parse tree
	 */
	void exitColumnSpec(MyBatisParser.ColumnSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#columnLiteral}.
	 * @param ctx the parse tree
	 */
	void enterColumnLiteral(MyBatisParser.ColumnLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#columnLiteral}.
	 * @param ctx the parse tree
	 */
	void exitColumnLiteral(MyBatisParser.ColumnLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyBatisParser#updateStatement}.
	 * @param ctx the parse tree
	 */
	void enterUpdateStatement(MyBatisParser.UpdateStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyBatisParser#updateStatement}.
	 * @param ctx the parse tree
	 */
	void exitUpdateStatement(MyBatisParser.UpdateStatementContext ctx);
}