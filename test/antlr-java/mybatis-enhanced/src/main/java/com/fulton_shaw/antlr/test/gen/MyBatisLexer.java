// Generated from D:\Pool\Projects\wobstorm\through-layers\test\antlr-java\mybatis-enhanced\src\main\resources\grammar\MyBatisLexer.g4 by ANTLR 4.7.2
package com.fulton_shaw.antlr.test.gen;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MyBatisLexer extends Lexer {
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
		SQL_EXEC=1, SQL_INLINE=2, SQL_LITERAL=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "SQL_EXEC", "SQL_INLINE", "SQL_LITERAL"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EXEC", "BEGIN", "END", "EQ", "DOT", "STAR", "BACK_QUOTE", "COMMAN", 
			"WS", "IDENTIFIER", "IdentifierFragment", "LetterOrDigit", "Letter", 
			"SQL_EXEC_IDENTIFIER", "LINDEX", "RINDEX", "SQL_EXEC_WS", "SELECT", "UPDATE", 
			"FROM", "WHERE", "LIMIT", "ORDER", "BY", "GROUP", "HAVING", "SQL_OPERATOR", 
			"IN", "BETWEEN", "LITERAL_BEGIN", "COMMENT", "ANY", "COLUMN_SEP", "NUMBER", 
			"SQL_INLINE_IDENTIFIER", "SQL_WS", "LITERAL_END", "WS_FRAGENT"
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


	public MyBatisLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MyBatisLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2$\u0109\b\1\b\1\b"+
		"\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t"+
		"\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21"+
		"\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30"+
		"\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37"+
		"\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3"+
		"\f\3\f\7\fz\n\f\f\f\16\f}\13\f\3\r\3\r\5\r\u0081\n\r\3\16\3\16\3\16\3"+
		"\16\5\16\u0087\n\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u00d3\n\34\3\35\3\35\3\35"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 "+
		"\3 \7 \u00e8\n \f \16 \u00eb\13 \3 \3 \3 \3 \3 \3!\3!\3\"\3\"\3#\6#\u00f7"+
		"\n#\r#\16#\u00f8\3$\3$\3%\3%\3%\3%\3&\3&\3&\3&\3\'\6\'\u0106\n\'\r\'\16"+
		"\'\u0107\3\u00e9\2(\6\3\b\4\n\5\f\6\16\7\20\b\22\t\24\n\26\13\30\f\32"+
		"\2\34\2\36\2 \r\"\16$\17&\20(\21*\22,\23.\24\60\25\62\26\64\27\66\308"+
		"\31:\32<\33>\34@\35B\36D\37F H!J\"L#N$P\2\6\2\3\4\5\36\3\2\62;\6\2&&C"+
		"\\aac|\4\2\2\u0081\ud802\udc01\3\2\ud802\udc01\3\2\udc02\ue001\4\2UUu"+
		"u\4\2GGgg\4\2NNnn\4\2EEee\4\2VVvv\4\2WWww\4\2RRrr\4\2FFff\4\2HHhh\4\2"+
		"TTtt\4\2QQqq\4\2OOoo\4\2YYyy\4\2JJjj\4\2KKkk\4\2DDdd\4\2[[{{\4\2IIii\4"+
		"\2CCcc\4\2XXxx\4\2PPpp\4\2>>@@\5\2\13\f\17\17\"\"\2\u010e\2\6\3\2\2\2"+
		"\2\b\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3"+
		"\2\2\2\2\24\3\2\2\2\2\26\3\2\2\2\2\30\3\2\2\2\3 \3\2\2\2\3\"\3\2\2\2\3"+
		"$\3\2\2\2\3&\3\2\2\2\4(\3\2\2\2\4*\3\2\2\2\4,\3\2\2\2\4.\3\2\2\2\4\60"+
		"\3\2\2\2\4\62\3\2\2\2\4\64\3\2\2\2\4\66\3\2\2\2\48\3\2\2\2\4:\3\2\2\2"+
		"\4<\3\2\2\2\4>\3\2\2\2\4@\3\2\2\2\4B\3\2\2\2\4D\3\2\2\2\4F\3\2\2\2\4H"+
		"\3\2\2\2\4J\3\2\2\2\4L\3\2\2\2\5N\3\2\2\2\6R\3\2\2\2\bY\3\2\2\2\na\3\2"+
		"\2\2\fg\3\2\2\2\16i\3\2\2\2\20k\3\2\2\2\22m\3\2\2\2\24o\3\2\2\2\26q\3"+
		"\2\2\2\30u\3\2\2\2\32w\3\2\2\2\34\u0080\3\2\2\2\36\u0086\3\2\2\2 \u0088"+
		"\3\2\2\2\"\u008a\3\2\2\2$\u008c\3\2\2\2&\u0090\3\2\2\2(\u0094\3\2\2\2"+
		"*\u009b\3\2\2\2,\u00a1\3\2\2\2.\u00a6\3\2\2\2\60\u00ac\3\2\2\2\62\u00b2"+
		"\3\2\2\2\64\u00b8\3\2\2\2\66\u00bb\3\2\2\28\u00c1\3\2\2\2:\u00d2\3\2\2"+
		"\2<\u00d4\3\2\2\2>\u00d7\3\2\2\2@\u00df\3\2\2\2B\u00e3\3\2\2\2D\u00f1"+
		"\3\2\2\2F\u00f3\3\2\2\2H\u00f6\3\2\2\2J\u00fa\3\2\2\2L\u00fc\3\2\2\2N"+
		"\u0100\3\2\2\2P\u0105\3\2\2\2RS\7g\2\2ST\7z\2\2TU\7g\2\2UV\7e\2\2VW\3"+
		"\2\2\2WX\b\2\2\2X\7\3\2\2\2YZ\7d\2\2Z[\7g\2\2[\\\7i\2\2\\]\7k\2\2]^\7"+
		"p\2\2^_\3\2\2\2_`\b\3\3\2`\t\3\2\2\2ab\7g\2\2bc\7p\2\2cd\7f\2\2de\3\2"+
		"\2\2ef\b\4\4\2f\13\3\2\2\2gh\7?\2\2h\r\3\2\2\2ij\7\60\2\2j\17\3\2\2\2"+
		"kl\7,\2\2l\21\3\2\2\2mn\7b\2\2n\23\3\2\2\2op\7.\2\2p\25\3\2\2\2qr\5P\'"+
		"\2rs\3\2\2\2st\b\n\5\2t\27\3\2\2\2uv\5\32\f\2v\31\3\2\2\2w{\5\36\16\2"+
		"xz\5\34\r\2yx\3\2\2\2z}\3\2\2\2{y\3\2\2\2{|\3\2\2\2|\33\3\2\2\2}{\3\2"+
		"\2\2~\u0081\5\36\16\2\177\u0081\t\2\2\2\u0080~\3\2\2\2\u0080\177\3\2\2"+
		"\2\u0081\35\3\2\2\2\u0082\u0087\t\3\2\2\u0083\u0087\n\4\2\2\u0084\u0085"+
		"\t\5\2\2\u0085\u0087\t\6\2\2\u0086\u0082\3\2\2\2\u0086\u0083\3\2\2\2\u0086"+
		"\u0084\3\2\2\2\u0087\37\3\2\2\2\u0088\u0089\5\32\f\2\u0089!\3\2\2\2\u008a"+
		"\u008b\7]\2\2\u008b#\3\2\2\2\u008c\u008d\7_\2\2\u008d\u008e\3\2\2\2\u008e"+
		"\u008f\b\21\4\2\u008f%\3\2\2\2\u0090\u0091\5P\'\2\u0091\u0092\3\2\2\2"+
		"\u0092\u0093\b\22\5\2\u0093\'\3\2\2\2\u0094\u0095\t\7\2\2\u0095\u0096"+
		"\t\b\2\2\u0096\u0097\t\t\2\2\u0097\u0098\t\b\2\2\u0098\u0099\t\n\2\2\u0099"+
		"\u009a\t\13\2\2\u009a)\3\2\2\2\u009b\u009c\t\f\2\2\u009c\u009d\t\r\2\2"+
		"\u009d\u009e\t\16\2\2\u009e\u009f\t\13\2\2\u009f\u00a0\t\b\2\2\u00a0+"+
		"\3\2\2\2\u00a1\u00a2\t\17\2\2\u00a2\u00a3\t\20\2\2\u00a3\u00a4\t\21\2"+
		"\2\u00a4\u00a5\t\22\2\2\u00a5-\3\2\2\2\u00a6\u00a7\t\23\2\2\u00a7\u00a8"+
		"\t\24\2\2\u00a8\u00a9\t\b\2\2\u00a9\u00aa\t\20\2\2\u00aa\u00ab\t\b\2\2"+
		"\u00ab/\3\2\2\2\u00ac\u00ad\t\t\2\2\u00ad\u00ae\t\25\2\2\u00ae\u00af\t"+
		"\22\2\2\u00af\u00b0\t\25\2\2\u00b0\u00b1\t\13\2\2\u00b1\61\3\2\2\2\u00b2"+
		"\u00b3\t\21\2\2\u00b3\u00b4\t\20\2\2\u00b4\u00b5\t\16\2\2\u00b5\u00b6"+
		"\t\b\2\2\u00b6\u00b7\t\20\2\2\u00b7\63\3\2\2\2\u00b8\u00b9\t\26\2\2\u00b9"+
		"\u00ba\t\27\2\2\u00ba\65\3\2\2\2\u00bb\u00bc\t\30\2\2\u00bc\u00bd\t\20"+
		"\2\2\u00bd\u00be\t\21\2\2\u00be\u00bf\t\f\2\2\u00bf\u00c0\t\r\2\2\u00c0"+
		"\67\3\2\2\2\u00c1\u00c2\t\24\2\2\u00c2\u00c3\t\31\2\2\u00c3\u00c4\t\32"+
		"\2\2\u00c4\u00c5\t\25\2\2\u00c5\u00c6\t\33\2\2\u00c6\u00c7\t\30\2\2\u00c7"+
		"9\3\2\2\2\u00c8\u00d3\t\34\2\2\u00c9\u00ca\7>\2\2\u00ca\u00d3\7?\2\2\u00cb"+
		"\u00d3\7?\2\2\u00cc\u00cd\7@\2\2\u00cd\u00d3\7?\2\2\u00ce\u00cf\7>\2\2"+
		"\u00cf\u00d3\7@\2\2\u00d0\u00d3\5<\35\2\u00d1\u00d3\5>\36\2\u00d2\u00c8"+
		"\3\2\2\2\u00d2\u00c9\3\2\2\2\u00d2\u00cb\3\2\2\2\u00d2\u00cc\3\2\2\2\u00d2"+
		"\u00ce\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d2\u00d1\3\2\2\2\u00d3;\3\2\2\2"+
		"\u00d4\u00d5\t\25\2\2\u00d5\u00d6\t\33\2\2\u00d6=\3\2\2\2\u00d7\u00d8"+
		"\t\26\2\2\u00d8\u00d9\t\b\2\2\u00d9\u00da\t\13\2\2\u00da\u00db\t\23\2"+
		"\2\u00db\u00dc\t\b\2\2\u00dc\u00dd\t\b\2\2\u00dd\u00de\t\33\2\2\u00de"+
		"?\3\2\2\2\u00df\u00e0\7b\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\b\37\6\2"+
		"\u00e2A\3\2\2\2\u00e3\u00e4\7\61\2\2\u00e4\u00e5\7,\2\2\u00e5\u00e9\3"+
		"\2\2\2\u00e6\u00e8\13\2\2\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9"+
		"\u00ea\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00ec\3\2\2\2\u00eb\u00e9\3\2"+
		"\2\2\u00ec\u00ed\7,\2\2\u00ed\u00ee\7\61\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u00f0\b \5\2\u00f0C\3\2\2\2\u00f1\u00f2\7,\2\2\u00f2E\3\2\2\2\u00f3\u00f4"+
		"\7\60\2\2\u00f4G\3\2\2\2\u00f5\u00f7\t\2\2\2\u00f6\u00f5\3\2\2\2\u00f7"+
		"\u00f8\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9I\3\2\2\2"+
		"\u00fa\u00fb\5\32\f\2\u00fbK\3\2\2\2\u00fc\u00fd\5P\'\2\u00fd\u00fe\3"+
		"\2\2\2\u00fe\u00ff\b%\5\2\u00ffM\3\2\2\2\u0100\u0101\7b\2\2\u0101\u0102"+
		"\3\2\2\2\u0102\u0103\b&\4\2\u0103O\3\2\2\2\u0104\u0106\t\35\2\2\u0105"+
		"\u0104\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0105\3\2\2\2\u0107\u0108\3\2"+
		"\2\2\u0108Q\3\2\2\2\r\2\3\4\5{\u0080\u0086\u00d2\u00e9\u00f8\u0107\7\7"+
		"\3\2\7\4\2\6\2\2\2\3\2\7\5\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}