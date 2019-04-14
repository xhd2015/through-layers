// Generated from D:\Pool\Projects\wobstorm\through-layers\test\antlr-java\mybatis-enhanced\src\main\resources\grammar\MyBatisParser.g4 by ANTLR 4.7.2
package com.fulton_shaw.antlr.test.gen;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MyBatisParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EXEC=1, BEGIN=2, END=3, EQ=4, DOT=5, STAR=6, BACK_QUOTE=7, COMMAN=8, WS=9, 
		IDENTIFIER=10, SQL_EXEC_IDENTIFIER=11, LINDEX=12, RINDEX=13, SQL_EXEC_WS=14, 
		SELECT=15, UPDATE=16, FROM=17, WHERE=18, LIMIT=19, ORDER=20, BY=21, GROUP=22, 
		HAVING=23, SQL_OPERATOR=24, IN=25, BETWEEN=26, LITERAL_BEGIN=27, COMMENT=28, 
		ANY=29, COLUMN_SEP=30, NUMBER=31, SQL_INLINE_IDENTIFIER=32, SQL_WS=33, 
		LITERAL_END=34;
	public static final int
		RULE_start = 0, RULE_typeType = 1, RULE_identifierList = 2, RULE_sqlStatement = 3, 
		RULE_selectStatement = 4, RULE_colList = 5, RULE_tableSpec = 6, RULE_columnSpec = 7, 
		RULE_columnLiteral = 8, RULE_updateStatement = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "typeType", "identifierList", "sqlStatement", "selectStatement", 
			"colList", "tableSpec", "columnSpec", "columnLiteral", "updateStatement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'exec'", "'begin'", "'end'", "'='", null, null, null, "','", null, 
			null, null, "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EXEC", "BEGIN", "END", "EQ", "DOT", "STAR", "BACK_QUOTE", "COMMAN", 
			"WS", "IDENTIFIER", "SQL_EXEC_IDENTIFIER", "LINDEX", "RINDEX", "SQL_EXEC_WS", 
			"SELECT", "UPDATE", "FROM", "WHERE", "LIMIT", "ORDER", "BY", "GROUP", 
			"HAVING", "SQL_OPERATOR", "IN", "BETWEEN", "LITERAL_BEGIN", "COMMENT", 
			"ANY", "COLUMN_SEP", "NUMBER", "SQL_INLINE_IDENTIFIER", "SQL_WS", "LITERAL_END"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MyBatisParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MyBatisParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public TerminalNode EXEC() { return getToken(MyBatisParser.EXEC, 0); }
		public TerminalNode BEGIN() { return getToken(MyBatisParser.BEGIN, 0); }
		public SqlStatementContext sqlStatement() {
			return getRuleContext(SqlStatementContext.class,0);
		}
		public TerminalNode END() { return getToken(MyBatisParser.END, 0); }
		public TerminalNode LINDEX() { return getToken(MyBatisParser.LINDEX, 0); }
		public TerminalNode RINDEX() { return getToken(MyBatisParser.RINDEX, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(MyBatisParser.IDENTIFIER, 0); }
		public TerminalNode EQ() { return getToken(MyBatisParser.EQ, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterStart(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitStart(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitStart(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			match(EXEC);
			setState(26);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LINDEX) {
				{
				setState(21);
				match(LINDEX);
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(22);
					identifierList();
					}
				}

				setState(25);
				match(RINDEX);
				}
			}

			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(28);
				typeType();
				setState(29);
				match(IDENTIFIER);
				setState(30);
				match(EQ);
				}
			}

			setState(34);
			match(BEGIN);
			setState(35);
			sqlStatement();
			setState(36);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(MyBatisParser.IDENTIFIER, 0); }
		public TypeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterTypeType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitTypeType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitTypeType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeTypeContext typeType() throws RecognitionException {
		TypeTypeContext _localctx = new TypeTypeContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_typeType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(MyBatisParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(MyBatisParser.IDENTIFIER, i);
		}
		public List<TerminalNode> COMMAN() { return getTokens(MyBatisParser.COMMAN); }
		public TerminalNode COMMAN(int i) {
			return getToken(MyBatisParser.COMMAN, i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterIdentifierList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitIdentifierList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitIdentifierList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_identifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(IDENTIFIER);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMAN) {
				{
				{
				setState(41);
				match(COMMAN);
				setState(42);
				match(IDENTIFIER);
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlStatementContext extends ParserRuleContext {
		public SelectStatementContext selectStatement() {
			return getRuleContext(SelectStatementContext.class,0);
		}
		public UpdateStatementContext updateStatement() {
			return getRuleContext(UpdateStatementContext.class,0);
		}
		public SqlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterSqlStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitSqlStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitSqlStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SqlStatementContext sqlStatement() throws RecognitionException {
		SqlStatementContext _localctx = new SqlStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sqlStatement);
		try {
			setState(50);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				selectStatement();
				}
				break;
			case UPDATE:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				updateStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectStatementContext extends ParserRuleContext {
		public TerminalNode SELECT() { return getToken(MyBatisParser.SELECT, 0); }
		public ColListContext colList() {
			return getRuleContext(ColListContext.class,0);
		}
		public TerminalNode FROM() { return getToken(MyBatisParser.FROM, 0); }
		public TableSpecContext tableSpec() {
			return getRuleContext(TableSpecContext.class,0);
		}
		public TerminalNode WHERE() { return getToken(MyBatisParser.WHERE, 0); }
		public SelectStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterSelectStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitSelectStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitSelectStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelectStatementContext selectStatement() throws RecognitionException {
		SelectStatementContext _localctx = new SelectStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_selectStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(SELECT);
			setState(53);
			colList();
			setState(54);
			match(FROM);
			setState(55);
			tableSpec();
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(56);
				match(WHERE);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColListContext extends ParserRuleContext {
		public List<ColumnSpecContext> columnSpec() {
			return getRuleContexts(ColumnSpecContext.class);
		}
		public ColumnSpecContext columnSpec(int i) {
			return getRuleContext(ColumnSpecContext.class,i);
		}
		public List<TerminalNode> COMMAN() { return getTokens(MyBatisParser.COMMAN); }
		public TerminalNode COMMAN(int i) {
			return getToken(MyBatisParser.COMMAN, i);
		}
		public ColListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterColList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitColList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitColList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ColListContext colList() throws RecognitionException {
		ColListContext _localctx = new ColListContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_colList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			columnSpec();
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMAN) {
				{
				{
				setState(60);
				match(COMMAN);
				setState(61);
				columnSpec();
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableSpecContext extends ParserRuleContext {
		public List<TerminalNode> BACK_QUOTE() { return getTokens(MyBatisParser.BACK_QUOTE); }
		public TerminalNode BACK_QUOTE(int i) {
			return getToken(MyBatisParser.BACK_QUOTE, i);
		}
		public TerminalNode IDENTIFIER() { return getToken(MyBatisParser.IDENTIFIER, 0); }
		public TableSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableSpec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterTableSpec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitTableSpec(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitTableSpec(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TableSpecContext tableSpec() throws RecognitionException {
		TableSpecContext _localctx = new TableSpecContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tableSpec);
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BACK_QUOTE:
				enterOuterAlt(_localctx, 1);
				{
				setState(67);
				match(BACK_QUOTE);
				setState(68);
				match(IDENTIFIER);
				setState(69);
				match(BACK_QUOTE);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(70);
				match(IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnSpecContext extends ParserRuleContext {
		public List<TerminalNode> BACK_QUOTE() { return getTokens(MyBatisParser.BACK_QUOTE); }
		public TerminalNode BACK_QUOTE(int i) {
			return getToken(MyBatisParser.BACK_QUOTE, i);
		}
		public ColumnLiteralContext columnLiteral() {
			return getRuleContext(ColumnLiteralContext.class,0);
		}
		public ColumnSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnSpec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterColumnSpec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitColumnSpec(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitColumnSpec(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ColumnSpecContext columnSpec() throws RecognitionException {
		ColumnSpecContext _localctx = new ColumnSpecContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_columnSpec);
		try {
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BACK_QUOTE:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				match(BACK_QUOTE);
				setState(74);
				columnLiteral();
				setState(75);
				match(BACK_QUOTE);
				}
				break;
			case IDENTIFIER:
			case ANY:
				enterOuterAlt(_localctx, 2);
				{
				setState(77);
				columnLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnLiteralContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(MyBatisParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(MyBatisParser.IDENTIFIER, i);
		}
		public TerminalNode ANY() { return getToken(MyBatisParser.ANY, 0); }
		public TerminalNode COLUMN_SEP() { return getToken(MyBatisParser.COLUMN_SEP, 0); }
		public ColumnLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterColumnLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitColumnLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitColumnLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ColumnLiteralContext columnLiteral() throws RecognitionException {
		ColumnLiteralContext _localctx = new ColumnLiteralContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_columnLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(80);
				match(IDENTIFIER);
				setState(81);
				match(COLUMN_SEP);
				}
				break;
			}
			setState(84);
			_la = _input.LA(1);
			if ( !(_la==IDENTIFIER || _la==ANY) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpdateStatementContext extends ParserRuleContext {
		public TerminalNode UPDATE() { return getToken(MyBatisParser.UPDATE, 0); }
		public UpdateStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).enterUpdateStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MyBatisParserListener ) ((MyBatisParserListener)listener).exitUpdateStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MyBatisParserVisitor ) return ((MyBatisParserVisitor<? extends T>)visitor).visitUpdateStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UpdateStatementContext updateStatement() throws RecognitionException {
		UpdateStatementContext _localctx = new UpdateStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_updateStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(UPDATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3$[\4\2\t\2\4\3\t\3"+
		"\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\3\2"+
		"\3\2\3\2\5\2\32\n\2\3\2\5\2\35\n\2\3\2\3\2\3\2\3\2\5\2#\n\2\3\2\3\2\3"+
		"\2\3\2\3\3\3\3\3\4\3\4\3\4\7\4.\n\4\f\4\16\4\61\13\4\3\5\3\5\5\5\65\n"+
		"\5\3\6\3\6\3\6\3\6\3\6\5\6<\n\6\3\7\3\7\3\7\7\7A\n\7\f\7\16\7D\13\7\3"+
		"\b\3\b\3\b\3\b\5\bJ\n\b\3\t\3\t\3\t\3\t\3\t\5\tQ\n\t\3\n\3\n\5\nU\n\n"+
		"\3\n\3\n\3\13\3\13\3\13\2\2\f\2\4\6\b\n\f\16\20\22\24\2\3\4\2\f\f\37\37"+
		"\2Z\2\26\3\2\2\2\4(\3\2\2\2\6*\3\2\2\2\b\64\3\2\2\2\n\66\3\2\2\2\f=\3"+
		"\2\2\2\16I\3\2\2\2\20P\3\2\2\2\22T\3\2\2\2\24X\3\2\2\2\26\34\7\3\2\2\27"+
		"\31\7\16\2\2\30\32\5\6\4\2\31\30\3\2\2\2\31\32\3\2\2\2\32\33\3\2\2\2\33"+
		"\35\7\17\2\2\34\27\3\2\2\2\34\35\3\2\2\2\35\"\3\2\2\2\36\37\5\4\3\2\37"+
		" \7\f\2\2 !\7\6\2\2!#\3\2\2\2\"\36\3\2\2\2\"#\3\2\2\2#$\3\2\2\2$%\7\4"+
		"\2\2%&\5\b\5\2&\'\7\5\2\2\'\3\3\2\2\2()\7\f\2\2)\5\3\2\2\2*/\7\f\2\2+"+
		",\7\n\2\2,.\7\f\2\2-+\3\2\2\2.\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60\7\3"+
		"\2\2\2\61/\3\2\2\2\62\65\5\n\6\2\63\65\5\24\13\2\64\62\3\2\2\2\64\63\3"+
		"\2\2\2\65\t\3\2\2\2\66\67\7\21\2\2\678\5\f\7\289\7\23\2\29;\5\16\b\2:"+
		"<\7\24\2\2;:\3\2\2\2;<\3\2\2\2<\13\3\2\2\2=B\5\20\t\2>?\7\n\2\2?A\5\20"+
		"\t\2@>\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C\r\3\2\2\2DB\3\2\2\2EF\7"+
		"\t\2\2FG\7\f\2\2GJ\7\t\2\2HJ\7\f\2\2IE\3\2\2\2IH\3\2\2\2J\17\3\2\2\2K"+
		"L\7\t\2\2LM\5\22\n\2MN\7\t\2\2NQ\3\2\2\2OQ\5\22\n\2PK\3\2\2\2PO\3\2\2"+
		"\2Q\21\3\2\2\2RS\7\f\2\2SU\7 \2\2TR\3\2\2\2TU\3\2\2\2UV\3\2\2\2VW\t\2"+
		"\2\2W\23\3\2\2\2XY\7\22\2\2Y\25\3\2\2\2\f\31\34\"/\64;BIPT";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}