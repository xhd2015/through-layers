// Generated from D:\Pool\Projects\wobstorm\through-layers\test\antlr-java\mybatis-enhanced\src\main\resources\grammar\MyBatisParser.g4 by ANTLR 4.7.2
package com.fulton_shaw.antlr.test.gen;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link MyBatisParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface MyBatisParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#start}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStart(MyBatisParser.StartContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#typeType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeType(MyBatisParser.TypeTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#identifierList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierList(MyBatisParser.IdentifierListContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#sqlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSqlStatement(MyBatisParser.SqlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#selectStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectStatement(MyBatisParser.SelectStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#colList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColList(MyBatisParser.ColListContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#tableSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableSpec(MyBatisParser.TableSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#columnSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnSpec(MyBatisParser.ColumnSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#columnLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColumnLiteral(MyBatisParser.ColumnLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link MyBatisParser#updateStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpdateStatement(MyBatisParser.UpdateStatementContext ctx);
}