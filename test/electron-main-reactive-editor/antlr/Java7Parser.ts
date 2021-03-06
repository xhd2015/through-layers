// Generated from resources/grammar/Java7Parser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Java7ParserListener } from "./Java7ParserListener";
import { Java7ParserVisitor } from "./Java7ParserVisitor";


export class Java7Parser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly DECIMAL_LITERAL = 51;
	public static readonly HEX_LITERAL = 52;
	public static readonly OCT_LITERAL = 53;
	public static readonly BINARY_LITERAL = 54;
	public static readonly FLOAT_LITERAL = 55;
	public static readonly HEX_FLOAT_LITERAL = 56;
	public static readonly BOOL_LITERAL = 57;
	public static readonly CHAR_LITERAL = 58;
	public static readonly STRING_LITERAL = 59;
	public static readonly NULL_LITERAL = 60;
	public static readonly LPAREN = 61;
	public static readonly RPAREN = 62;
	public static readonly LBRACE = 63;
	public static readonly RBRACE = 64;
	public static readonly LBRACK = 65;
	public static readonly RBRACK = 66;
	public static readonly SEMI = 67;
	public static readonly COMMA = 68;
	public static readonly DOT = 69;
	public static readonly ASSIGN = 70;
	public static readonly GT = 71;
	public static readonly LT = 72;
	public static readonly BANG = 73;
	public static readonly TILDE = 74;
	public static readonly QUESTION = 75;
	public static readonly COLON = 76;
	public static readonly EQUAL = 77;
	public static readonly LE = 78;
	public static readonly GE = 79;
	public static readonly NOTEQUAL = 80;
	public static readonly AND = 81;
	public static readonly OR = 82;
	public static readonly INC = 83;
	public static readonly DEC = 84;
	public static readonly ADD = 85;
	public static readonly SUB = 86;
	public static readonly MUL = 87;
	public static readonly DIV = 88;
	public static readonly BITAND = 89;
	public static readonly BITOR = 90;
	public static readonly CARET = 91;
	public static readonly MOD = 92;
	public static readonly ADD_ASSIGN = 93;
	public static readonly SUB_ASSIGN = 94;
	public static readonly MUL_ASSIGN = 95;
	public static readonly DIV_ASSIGN = 96;
	public static readonly AND_ASSIGN = 97;
	public static readonly OR_ASSIGN = 98;
	public static readonly XOR_ASSIGN = 99;
	public static readonly MOD_ASSIGN = 100;
	public static readonly LSHIFT_ASSIGN = 101;
	public static readonly RSHIFT_ASSIGN = 102;
	public static readonly URSHIFT_ASSIGN = 103;
	public static readonly ARROW = 104;
	public static readonly COLONCOLON = 105;
	public static readonly AT = 106;
	public static readonly ELLIPSIS = 107;
	public static readonly WS = 108;
	public static readonly COMMENT = 109;
	public static readonly LINE_COMMENT = 110;
	public static readonly IDENTIFIER = 111;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_typeParameters = 8;
	public static readonly RULE_typeParameter = 9;
	public static readonly RULE_typeBound = 10;
	public static readonly RULE_enumDeclaration = 11;
	public static readonly RULE_enumConstants = 12;
	public static readonly RULE_enumConstant = 13;
	public static readonly RULE_enumBodyDeclarations = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_classBody = 16;
	public static readonly RULE_interfaceBody = 17;
	public static readonly RULE_classBodyDeclaration = 18;
	public static readonly RULE_memberDeclaration = 19;
	public static readonly RULE_methodDeclaration = 20;
	public static readonly RULE_methodBody = 21;
	public static readonly RULE_typeTypeOrVoid = 22;
	public static readonly RULE_genericMethodDeclaration = 23;
	public static readonly RULE_genericConstructorDeclaration = 24;
	public static readonly RULE_constructorDeclaration = 25;
	public static readonly RULE_fieldDeclaration = 26;
	public static readonly RULE_interfaceBodyDeclaration = 27;
	public static readonly RULE_interfaceMemberDeclaration = 28;
	public static readonly RULE_constDeclaration = 29;
	public static readonly RULE_constantDeclarator = 30;
	public static readonly RULE_interfaceMethodDeclaration = 31;
	public static readonly RULE_interfaceMethodModifier = 32;
	public static readonly RULE_genericInterfaceMethodDeclaration = 33;
	public static readonly RULE_variableDeclarators = 34;
	public static readonly RULE_variableDeclarator = 35;
	public static readonly RULE_variableDeclaratorId = 36;
	public static readonly RULE_variableInitializer = 37;
	public static readonly RULE_arrayInitializer = 38;
	public static readonly RULE_classOrInterfaceType = 39;
	public static readonly RULE_typeArgument = 40;
	public static readonly RULE_qualifiedNameList = 41;
	public static readonly RULE_formalParameters = 42;
	public static readonly RULE_formalParameterList = 43;
	public static readonly RULE_formalParameter = 44;
	public static readonly RULE_lastFormalParameter = 45;
	public static readonly RULE_qualifiedName = 46;
	public static readonly RULE_literal = 47;
	public static readonly RULE_integerLiteral = 48;
	public static readonly RULE_floatLiteral = 49;
	public static readonly RULE_annotation = 50;
	public static readonly RULE_elementValuePairs = 51;
	public static readonly RULE_elementValuePair = 52;
	public static readonly RULE_elementValue = 53;
	public static readonly RULE_elementValueArrayInitializer = 54;
	public static readonly RULE_annotationTypeDeclaration = 55;
	public static readonly RULE_annotationTypeBody = 56;
	public static readonly RULE_annotationTypeElementDeclaration = 57;
	public static readonly RULE_annotationTypeElementRest = 58;
	public static readonly RULE_annotationMethodOrConstantRest = 59;
	public static readonly RULE_annotationMethodRest = 60;
	public static readonly RULE_annotationConstantRest = 61;
	public static readonly RULE_defaultValue = 62;
	public static readonly RULE_block = 63;
	public static readonly RULE_blockStatement = 64;
	public static readonly RULE_localVariableDeclaration = 65;
	public static readonly RULE_localTypeDeclaration = 66;
	public static readonly RULE_statement = 67;
	public static readonly RULE_catchClause = 68;
	public static readonly RULE_catchType = 69;
	public static readonly RULE_finallyBlock = 70;
	public static readonly RULE_resourceSpecification = 71;
	public static readonly RULE_resources = 72;
	public static readonly RULE_resource = 73;
	public static readonly RULE_switchBlockStatementGroup = 74;
	public static readonly RULE_switchLabel = 75;
	public static readonly RULE_forControl = 76;
	public static readonly RULE_forInit = 77;
	public static readonly RULE_enhancedForControl = 78;
	public static readonly RULE_parExpression = 79;
	public static readonly RULE_expressionList = 80;
	public static readonly RULE_methodCall = 81;
	public static readonly RULE_expression = 82;
	public static readonly RULE_lambdaExpression = 83;
	public static readonly RULE_lambdaParameters = 84;
	public static readonly RULE_lambdaBody = 85;
	public static readonly RULE_primary = 86;
	public static readonly RULE_classType = 87;
	public static readonly RULE_creator = 88;
	public static readonly RULE_createdName = 89;
	public static readonly RULE_innerCreator = 90;
	public static readonly RULE_arrayCreatorRest = 91;
	public static readonly RULE_classCreatorRest = 92;
	public static readonly RULE_explicitGenericInvocation = 93;
	public static readonly RULE_typeArgumentsOrDiamond = 94;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 95;
	public static readonly RULE_nonWildcardTypeArguments = 96;
	public static readonly RULE_typeList = 97;
	public static readonly RULE_typeType = 98;
	public static readonly RULE_primitiveType = 99;
	public static readonly RULE_typeArguments = 100;
	public static readonly RULE_superSuffix = 101;
	public static readonly RULE_explicitGenericInvocationSuffix = 102;
	public static readonly RULE_arguments = 103;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants", 
		"enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody", 
		"interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration", 
		"methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration", 
		"constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDeclaration", "constDeclaration", "constantDeclarator", 
		"interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "formalParameterList", "formalParameter", "lastFormalParameter", 
		"qualifiedName", "literal", "integerLiteral", "floatLiteral", "annotation", 
		"elementValuePairs", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration", 
		"annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest", 
		"annotationConstantRest", "defaultValue", "block", "blockStatement", "localVariableDeclaration", 
		"localTypeDeclaration", "statement", "catchClause", "catchType", "finallyBlock", 
		"resourceSpecification", "resources", "resource", "switchBlockStatementGroup", 
		"switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression", 
		"expressionList", "methodCall", "expression", "lambdaExpression", "lambdaParameters", 
		"lambdaBody", "primary", "classType", "creator", "createdName", "innerCreator", 
		"arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond", 
		"nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList", 
		"typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix", 
		"arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
		"','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", 
		"'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", 
		"'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
		"'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", 
		"'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", 
		"OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", 
		"GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", 
		"BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
		"DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
		"WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Java7Parser._LITERAL_NAMES, Java7Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Java7Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Java7Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Java7Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Java7Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Java7Parser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Java7Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 208;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.IMPORT) {
				{
				{
				this.state = 211;
				this.importDeclaration();
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.ENUM) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)))) !== 0) || _la === Java7Parser.SEMI || _la === Java7Parser.AT) {
				{
				{
				this.state = 217;
				this.typeDeclaration();
				}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 223;
			this.match(Java7Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Java7Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.AT) {
				{
				{
				this.state = 225;
				this.annotation();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 231;
			this.match(Java7Parser.PACKAGE);
			this.state = 232;
			this.qualifiedName();
			this.state = 233;
			this.match(Java7Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Java7Parser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(Java7Parser.IMPORT);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.STATIC) {
				{
				this.state = 236;
				this.match(Java7Parser.STATIC);
				}
			}

			this.state = 239;
			this.qualifiedName();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.DOT) {
				{
				this.state = 240;
				this.match(Java7Parser.DOT);
				this.state = 241;
				this.match(Java7Parser.MUL);
				}
			}

			this.state = 244;
			this.match(Java7Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Java7Parser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.ABSTRACT:
			case Java7Parser.CLASS:
			case Java7Parser.ENUM:
			case Java7Parser.FINAL:
			case Java7Parser.INTERFACE:
			case Java7Parser.PRIVATE:
			case Java7Parser.PROTECTED:
			case Java7Parser.PUBLIC:
			case Java7Parser.STATIC:
			case Java7Parser.STRICTFP:
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 246;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 256;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.CLASS:
					{
					this.state = 252;
					this.classDeclaration();
					}
					break;
				case Java7Parser.ENUM:
					{
					this.state = 253;
					this.enumDeclaration();
					}
					break;
				case Java7Parser.INTERFACE:
					{
					this.state = 254;
					this.interfaceDeclaration();
					}
					break;
				case Java7Parser.AT:
					{
					this.state = 255;
					this.annotationTypeDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Java7Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.match(Java7Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Java7Parser.RULE_modifier);
		try {
			this.state = 266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.ABSTRACT:
			case Java7Parser.FINAL:
			case Java7Parser.PRIVATE:
			case Java7Parser.PROTECTED:
			case Java7Parser.PUBLIC:
			case Java7Parser.STATIC:
			case Java7Parser.STRICTFP:
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.classOrInterfaceModifier();
				}
				break;
			case Java7Parser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 262;
				this.match(Java7Parser.NATIVE);
				}
				break;
			case Java7Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 263;
				this.match(Java7Parser.SYNCHRONIZED);
				}
				break;
			case Java7Parser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 264;
				this.match(Java7Parser.TRANSIENT);
				}
				break;
			case Java7Parser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 265;
				this.match(Java7Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Java7Parser.RULE_classOrInterfaceModifier);
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.annotation();
				}
				break;
			case Java7Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.match(Java7Parser.PUBLIC);
				}
				break;
			case Java7Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 270;
				this.match(Java7Parser.PROTECTED);
				}
				break;
			case Java7Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 271;
				this.match(Java7Parser.PRIVATE);
				}
				break;
			case Java7Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 272;
				this.match(Java7Parser.STATIC);
				}
				break;
			case Java7Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 273;
				this.match(Java7Parser.ABSTRACT);
				}
				break;
			case Java7Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 274;
				this.match(Java7Parser.FINAL);
				}
				break;
			case Java7Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 275;
				this.match(Java7Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Java7Parser.RULE_variableModifier);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.match(Java7Parser.FINAL);
				}
				break;
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Java7Parser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(Java7Parser.CLASS);
			this.state = 283;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LT) {
				{
				this.state = 284;
				this.typeParameters();
				}
			}

			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.EXTENDS) {
				{
				this.state = 287;
				this.match(Java7Parser.EXTENDS);
				this.state = 288;
				this.typeType();
				}
			}

			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.IMPLEMENTS) {
				{
				this.state = 291;
				this.match(Java7Parser.IMPLEMENTS);
				this.state = 292;
				this.typeList();
				}
			}

			this.state = 295;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Java7Parser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(Java7Parser.LT);
			this.state = 298;
			this.typeParameter();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 299;
				this.match(Java7Parser.COMMA);
				this.state = 300;
				this.typeParameter();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 306;
			this.match(Java7Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Java7Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.AT) {
				{
				{
				this.state = 308;
				this.annotation();
				}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 314;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.EXTENDS) {
				{
				this.state = 315;
				this.match(Java7Parser.EXTENDS);
				this.state = 316;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Java7Parser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.typeType();
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.BITAND) {
				{
				{
				this.state = 320;
				this.match(Java7Parser.BITAND);
				this.state = 321;
				this.typeType();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Java7Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(Java7Parser.ENUM);
			this.state = 328;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.IMPLEMENTS) {
				{
				this.state = 329;
				this.match(Java7Parser.IMPLEMENTS);
				this.state = 330;
				this.typeList();
				}
			}

			this.state = 333;
			this.match(Java7Parser.LBRACE);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				this.state = 334;
				this.enumConstants();
				}
			}

			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.COMMA) {
				{
				this.state = 337;
				this.match(Java7Parser.COMMA);
				}
			}

			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.SEMI) {
				{
				this.state = 340;
				this.enumBodyDeclarations();
				}
			}

			this.state = 343;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Java7Parser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.enumConstant();
			this.state = 350;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 346;
					this.match(Java7Parser.COMMA);
					this.state = 347;
					this.enumConstant();
					}
					}
				}
				this.state = 352;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Java7Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.AT) {
				{
				{
				this.state = 353;
				this.annotation();
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 359;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LPAREN) {
				{
				this.state = 360;
				this.arguments();
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LBRACE) {
				{
				this.state = 363;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Java7Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(Java7Parser.SEMI);
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.ENUM) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.TRANSIENT - 33)) | (1 << (Java7Parser.VOID - 33)) | (1 << (Java7Parser.VOLATILE - 33)) | (1 << (Java7Parser.LBRACE - 33)))) !== 0) || _la === Java7Parser.SEMI || _la === Java7Parser.LT || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				{
				this.state = 367;
				this.classBodyDeclaration();
				}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Java7Parser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(Java7Parser.INTERFACE);
			this.state = 374;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LT) {
				{
				this.state = 375;
				this.typeParameters();
				}
			}

			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.EXTENDS) {
				{
				this.state = 378;
				this.match(Java7Parser.EXTENDS);
				this.state = 379;
				this.typeList();
				}
			}

			this.state = 382;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Java7Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(Java7Parser.LBRACE);
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.ENUM) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.TRANSIENT - 33)) | (1 << (Java7Parser.VOID - 33)) | (1 << (Java7Parser.VOLATILE - 33)) | (1 << (Java7Parser.LBRACE - 33)))) !== 0) || _la === Java7Parser.SEMI || _la === Java7Parser.LT || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				{
				this.state = 385;
				this.classBodyDeclaration();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 391;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Java7Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(Java7Parser.LBRACE);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.DEFAULT) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.ENUM) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.TRANSIENT - 33)) | (1 << (Java7Parser.VOID - 33)) | (1 << (Java7Parser.VOLATILE - 33)))) !== 0) || _la === Java7Parser.SEMI || _la === Java7Parser.LT || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				{
				this.state = 394;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 400;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Java7Parser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.STATIC) {
					{
					this.state = 403;
					this.match(Java7Parser.STATIC);
					}
				}

				this.state = 406;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 407;
						this.modifier();
						}
						}
					}
					this.state = 412;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 413;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Java7Parser.RULE_memberDeclaration);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 418;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 419;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 420;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 421;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 422;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 423;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 424;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Java7Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.typeTypeOrVoid();
			this.state = 428;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 429;
			this.formalParameters();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.LBRACK) {
				{
				{
				this.state = 430;
				this.match(Java7Parser.LBRACK);
				this.state = 431;
				this.match(Java7Parser.RBRACK);
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.THROWS) {
				{
				this.state = 437;
				this.match(Java7Parser.THROWS);
				this.state = 438;
				this.qualifiedNameList();
				}
			}

			this.state = 441;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Java7Parser.RULE_methodBody);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.block();
				}
				break;
			case Java7Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 444;
				this.match(Java7Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Java7Parser.RULE_typeTypeOrVoid);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.typeType();
				}
				break;
			case Java7Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.match(Java7Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Java7Parser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.typeParameters();
			this.state = 452;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Java7Parser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.typeParameters();
			this.state = 455;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Java7Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 458;
			this.formalParameters();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.THROWS) {
				{
				this.state = 459;
				this.match(Java7Parser.THROWS);
				this.state = 460;
				this.qualifiedNameList();
				}
			}

			this.state = 463;
			_localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Java7Parser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.typeType();
			this.state = 466;
			this.variableDeclarators();
			this.state = 467;
			this.match(Java7Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Java7Parser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.ABSTRACT:
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.CLASS:
			case Java7Parser.DEFAULT:
			case Java7Parser.DOUBLE:
			case Java7Parser.ENUM:
			case Java7Parser.FINAL:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.INTERFACE:
			case Java7Parser.LONG:
			case Java7Parser.NATIVE:
			case Java7Parser.PRIVATE:
			case Java7Parser.PROTECTED:
			case Java7Parser.PUBLIC:
			case Java7Parser.SHORT:
			case Java7Parser.STATIC:
			case Java7Parser.STRICTFP:
			case Java7Parser.SYNCHRONIZED:
			case Java7Parser.TRANSIENT:
			case Java7Parser.VOID:
			case Java7Parser.VOLATILE:
			case Java7Parser.LT:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 469;
						this.modifier();
						}
						}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 475;
				this.interfaceMemberDeclaration();
				}
				break;
			case Java7Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(Java7Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Java7Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 482;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 483;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 484;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 485;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Java7Parser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.typeType();
			this.state = 489;
			this.constantDeclarator();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 490;
				this.match(Java7Parser.COMMA);
				this.state = 491;
				this.constantDeclarator();
				}
				}
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 497;
			this.match(Java7Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Java7Parser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.LBRACK) {
				{
				{
				this.state = 500;
				this.match(Java7Parser.LBRACK);
				this.state = 501;
				this.match(Java7Parser.RBRACK);
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
			this.match(Java7Parser.ASSIGN);
			this.state = 508;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Java7Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 526;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
			case Java7Parser.VOID:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				{
				this.state = 516;
				this.typeTypeOrVoid();
				}
				break;
			case Java7Parser.LT:
				{
				this.state = 517;
				this.typeParameters();
				this.state = 521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 518;
						this.annotation();
						}
						}
					}
					this.state = 523;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 524;
				this.typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 528;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 529;
			this.formalParameters();
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.LBRACK) {
				{
				{
				this.state = 530;
				this.match(Java7Parser.LBRACK);
				this.state = 531;
				this.match(Java7Parser.RBRACK);
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.THROWS) {
				{
				this.state = 537;
				this.match(Java7Parser.THROWS);
				this.state = 538;
				this.qualifiedNameList();
				}
			}

			this.state = 541;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Java7Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.annotation();
				}
				break;
			case Java7Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.match(Java7Parser.PUBLIC);
				}
				break;
			case Java7Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 545;
				this.match(Java7Parser.ABSTRACT);
				}
				break;
			case Java7Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 546;
				this.match(Java7Parser.DEFAULT);
				}
				break;
			case Java7Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 547;
				this.match(Java7Parser.STATIC);
				}
				break;
			case Java7Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 548;
				this.match(Java7Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Java7Parser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.typeParameters();
			this.state = 552;
			this.interfaceMethodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Java7Parser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.variableDeclarator();
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 555;
				this.match(Java7Parser.COMMA);
				this.state = 556;
				this.variableDeclarator();
				}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Java7Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.variableDeclaratorId();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.ASSIGN) {
				{
				this.state = 563;
				this.match(Java7Parser.ASSIGN);
				this.state = 564;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Java7Parser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.LBRACK) {
				{
				{
				this.state = 568;
				this.match(Java7Parser.LBRACK);
				this.state = 569;
				this.match(Java7Parser.RBRACK);
				}
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Java7Parser.RULE_variableInitializer);
		try {
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.arrayInitializer();
				}
				break;
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.NEW:
			case Java7Parser.SHORT:
			case Java7Parser.SUPER:
			case Java7Parser.THIS:
			case Java7Parser.VOID:
			case Java7Parser.DECIMAL_LITERAL:
			case Java7Parser.HEX_LITERAL:
			case Java7Parser.OCT_LITERAL:
			case Java7Parser.BINARY_LITERAL:
			case Java7Parser.FLOAT_LITERAL:
			case Java7Parser.HEX_FLOAT_LITERAL:
			case Java7Parser.BOOL_LITERAL:
			case Java7Parser.CHAR_LITERAL:
			case Java7Parser.STRING_LITERAL:
			case Java7Parser.NULL_LITERAL:
			case Java7Parser.LPAREN:
			case Java7Parser.LT:
			case Java7Parser.BANG:
			case Java7Parser.TILDE:
			case Java7Parser.INC:
			case Java7Parser.DEC:
			case Java7Parser.ADD:
			case Java7Parser.SUB:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 576;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Java7Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(Java7Parser.LBRACE);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)) | (1 << (Java7Parser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				this.state = 580;
				this.variableInitializer();
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 581;
						this.match(Java7Parser.COMMA);
						this.state = 582;
						this.variableInitializer();
						}
						}
					}
					this.state = 587;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.COMMA) {
					{
					this.state = 588;
					this.match(Java7Parser.COMMA);
					}
				}

				}
			}

			this.state = 593;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Java7Parser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 596;
				this.typeArguments();
				}
				break;
			}
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.match(Java7Parser.DOT);
					this.state = 600;
					this.match(Java7Parser.IDENTIFIER);
					this.state = 602;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
					case 1:
						{
						this.state = 601;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Java7Parser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 609;
				this.typeType();
				}
				break;
			case Java7Parser.QUESTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 610;
				this.match(Java7Parser.QUESTION);
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.EXTENDS || _la === Java7Parser.SUPER) {
					{
					this.state = 611;
					_la = this._input.LA(1);
					if (!(_la === Java7Parser.EXTENDS || _la === Java7Parser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 612;
					this.typeType();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Java7Parser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.qualifiedName();
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 618;
				this.match(Java7Parser.COMMA);
				this.state = 619;
				this.qualifiedName();
				}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Java7Parser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(Java7Parser.LPAREN);
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG))) !== 0) || _la === Java7Parser.SHORT || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				this.state = 626;
				this.formalParameterList();
				}
			}

			this.state = 629;
			this.match(Java7Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Java7Parser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				this.formalParameter();
				this.state = 636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 632;
						this.match(Java7Parser.COMMA);
						this.state = 633;
						this.formalParameter();
						}
						}
					}
					this.state = 638;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.COMMA) {
					{
					this.state = 639;
					this.match(Java7Parser.COMMA);
					this.state = 640;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 643;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Java7Parser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 646;
					this.variableModifier();
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 652;
			this.typeType();
			this.state = 653;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Java7Parser.RULE_lastFormalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 655;
					this.variableModifier();
					}
					}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 661;
			this.typeType();
			this.state = 662;
			this.match(Java7Parser.ELLIPSIS);
			this.state = 663;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Java7Parser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 666;
					this.match(Java7Parser.DOT);
					this.state = 667;
					this.match(Java7Parser.IDENTIFIER);
					}
					}
				}
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Java7Parser.RULE_literal);
		try {
			this.state = 679;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.DECIMAL_LITERAL:
			case Java7Parser.HEX_LITERAL:
			case Java7Parser.OCT_LITERAL:
			case Java7Parser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				this.integerLiteral();
				}
				break;
			case Java7Parser.FLOAT_LITERAL:
			case Java7Parser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.floatLiteral();
				}
				break;
			case Java7Parser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 675;
				this.match(Java7Parser.CHAR_LITERAL);
				}
				break;
			case Java7Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 676;
				this.match(Java7Parser.STRING_LITERAL);
				}
				break;
			case Java7Parser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 677;
				this.match(Java7Parser.BOOL_LITERAL);
				}
				break;
			case Java7Parser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 678;
				this.match(Java7Parser.NULL_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Java7Parser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Java7Parser.DECIMAL_LITERAL - 51)) | (1 << (Java7Parser.HEX_LITERAL - 51)) | (1 << (Java7Parser.OCT_LITERAL - 51)) | (1 << (Java7Parser.BINARY_LITERAL - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Java7Parser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			_la = this._input.LA(1);
			if (!(_la === Java7Parser.FLOAT_LITERAL || _la === Java7Parser.HEX_FLOAT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Java7Parser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(Java7Parser.AT);
			this.state = 686;
			this.qualifiedName();
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LPAREN) {
				{
				this.state = 687;
				this.match(Java7Parser.LPAREN);
				this.state = 690;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 688;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 689;
					this.elementValue();
					}
					break;
				}
				this.state = 692;
				this.match(Java7Parser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Java7Parser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.elementValuePair();
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 696;
				this.match(Java7Parser.COMMA);
				this.state = 697;
				this.elementValuePair();
				}
				}
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Java7Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 704;
			this.match(Java7Parser.ASSIGN);
			this.state = 705;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Java7Parser.RULE_elementValue);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 707;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 708;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 709;
				this.elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Java7Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(Java7Parser.LBRACE);
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)) | (1 << (Java7Parser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				this.state = 713;
				this.elementValue();
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 714;
						this.match(Java7Parser.COMMA);
						this.state = 715;
						this.elementValue();
						}
						}
					}
					this.state = 720;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				}
			}

			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.COMMA) {
				{
				this.state = 723;
				this.match(Java7Parser.COMMA);
				}
			}

			this.state = 726;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Java7Parser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(Java7Parser.AT);
			this.state = 729;
			this.match(Java7Parser.INTERFACE);
			this.state = 730;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 731;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Java7Parser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(Java7Parser.LBRACE);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.ENUM) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.TRANSIENT - 33)) | (1 << (Java7Parser.VOLATILE - 33)))) !== 0) || _la === Java7Parser.SEMI || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				{
				this.state = 734;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 740;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Java7Parser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 750;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.ABSTRACT:
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.CLASS:
			case Java7Parser.DOUBLE:
			case Java7Parser.ENUM:
			case Java7Parser.FINAL:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.INTERFACE:
			case Java7Parser.LONG:
			case Java7Parser.NATIVE:
			case Java7Parser.PRIVATE:
			case Java7Parser.PROTECTED:
			case Java7Parser.PUBLIC:
			case Java7Parser.SHORT:
			case Java7Parser.STATIC:
			case Java7Parser.STRICTFP:
			case Java7Parser.SYNCHRONIZED:
			case Java7Parser.TRANSIENT:
			case Java7Parser.VOLATILE:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 742;
						this.modifier();
						}
						}
					}
					this.state = 747;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 748;
				this.annotationTypeElementRest();
				}
				break;
			case Java7Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 749;
				this.match(Java7Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Java7Parser.RULE_annotationTypeElementRest);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.typeType();
				this.state = 753;
				this.annotationMethodOrConstantRest();
				this.state = 754;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.classDeclaration();
				this.state = 758;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.match(Java7Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 760;
				this.interfaceDeclaration();
				this.state = 762;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 761;
					this.match(Java7Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 764;
				this.enumDeclaration();
				this.state = 766;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 765;
					this.match(Java7Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 768;
				this.annotationTypeDeclaration();
				this.state = 770;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 769;
					this.match(Java7Parser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Java7Parser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 775;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Java7Parser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 779;
			this.match(Java7Parser.LPAREN);
			this.state = 780;
			this.match(Java7Parser.RPAREN);
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.DEFAULT) {
				{
				this.state = 781;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Java7Parser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Java7Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(Java7Parser.DEFAULT);
			this.state = 787;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Java7Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(Java7Parser.LBRACE);
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.ASSERT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BREAK) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.CONTINUE) | (1 << Java7Parser.DO) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.FOR) | (1 << Java7Parser.IF) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.RETURN - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SUPER - 33)) | (1 << (Java7Parser.SWITCH - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.THIS - 33)) | (1 << (Java7Parser.THROW - 33)) | (1 << (Java7Parser.TRY - 33)) | (1 << (Java7Parser.VOID - 33)) | (1 << (Java7Parser.WHILE - 33)) | (1 << (Java7Parser.DECIMAL_LITERAL - 33)) | (1 << (Java7Parser.HEX_LITERAL - 33)) | (1 << (Java7Parser.OCT_LITERAL - 33)) | (1 << (Java7Parser.BINARY_LITERAL - 33)) | (1 << (Java7Parser.FLOAT_LITERAL - 33)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 33)) | (1 << (Java7Parser.BOOL_LITERAL - 33)) | (1 << (Java7Parser.CHAR_LITERAL - 33)) | (1 << (Java7Parser.STRING_LITERAL - 33)) | (1 << (Java7Parser.NULL_LITERAL - 33)) | (1 << (Java7Parser.LPAREN - 33)) | (1 << (Java7Parser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Java7Parser.SEMI - 67)) | (1 << (Java7Parser.LT - 67)) | (1 << (Java7Parser.BANG - 67)) | (1 << (Java7Parser.TILDE - 67)) | (1 << (Java7Parser.INC - 67)) | (1 << (Java7Parser.DEC - 67)) | (1 << (Java7Parser.ADD - 67)) | (1 << (Java7Parser.SUB - 67)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				{
				this.state = 790;
				this.blockStatement();
				}
				}
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 796;
			this.match(Java7Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Java7Parser.RULE_blockStatement);
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 798;
				this.localVariableDeclaration();
				this.state = 799;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 801;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 802;
				this.localTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Java7Parser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 805;
					this.variableModifier();
					}
					}
				}
				this.state = 810;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 811;
			this.typeType();
			this.state = 812;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Java7Parser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.state = 825;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.ABSTRACT:
			case Java7Parser.CLASS:
			case Java7Parser.FINAL:
			case Java7Parser.INTERFACE:
			case Java7Parser.PRIVATE:
			case Java7Parser.PROTECTED:
			case Java7Parser.PUBLIC:
			case Java7Parser.STATIC:
			case Java7Parser.STRICTFP:
			case Java7Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.ABSTRACT || _la === Java7Parser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)))) !== 0) || _la === Java7Parser.AT) {
					{
					{
					this.state = 814;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 819;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 822;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.CLASS:
					{
					this.state = 820;
					this.classDeclaration();
					}
					break;
				case Java7Parser.INTERFACE:
					{
					this.state = 821;
					this.interfaceDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Java7Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 824;
				this.match(Java7Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Java7Parser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.match(Java7Parser.ASSERT);
				this.state = 829;
				this.expression(0);
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.COLON) {
					{
					this.state = 830;
					this.match(Java7Parser.COLON);
					this.state = 831;
					this.expression(0);
					}
				}

				this.state = 834;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 836;
				this.match(Java7Parser.IF);
				this.state = 837;
				this.parExpression();
				this.state = 838;
				this.statement();
				this.state = 841;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 839;
					this.match(Java7Parser.ELSE);
					this.state = 840;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 843;
				this.match(Java7Parser.FOR);
				this.state = 844;
				this.match(Java7Parser.LPAREN);
				this.state = 845;
				this.forControl();
				this.state = 846;
				this.match(Java7Parser.RPAREN);
				this.state = 847;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 849;
				this.match(Java7Parser.WHILE);
				this.state = 850;
				this.parExpression();
				this.state = 851;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 853;
				this.match(Java7Parser.DO);
				this.state = 854;
				this.statement();
				this.state = 855;
				this.match(Java7Parser.WHILE);
				this.state = 856;
				this.parExpression();
				this.state = 857;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 859;
				this.match(Java7Parser.TRY);
				this.state = 860;
				this.block();
				this.state = 870;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.CATCH:
					{
					this.state = 862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 861;
						this.catchClause();
						}
						}
						this.state = 864;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === Java7Parser.CATCH);
					this.state = 867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Java7Parser.FINALLY) {
						{
						this.state = 866;
						this.finallyBlock();
						}
					}

					}
					break;
				case Java7Parser.FINALLY:
					{
					this.state = 869;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 872;
				this.match(Java7Parser.TRY);
				this.state = 873;
				this.resourceSpecification();
				this.state = 874;
				this.block();
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.CATCH) {
					{
					{
					this.state = 875;
					this.catchClause();
					}
					}
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.FINALLY) {
					{
					this.state = 881;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 884;
				this.match(Java7Parser.SWITCH);
				this.state = 885;
				this.parExpression();
				this.state = 886;
				this.match(Java7Parser.LBRACE);
				this.state = 890;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 887;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 892;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.CASE || _la === Java7Parser.DEFAULT) {
					{
					{
					this.state = 893;
					this.switchLabel();
					}
					}
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 899;
				this.match(Java7Parser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 901;
				this.match(Java7Parser.SYNCHRONIZED);
				this.state = 902;
				this.parExpression();
				this.state = 903;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 905;
				this.match(Java7Parser.RETURN);
				this.state = 907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 906;
					this.expression(0);
					}
				}

				this.state = 909;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 910;
				this.match(Java7Parser.THROW);
				this.state = 911;
				this.expression(0);
				this.state = 912;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 914;
				this.match(Java7Parser.BREAK);
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.IDENTIFIER) {
					{
					this.state = 915;
					this.match(Java7Parser.IDENTIFIER);
					}
				}

				this.state = 918;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 919;
				this.match(Java7Parser.CONTINUE);
				this.state = 921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.IDENTIFIER) {
					{
					this.state = 920;
					this.match(Java7Parser.IDENTIFIER);
					}
				}

				this.state = 923;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 924;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 925;
				_localctx._statementExpression = this.expression(0);
				this.state = 926;
				this.match(Java7Parser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 928;
				_localctx._identifierLabel = this.match(Java7Parser.IDENTIFIER);
				this.state = 929;
				this.match(Java7Parser.COLON);
				this.state = 930;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Java7Parser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.match(Java7Parser.CATCH);
			this.state = 934;
			this.match(Java7Parser.LPAREN);
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.FINAL || _la === Java7Parser.AT) {
				{
				{
				this.state = 935;
				this.variableModifier();
				}
				}
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 941;
			this.catchType();
			this.state = 942;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 943;
			this.match(Java7Parser.RPAREN);
			this.state = 944;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Java7Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.qualifiedName();
			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.BITOR) {
				{
				{
				this.state = 947;
				this.match(Java7Parser.BITOR);
				this.state = 948;
				this.qualifiedName();
				}
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Java7Parser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(Java7Parser.FINALLY);
			this.state = 955;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Java7Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 957;
			this.match(Java7Parser.LPAREN);
			this.state = 958;
			this.resources();
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.SEMI) {
				{
				this.state = 959;
				this.match(Java7Parser.SEMI);
				}
			}

			this.state = 962;
			this.match(Java7Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Java7Parser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.resource();
			this.state = 969;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 965;
					this.match(Java7Parser.SEMI);
					this.state = 966;
					this.resource();
					}
					}
				}
				this.state = 971;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Java7Parser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.FINAL || _la === Java7Parser.AT) {
				{
				{
				this.state = 972;
				this.variableModifier();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 978;
			this.classOrInterfaceType();
			this.state = 979;
			this.variableDeclaratorId();
			this.state = 980;
			this.match(Java7Parser.ASSIGN);
			this.state = 981;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Java7Parser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 983;
				this.switchLabel();
				}
				}
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Java7Parser.CASE || _la === Java7Parser.DEFAULT);
			this.state = 989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 988;
				this.blockStatement();
				}
				}
				this.state = 991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.ABSTRACT) | (1 << Java7Parser.ASSERT) | (1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BREAK) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.CLASS) | (1 << Java7Parser.CONTINUE) | (1 << Java7Parser.DO) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.FOR) | (1 << Java7Parser.IF) | (1 << Java7Parser.INT) | (1 << Java7Parser.INTERFACE) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java7Parser.PRIVATE - 33)) | (1 << (Java7Parser.PROTECTED - 33)) | (1 << (Java7Parser.PUBLIC - 33)) | (1 << (Java7Parser.RETURN - 33)) | (1 << (Java7Parser.SHORT - 33)) | (1 << (Java7Parser.STATIC - 33)) | (1 << (Java7Parser.STRICTFP - 33)) | (1 << (Java7Parser.SUPER - 33)) | (1 << (Java7Parser.SWITCH - 33)) | (1 << (Java7Parser.SYNCHRONIZED - 33)) | (1 << (Java7Parser.THIS - 33)) | (1 << (Java7Parser.THROW - 33)) | (1 << (Java7Parser.TRY - 33)) | (1 << (Java7Parser.VOID - 33)) | (1 << (Java7Parser.WHILE - 33)) | (1 << (Java7Parser.DECIMAL_LITERAL - 33)) | (1 << (Java7Parser.HEX_LITERAL - 33)) | (1 << (Java7Parser.OCT_LITERAL - 33)) | (1 << (Java7Parser.BINARY_LITERAL - 33)) | (1 << (Java7Parser.FLOAT_LITERAL - 33)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 33)) | (1 << (Java7Parser.BOOL_LITERAL - 33)) | (1 << (Java7Parser.CHAR_LITERAL - 33)) | (1 << (Java7Parser.STRING_LITERAL - 33)) | (1 << (Java7Parser.NULL_LITERAL - 33)) | (1 << (Java7Parser.LPAREN - 33)) | (1 << (Java7Parser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Java7Parser.SEMI - 67)) | (1 << (Java7Parser.LT - 67)) | (1 << (Java7Parser.BANG - 67)) | (1 << (Java7Parser.TILDE - 67)) | (1 << (Java7Parser.INC - 67)) | (1 << (Java7Parser.DEC - 67)) | (1 << (Java7Parser.ADD - 67)) | (1 << (Java7Parser.SUB - 67)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Java7Parser.RULE_switchLabel);
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 993;
				this.match(Java7Parser.CASE);
				this.state = 996;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 994;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 995;
					_localctx._enumConstantName = this.match(Java7Parser.IDENTIFIER);
					}
					break;
				}
				this.state = 998;
				this.match(Java7Parser.COLON);
				}
				break;
			case Java7Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 999;
				this.match(Java7Parser.DEFAULT);
				this.state = 1000;
				this.match(Java7Parser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Java7Parser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1004;
					this.forInit();
					}
				}

				this.state = 1007;
				this.match(Java7Parser.SEMI);
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1008;
					this.expression(0);
					}
				}

				this.state = 1011;
				this.match(Java7Parser.SEMI);
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1012;
					_localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Java7Parser.RULE_forInit);
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Java7Parser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1021;
					this.variableModifier();
					}
					}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1027;
			this.typeType();
			this.state = 1028;
			this.variableDeclaratorId();
			this.state = 1029;
			this.match(Java7Parser.COLON);
			this.state = 1030;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Java7Parser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.match(Java7Parser.LPAREN);
			this.state = 1033;
			this.expression(0);
			this.state = 1034;
			this.match(Java7Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Java7Parser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.expression(0);
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 1037;
				this.match(Java7Parser.COMMA);
				this.state = 1038;
				this.expression(0);
				}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Java7Parser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1044;
				this.match(Java7Parser.IDENTIFIER);
				this.state = 1045;
				this.match(Java7Parser.LPAREN);
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1046;
					this.expressionList();
					}
				}

				this.state = 1049;
				this.match(Java7Parser.RPAREN);
				}
				break;
			case Java7Parser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1050;
				this.match(Java7Parser.THIS);
				this.state = 1051;
				this.match(Java7Parser.LPAREN);
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1052;
					this.expressionList();
					}
				}

				this.state = 1055;
				this.match(Java7Parser.RPAREN);
				}
				break;
			case Java7Parser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1056;
				this.match(Java7Parser.SUPER);
				this.state = 1057;
				this.match(Java7Parser.LPAREN);
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1058;
					this.expressionList();
					}
				}

				this.state = 1061;
				this.match(Java7Parser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, Java7Parser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1066;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 1067;
				this.match(Java7Parser.NEW);
				this.state = 1068;
				this.creator();
				}
				break;

			case 4:
				{
				this.state = 1069;
				this.match(Java7Parser.LPAREN);
				this.state = 1070;
				this.typeType();
				this.state = 1071;
				this.match(Java7Parser.RPAREN);
				this.state = 1072;
				this.expression(21);
				}
				break;

			case 5:
				{
				this.state = 1074;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (Java7Parser.INC - 83)) | (1 << (Java7Parser.DEC - 83)) | (1 << (Java7Parser.ADD - 83)) | (1 << (Java7Parser.SUB - 83)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1075;
				this.expression(19);
				}
				break;

			case 6:
				{
				this.state = 1076;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === Java7Parser.BANG || _la === Java7Parser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1077;
				this.expression(18);
				}
				break;

			case 7:
				{
				this.state = 1078;
				this.lambdaExpression();
				}
				break;

			case 8:
				{
				this.state = 1079;
				this.typeType();
				this.state = 1080;
				this.match(Java7Parser.COLONCOLON);
				this.state = 1086;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.LT:
				case Java7Parser.IDENTIFIER:
					{
					this.state = 1082;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Java7Parser.LT) {
						{
						this.state = 1081;
						this.typeArguments();
						}
					}

					this.state = 1084;
					this.match(Java7Parser.IDENTIFIER);
					}
					break;
				case Java7Parser.NEW:
					{
					this.state = 1085;
					this.match(Java7Parser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				{
				this.state = 1088;
				this.classType();
				this.state = 1089;
				this.match(Java7Parser.COLONCOLON);
				this.state = 1091;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.LT) {
					{
					this.state = 1090;
					this.typeArguments();
					}
				}

				this.state = 1093;
				this.match(Java7Parser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1177;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1175;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1097;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 1098;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (Java7Parser.MUL - 87)) | (1 << (Java7Parser.DIV - 87)) | (1 << (Java7Parser.MOD - 87)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1099;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1100;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 1101;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === Java7Parser.ADD || _la === Java7Parser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1102;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1103;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 1111;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
						case 1:
							{
							this.state = 1104;
							this.match(Java7Parser.LT);
							this.state = 1105;
							this.match(Java7Parser.LT);
							}
							break;

						case 2:
							{
							this.state = 1106;
							this.match(Java7Parser.GT);
							this.state = 1107;
							this.match(Java7Parser.GT);
							this.state = 1108;
							this.match(Java7Parser.GT);
							}
							break;

						case 3:
							{
							this.state = 1109;
							this.match(Java7Parser.GT);
							this.state = 1110;
							this.match(Java7Parser.GT);
							}
							break;
						}
						this.state = 1113;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1114;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 1115;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (Java7Parser.GT - 71)) | (1 << (Java7Parser.LT - 71)) | (1 << (Java7Parser.LE - 71)) | (1 << (Java7Parser.GE - 71)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1116;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1117;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 1118;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === Java7Parser.EQUAL || _la === Java7Parser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1119;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1120;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 1121;
						_localctx._bop = this.match(Java7Parser.BITAND);
						this.state = 1122;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1123;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 1124;
						_localctx._bop = this.match(Java7Parser.CARET);
						this.state = 1125;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1126;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 1127;
						_localctx._bop = this.match(Java7Parser.BITOR);
						this.state = 1128;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1129;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 1130;
						_localctx._bop = this.match(Java7Parser.AND);
						this.state = 1131;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1132;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 1133;
						_localctx._bop = this.match(Java7Parser.OR);
						this.state = 1134;
						this.expression(8);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1135;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1136;
						_localctx._bop = this.match(Java7Parser.QUESTION);
						this.state = 1137;
						this.expression(0);
						this.state = 1138;
						this.match(Java7Parser.COLON);
						this.state = 1139;
						this.expression(7);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1141;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1142;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Java7Parser.ASSIGN - 70)) | (1 << (Java7Parser.ADD_ASSIGN - 70)) | (1 << (Java7Parser.SUB_ASSIGN - 70)) | (1 << (Java7Parser.MUL_ASSIGN - 70)) | (1 << (Java7Parser.DIV_ASSIGN - 70)) | (1 << (Java7Parser.AND_ASSIGN - 70)) | (1 << (Java7Parser.OR_ASSIGN - 70)) | (1 << (Java7Parser.XOR_ASSIGN - 70)) | (1 << (Java7Parser.MOD_ASSIGN - 70)) | (1 << (Java7Parser.LSHIFT_ASSIGN - 70)))) !== 0) || _la === Java7Parser.RSHIFT_ASSIGN || _la === Java7Parser.URSHIFT_ASSIGN)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1143;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1144;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 1145;
						_localctx._bop = this.match(Java7Parser.DOT);
						this.state = 1157;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
						case 1:
							{
							this.state = 1146;
							this.match(Java7Parser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 1147;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1148;
							this.match(Java7Parser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1149;
							this.match(Java7Parser.NEW);
							this.state = 1151;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Java7Parser.LT) {
								{
								this.state = 1150;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1153;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1154;
							this.match(Java7Parser.SUPER);
							this.state = 1155;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1156;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1159;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 1160;
						this.match(Java7Parser.LBRACK);
						this.state = 1161;
						this.expression(0);
						this.state = 1162;
						this.match(Java7Parser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1164;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 1165;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === Java7Parser.INC || _la === Java7Parser.DEC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1166;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 1167;
						_localctx._bop = this.match(Java7Parser.INSTANCEOF);
						this.state = 1168;
						this.typeType();
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java7Parser.RULE_expression);
						this.state = 1169;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1170;
						this.match(Java7Parser.COLONCOLON);
						this.state = 1172;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Java7Parser.LT) {
							{
							this.state = 1171;
							this.typeArguments();
							}
						}

						this.state = 1174;
						this.match(Java7Parser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 1179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Java7Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1180;
			this.lambdaParameters();
			this.state = 1181;
			this.match(Java7Parser.ARROW);
			this.state = 1182;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Java7Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1184;
				this.match(Java7Parser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this.match(Java7Parser.LPAREN);
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FINAL) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG))) !== 0) || _la === Java7Parser.SHORT || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
					{
					this.state = 1186;
					this.formalParameterList();
					}
				}

				this.state = 1189;
				this.match(Java7Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1190;
				this.match(Java7Parser.LPAREN);
				this.state = 1191;
				this.match(Java7Parser.IDENTIFIER);
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.COMMA) {
					{
					{
					this.state = 1192;
					this.match(Java7Parser.COMMA);
					this.state = 1193;
					this.match(Java7Parser.IDENTIFIER);
					}
					}
					this.state = 1198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1199;
				this.match(Java7Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Java7Parser.RULE_lambdaBody);
		try {
			this.state = 1204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.NEW:
			case Java7Parser.SHORT:
			case Java7Parser.SUPER:
			case Java7Parser.THIS:
			case Java7Parser.VOID:
			case Java7Parser.DECIMAL_LITERAL:
			case Java7Parser.HEX_LITERAL:
			case Java7Parser.OCT_LITERAL:
			case Java7Parser.BINARY_LITERAL:
			case Java7Parser.FLOAT_LITERAL:
			case Java7Parser.HEX_FLOAT_LITERAL:
			case Java7Parser.BOOL_LITERAL:
			case Java7Parser.CHAR_LITERAL:
			case Java7Parser.STRING_LITERAL:
			case Java7Parser.NULL_LITERAL:
			case Java7Parser.LPAREN:
			case Java7Parser.LT:
			case Java7Parser.BANG:
			case Java7Parser.TILDE:
			case Java7Parser.INC:
			case Java7Parser.DEC:
			case Java7Parser.ADD:
			case Java7Parser.SUB:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1202;
				this.expression(0);
				}
				break;
			case Java7Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Java7Parser.RULE_primary);
		try {
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1206;
				this.match(Java7Parser.LPAREN);
				this.state = 1207;
				this.expression(0);
				this.state = 1208;
				this.match(Java7Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1210;
				this.match(Java7Parser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1211;
				this.match(Java7Parser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1212;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1213;
				this.match(Java7Parser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1214;
				this.typeTypeOrVoid();
				this.state = 1215;
				this.match(Java7Parser.DOT);
				this.state = 1216;
				this.match(Java7Parser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1218;
				this.nonWildcardTypeArguments();
				this.state = 1222;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.SUPER:
				case Java7Parser.IDENTIFIER:
					{
					this.state = 1219;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case Java7Parser.THIS:
					{
					this.state = 1220;
					this.match(Java7Parser.THIS);
					this.state = 1221;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Java7Parser.RULE_classType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1226;
				this.classOrInterfaceType();
				this.state = 1227;
				this.match(Java7Parser.DOT);
				}
				break;
			}
			this.state = 1234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.AT) {
				{
				{
				this.state = 1231;
				this.annotation();
				}
				}
				this.state = 1236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1237;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LT) {
				{
				this.state = 1238;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Java7Parser.RULE_creator);
		try {
			this.state = 1250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1241;
				this.nonWildcardTypeArguments();
				this.state = 1242;
				this.createdName();
				this.state = 1243;
				this.classCreatorRest();
				}
				break;
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1245;
				this.createdName();
				this.state = 1248;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java7Parser.LBRACK:
					{
					this.state = 1246;
					this.arrayCreatorRest();
					}
					break;
				case Java7Parser.LPAREN:
					{
					this.state = 1247;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Java7Parser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1267;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this.match(Java7Parser.IDENTIFIER);
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java7Parser.LT) {
					{
					this.state = 1253;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.DOT) {
					{
					{
					this.state = 1256;
					this.match(Java7Parser.DOT);
					this.state = 1257;
					this.match(Java7Parser.IDENTIFIER);
					this.state = 1259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Java7Parser.LT) {
						{
						this.state = 1258;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1266;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Java7Parser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this.match(Java7Parser.IDENTIFIER);
			this.state = 1271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.LT) {
				{
				this.state = 1270;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1273;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Java7Parser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.match(Java7Parser.LBRACK);
			this.state = 1303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.RBRACK:
				{
				this.state = 1276;
				this.match(Java7Parser.RBRACK);
				this.state = 1281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java7Parser.LBRACK) {
					{
					{
					this.state = 1277;
					this.match(Java7Parser.LBRACK);
					this.state = 1278;
					this.match(Java7Parser.RBRACK);
					}
					}
					this.state = 1283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1284;
				this.arrayInitializer();
				}
				break;
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.NEW:
			case Java7Parser.SHORT:
			case Java7Parser.SUPER:
			case Java7Parser.THIS:
			case Java7Parser.VOID:
			case Java7Parser.DECIMAL_LITERAL:
			case Java7Parser.HEX_LITERAL:
			case Java7Parser.OCT_LITERAL:
			case Java7Parser.BINARY_LITERAL:
			case Java7Parser.FLOAT_LITERAL:
			case Java7Parser.HEX_FLOAT_LITERAL:
			case Java7Parser.BOOL_LITERAL:
			case Java7Parser.CHAR_LITERAL:
			case Java7Parser.STRING_LITERAL:
			case Java7Parser.NULL_LITERAL:
			case Java7Parser.LPAREN:
			case Java7Parser.LT:
			case Java7Parser.BANG:
			case Java7Parser.TILDE:
			case Java7Parser.INC:
			case Java7Parser.DEC:
			case Java7Parser.ADD:
			case Java7Parser.SUB:
			case Java7Parser.AT:
			case Java7Parser.IDENTIFIER:
				{
				this.state = 1285;
				this.expression(0);
				this.state = 1286;
				this.match(Java7Parser.RBRACK);
				this.state = 1293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1287;
						this.match(Java7Parser.LBRACK);
						this.state = 1288;
						this.expression(0);
						this.state = 1289;
						this.match(Java7Parser.RBRACK);
						}
						}
					}
					this.state = 1295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				}
				this.state = 1300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1296;
						this.match(Java7Parser.LBRACK);
						this.state = 1297;
						this.match(Java7Parser.RBRACK);
						}
						}
					}
					this.state = 1302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Java7Parser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
			this.arguments();
			this.state = 1307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1306;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Java7Parser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1309;
			this.nonWildcardTypeArguments();
			this.state = 1310;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Java7Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1312;
				this.match(Java7Parser.LT);
				this.state = 1313;
				this.match(Java7Parser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1314;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Java7Parser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1317;
				this.match(Java7Parser.LT);
				this.state = 1318;
				this.match(Java7Parser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1319;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Java7Parser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1322;
			this.match(Java7Parser.LT);
			this.state = 1323;
			this.typeList();
			this.state = 1324;
			this.match(Java7Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Java7Parser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.typeType();
			this.state = 1331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 1327;
				this.match(Java7Parser.COMMA);
				this.state = 1328;
				this.typeType();
				}
				}
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Java7Parser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java7Parser.AT) {
				{
				this.state = 1334;
				this.annotation();
				}
			}

			this.state = 1339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.IDENTIFIER:
				{
				this.state = 1337;
				this.classOrInterfaceType();
				}
				break;
			case Java7Parser.BOOLEAN:
			case Java7Parser.BYTE:
			case Java7Parser.CHAR:
			case Java7Parser.DOUBLE:
			case Java7Parser.FLOAT:
			case Java7Parser.INT:
			case Java7Parser.LONG:
			case Java7Parser.SHORT:
				{
				this.state = 1338;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1341;
					this.match(Java7Parser.LBRACK);
					this.state = 1342;
					this.match(Java7Parser.RBRACK);
					}
					}
				}
				this.state = 1347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Java7Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG))) !== 0) || _la === Java7Parser.SHORT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Java7Parser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1350;
			this.match(Java7Parser.LT);
			this.state = 1351;
			this.typeArgument();
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java7Parser.COMMA) {
				{
				{
				this.state = 1352;
				this.match(Java7Parser.COMMA);
				this.state = 1353;
				this.typeArgument();
				}
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1359;
			this.match(Java7Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Java7Parser.RULE_superSuffix);
		try {
			this.state = 1367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1361;
				this.arguments();
				}
				break;
			case Java7Parser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1362;
				this.match(Java7Parser.DOT);
				this.state = 1363;
				this.match(Java7Parser.IDENTIFIER);
				this.state = 1365;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1364;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Java7Parser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java7Parser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1369;
				this.match(Java7Parser.SUPER);
				this.state = 1370;
				this.superSuffix();
				}
				break;
			case Java7Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1371;
				this.match(Java7Parser.IDENTIFIER);
				this.state = 1372;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Java7Parser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1375;
			this.match(Java7Parser.LPAREN);
			this.state = 1377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java7Parser.BOOLEAN) | (1 << Java7Parser.BYTE) | (1 << Java7Parser.CHAR) | (1 << Java7Parser.DOUBLE) | (1 << Java7Parser.FLOAT) | (1 << Java7Parser.INT) | (1 << Java7Parser.LONG) | (1 << Java7Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java7Parser.SHORT - 37)) | (1 << (Java7Parser.SUPER - 37)) | (1 << (Java7Parser.THIS - 37)) | (1 << (Java7Parser.VOID - 37)) | (1 << (Java7Parser.DECIMAL_LITERAL - 37)) | (1 << (Java7Parser.HEX_LITERAL - 37)) | (1 << (Java7Parser.OCT_LITERAL - 37)) | (1 << (Java7Parser.BINARY_LITERAL - 37)) | (1 << (Java7Parser.FLOAT_LITERAL - 37)) | (1 << (Java7Parser.HEX_FLOAT_LITERAL - 37)) | (1 << (Java7Parser.BOOL_LITERAL - 37)) | (1 << (Java7Parser.CHAR_LITERAL - 37)) | (1 << (Java7Parser.STRING_LITERAL - 37)) | (1 << (Java7Parser.NULL_LITERAL - 37)) | (1 << (Java7Parser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Java7Parser.LT - 72)) | (1 << (Java7Parser.BANG - 72)) | (1 << (Java7Parser.TILDE - 72)) | (1 << (Java7Parser.INC - 72)) | (1 << (Java7Parser.DEC - 72)) | (1 << (Java7Parser.ADD - 72)) | (1 << (Java7Parser.SUB - 72)))) !== 0) || _la === Java7Parser.AT || _la === Java7Parser.IDENTIFIER) {
				{
				this.state = 1376;
				this.expressionList();
				}
			}

			this.state = 1379;
			this.match(Java7Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 82:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 5);

		case 12:
			return this.precpred(this._ctx, 25);

		case 13:
			return this.precpred(this._ctx, 24);

		case 14:
			return this.precpred(this._ctx, 20);

		case 15:
			return this.precpred(this._ctx, 13);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u0568\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x03\x02\x05\x02\xD4\n\x02\x03\x02\x07\x02\xD7\n\x02\f\x02\x0E\x02" +
		"\xDA\v\x02\x03\x02\x07\x02\xDD\n\x02\f\x02\x0E\x02\xE0\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x07\x03\xE5\n\x03\f\x03\x0E\x03\xE8\v\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xF0\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xF5\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\xFA\n\x05\f\x05" +
		"\x0E\x05\xFD\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0103\n\x05" +
		"\x03\x05\x05\x05\u0106\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\u010D\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u0117\n\x07\x03\b\x03\b\x05\b\u011B\n\b\x03\t\x03\t\x03" +
		"\t\x05\t\u0120\n\t\x03\t\x03\t\x05\t\u0124\n\t\x03\t\x03\t\x05\t\u0128" +
		"\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u0130\n\n\f\n\x0E\n\u0133" +
		"\v\n\x03\n\x03\n\x03\v\x07\v\u0138\n\v\f\v\x0E\v\u013B\v\v\x03\v\x03\v" +
		"\x03\v\x05\v\u0140\n\v\x03\f\x03\f\x03\f\x07\f\u0145\n\f\f\f\x0E\f\u0148" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x05\r\u014E\n\r\x03\r\x03\r\x05\r\u0152\n" +
		"\r\x03\r\x05\r\u0155\n\r\x03\r\x05\r\u0158\n\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u015F\n\x0E\f\x0E\x0E\x0E\u0162\v\x0E\x03\x0F\x07" +
		"\x0F\u0165\n\x0F\f\x0F\x0E\x0F\u0168\v\x0F\x03\x0F\x03\x0F\x05\x0F\u016C" +
		"\n\x0F\x03\x0F\x05\x0F\u016F\n\x0F\x03\x10\x03\x10\x07\x10\u0173\n\x10" +
		"\f\x10\x0E\x10\u0176\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u017B\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u017F\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07" +
		"\x12\u0185\n\x12\f\x12\x0E\x12\u0188\v\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x07\x13\u018E\n\x13\f\x13\x0E\x13\u0191\v\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x05\x14\u0197\n\x14\x03\x14\x03\x14\x07\x14\u019B\n\x14\f" +
		"\x14\x0E\x14\u019E\v\x14\x03\x14\x05\x14\u01A1\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01AC\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01B3\n\x16\f\x16\x0E" +
		"\x16\u01B6\v\x16\x03\x16\x03\x16\x05\x16\u01BA\n\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x05\x17\u01C0\n\x17\x03\x18\x03\x18\x05\x18\u01C4\n\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u01D0\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1D\x07\x1D\u01D9\n\x1D\f\x1D\x0E\x1D\u01DC\v\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u01E0\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01E9\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01EF" +
		"\n\x1F\f\x1F\x0E\x1F\u01F2\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u01F9" +
		"\n \f \x0E \u01FC\v \x03 \x03 \x03 \x03!\x07!\u0202\n!\f!\x0E!\u0205\v" +
		"!\x03!\x03!\x03!\x07!\u020A\n!\f!\x0E!\u020D\v!\x03!\x03!\x05!\u0211\n" +
		"!\x03!\x03!\x03!\x03!\x07!\u0217\n!\f!\x0E!\u021A\v!\x03!\x03!\x05!\u021E" +
		"\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0228\n\"\x03" +
		"#\x03#\x03#\x03$\x03$\x03$\x07$\u0230\n$\f$\x0E$\u0233\v$\x03%\x03%\x03" +
		"%\x05%\u0238\n%\x03&\x03&\x03&\x07&\u023D\n&\f&\x0E&\u0240\v&\x03\'\x03" +
		"\'\x05\'\u0244\n\'\x03(\x03(\x03(\x03(\x07(\u024A\n(\f(\x0E(\u024D\v(" +
		"\x03(\x05(\u0250\n(\x05(\u0252\n(\x03(\x03(\x03)\x03)\x05)\u0258\n)\x03" +
		")\x03)\x03)\x05)\u025D\n)\x07)\u025F\n)\f)\x0E)\u0262\v)\x03*\x03*\x03" +
		"*\x03*\x05*\u0268\n*\x05*\u026A\n*\x03+\x03+\x03+\x07+\u026F\n+\f+\x0E" +
		"+\u0272\v+\x03,\x03,\x05,\u0276\n,\x03,\x03,\x03-\x03-\x03-\x07-\u027D" +
		"\n-\f-\x0E-\u0280\v-\x03-\x03-\x05-\u0284\n-\x03-\x05-\u0287\n-\x03.\x07" +
		".\u028A\n.\f.\x0E.\u028D\v.\x03.\x03.\x03.\x03/\x07/\u0293\n/\f/\x0E/" +
		"\u0296\v/\x03/\x03/\x03/\x03/\x030\x030\x030\x070\u029F\n0\f0\x0E0\u02A2" +
		"\v0\x031\x031\x031\x031\x031\x031\x051\u02AA\n1\x032\x032\x033\x033\x03" +
		"4\x034\x034\x034\x034\x054\u02B5\n4\x034\x054\u02B8\n4\x035\x035\x035" +
		"\x075\u02BD\n5\f5\x0E5\u02C0\v5\x036\x036\x036\x036\x037\x037\x037\x05" +
		"7\u02C9\n7\x038\x038\x038\x038\x078\u02CF\n8\f8\x0E8\u02D2\v8\x058\u02D4" +
		"\n8\x038\x058\u02D7\n8\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x07" +
		":\u02E2\n:\f:\x0E:\u02E5\v:\x03:\x03:\x03;\x07;\u02EA\n;\f;\x0E;\u02ED" +
		"\v;\x03;\x03;\x05;\u02F1\n;\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02F9\n" +
		"<\x03<\x03<\x05<\u02FD\n<\x03<\x03<\x05<\u0301\n<\x03<\x03<\x05<\u0305" +
		"\n<\x05<\u0307\n<\x03=\x03=\x05=\u030B\n=\x03>\x03>\x03>\x03>\x05>\u0311" +
		"\n>\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x07A\u031A\nA\fA\x0EA\u031D\vA" +
		"\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u0326\nB\x03C\x07C\u0329\nC\f" +
		"C\x0EC\u032C\vC\x03C\x03C\x03C\x03D\x07D\u0332\nD\fD\x0ED\u0335\vD\x03" +
		"D\x03D\x05D\u0339\nD\x03D\x05D\u033C\nD\x03E\x03E\x03E\x03E\x03E\x05E" +
		"\u0343\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u034C\nE\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x06E\u0361\nE\rE\x0EE\u0362\x03E\x05E\u0366\nE\x03E\x05E\u0369" +
		"\nE\x03E\x03E\x03E\x03E\x07E\u036F\nE\fE\x0EE\u0372\vE\x03E\x05E\u0375" +
		"\nE\x03E\x03E\x03E\x03E\x07E\u037B\nE\fE\x0EE\u037E\vE\x03E\x07E\u0381" +
		"\nE\fE\x0EE\u0384\vE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u038E" +
		"\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0397\nE\x03E\x03E\x03E\x05" +
		"E\u039C\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03A6\nE\x03F" +
		"\x03F\x03F\x07F\u03AB\nF\fF\x0EF\u03AE\vF\x03F\x03F\x03F\x03F\x03F\x03" +
		"G\x03G\x03G\x07G\u03B8\nG\fG\x0EG\u03BB\vG\x03H\x03H\x03H\x03I\x03I\x03" +
		"I\x05I\u03C3\nI\x03I\x03I\x03J\x03J\x03J\x07J\u03CA\nJ\fJ\x0EJ\u03CD\v" +
		"J\x03K\x07K\u03D0\nK\fK\x0EK\u03D3\vK\x03K\x03K\x03K\x03K\x03K\x03L\x06" +
		"L\u03DB\nL\rL\x0EL\u03DC\x03L\x06L\u03E0\nL\rL\x0EL\u03E1\x03M\x03M\x03" +
		"M\x05M\u03E7\nM\x03M\x03M\x03M\x05M\u03EC\nM\x03N\x03N\x05N\u03F0\nN\x03" +
		"N\x03N\x05N\u03F4\nN\x03N\x03N\x05N\u03F8\nN\x05N\u03FA\nN\x03O\x03O\x05" +
		"O\u03FE\nO\x03P\x07P\u0401\nP\fP\x0EP\u0404\vP\x03P\x03P\x03P\x03P\x03" +
		"P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0412\nR\fR\x0ER\u0415\vR\x03" +
		"S\x03S\x03S\x05S\u041A\nS\x03S\x03S\x03S\x03S\x05S\u0420\nS\x03S\x03S" +
		"\x03S\x03S\x05S\u0426\nS\x03S\x05S\u0429\nS\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u043D" +
		"\nT\x03T\x03T\x05T\u0441\nT\x03T\x03T\x03T\x05T\u0446\nT\x03T\x03T\x05" +
		"T\u044A\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x05T\u045A\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x05T\u0482\nT\x03T\x03T\x03T\x03T\x05T\u0488\nT\x03T\x03T\x03T" +
		"\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0497\nT\x03T" +
		"\x07T\u049A\nT\fT\x0ET\u049D\vT\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x05" +
		"V\u04A6\nV\x03V\x03V\x03V\x03V\x03V\x07V\u04AD\nV\fV\x0EV\u04B0\vV\x03" +
		"V\x05V\u04B3\nV\x03W\x03W\x05W\u04B7\nW\x03X\x03X\x03X\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u04C9\nX\x05X" +
		"\u04CB\nX\x03Y\x03Y\x03Y\x05Y\u04D0\nY\x03Y\x07Y\u04D3\nY\fY\x0EY\u04D6" +
		"\vY\x03Y\x03Y\x05Y\u04DA\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04E3" +
		"\nZ\x05Z\u04E5\nZ\x03[\x03[\x05[\u04E9\n[\x03[\x03[\x03[\x05[\u04EE\n" +
		"[\x07[\u04F0\n[\f[\x0E[\u04F3\v[\x03[\x05[\u04F6\n[\x03\\\x03\\\x05\\" +
		"\u04FA\n\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x07]\u0502\n]\f]\x0E]\u0505" +
		"\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x07]\u050E\n]\f]\x0E]\u0511\v]" +
		"\x03]\x03]\x07]\u0515\n]\f]\x0E]\u0518\v]\x05]\u051A\n]\x03^\x03^\x05" +
		"^\u051E\n^\x03_\x03_\x03_\x03`\x03`\x03`\x05`\u0526\n`\x03a\x03a\x03a" +
		"\x05a\u052B\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u0534\nc\fc\x0E" +
		"c\u0537\vc\x03d\x05d\u053A\nd\x03d\x03d\x05d\u053E\nd\x03d\x03d\x07d\u0542" +
		"\nd\fd\x0Ed\u0545\vd\x03e\x03e\x03f\x03f\x03f\x03f\x07f\u054D\nf\ff\x0E" +
		"f\u0550\vf\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u0558\ng\x05g\u055A\ng\x03" +
		"h\x03h\x03h\x03h\x05h\u0560\nh\x03i\x03i\x05i\u0564\ni\x03i\x03i\x03i" +
		"\x02\x02\x03\xA6j\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\x02\x0E\x04" +
		"\x02\x13\x13**\x03\x0258\x03\x029:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03" +
		"\x02WX\x04\x02IJPQ\x04\x02OORR\x04\x02HH_i\x03\x02UV\n\x02\x05\x05\x07" +
		"\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x02\u0601\x02\xD3\x03\x02" +
		"\x02\x02\x04\xE6\x03\x02\x02\x02\x06\xED\x03\x02\x02\x02\b\u0105\x03\x02" +
		"\x02\x02\n\u010C\x03\x02\x02\x02\f\u0116\x03\x02\x02\x02\x0E\u011A\x03" +
		"\x02\x02\x02\x10\u011C\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u0139" +
		"\x03\x02\x02\x02\x16\u0141\x03\x02\x02\x02\x18\u0149\x03\x02\x02\x02\x1A" +
		"\u015B\x03\x02\x02\x02\x1C\u0166\x03\x02\x02\x02\x1E\u0170\x03\x02\x02" +
		"\x02 \u0177\x03\x02\x02\x02\"\u0182\x03\x02\x02\x02$\u018B\x03\x02\x02" +
		"\x02&\u01A0\x03\x02\x02\x02(\u01AB\x03\x02\x02\x02*\u01AD\x03\x02\x02" +
		"\x02,\u01BF\x03\x02\x02\x02.\u01C3\x03\x02\x02\x020\u01C5\x03\x02\x02" +
		"\x022\u01C8\x03\x02\x02\x024\u01CB\x03\x02\x02\x026\u01D3\x03\x02\x02" +
		"\x028\u01DF\x03\x02\x02\x02:\u01E8\x03\x02\x02\x02<\u01EA\x03\x02\x02" +
		"\x02>\u01F5\x03\x02\x02\x02@\u0203\x03\x02\x02\x02B\u0227\x03\x02\x02" +
		"\x02D\u0229\x03\x02\x02\x02F\u022C\x03\x02\x02\x02H\u0234\x03\x02\x02" +
		"\x02J\u0239\x03\x02\x02\x02L\u0243\x03\x02\x02\x02N\u0245\x03\x02\x02" +
		"\x02P\u0255\x03\x02\x02\x02R\u0269\x03\x02\x02\x02T\u026B\x03\x02\x02" +
		"\x02V\u0273\x03\x02\x02\x02X\u0286\x03\x02\x02\x02Z\u028B\x03\x02\x02" +
		"\x02\\\u0294\x03\x02\x02\x02^\u029B\x03\x02\x02\x02`\u02A9\x03\x02\x02" +
		"\x02b\u02AB\x03\x02\x02\x02d\u02AD\x03\x02\x02\x02f\u02AF\x03\x02\x02" +
		"\x02h\u02B9\x03\x02\x02\x02j\u02C1\x03\x02\x02\x02l\u02C8\x03\x02\x02" +
		"\x02n\u02CA\x03\x02\x02\x02p\u02DA\x03\x02\x02\x02r\u02DF\x03\x02\x02" +
		"\x02t\u02F0\x03\x02\x02\x02v\u0306\x03\x02\x02\x02x\u030A\x03\x02\x02" +
		"\x02z\u030C\x03\x02\x02\x02|\u0312\x03\x02\x02\x02~\u0314\x03\x02\x02" +
		"\x02\x80\u0317\x03\x02\x02\x02\x82\u0325\x03\x02\x02\x02\x84\u032A\x03" +
		"\x02\x02\x02\x86\u033B\x03\x02\x02\x02\x88\u03A5\x03\x02\x02\x02\x8A\u03A7" +
		"\x03\x02\x02\x02\x8C\u03B4\x03\x02\x02\x02\x8E\u03BC\x03\x02\x02\x02\x90" +
		"\u03BF\x03\x02\x02\x02\x92\u03C6\x03\x02\x02\x02\x94\u03D1\x03\x02\x02" +
		"\x02\x96\u03DA\x03\x02\x02\x02\x98\u03EB\x03\x02\x02\x02\x9A\u03F9\x03" +
		"\x02\x02\x02\x9C\u03FD\x03\x02\x02\x02\x9E\u0402\x03\x02\x02\x02\xA0\u040A" +
		"\x03\x02\x02\x02\xA2\u040E\x03\x02\x02\x02\xA4\u0428\x03\x02\x02\x02\xA6" +
		"\u0449\x03\x02\x02\x02\xA8\u049E\x03\x02\x02\x02\xAA\u04B2\x03\x02\x02" +
		"\x02\xAC\u04B6\x03\x02\x02\x02\xAE\u04CA\x03\x02\x02\x02\xB0\u04CF\x03" +
		"\x02\x02\x02\xB2\u04E4\x03\x02\x02\x02\xB4\u04F5\x03\x02\x02\x02\xB6\u04F7" +
		"\x03\x02\x02\x02\xB8\u04FD\x03\x02\x02\x02\xBA\u051B\x03\x02\x02\x02\xBC" +
		"\u051F\x03\x02\x02\x02\xBE\u0525\x03\x02\x02\x02\xC0\u052A\x03\x02\x02" +
		"\x02\xC2\u052C\x03\x02\x02\x02\xC4\u0530\x03\x02\x02\x02\xC6\u0539\x03" +
		"\x02\x02\x02\xC8\u0546\x03\x02\x02\x02\xCA\u0548\x03\x02\x02\x02\xCC\u0559" +
		"\x03\x02\x02\x02\xCE\u055F\x03\x02\x02\x02\xD0\u0561\x03\x02\x02\x02\xD2" +
		"\xD4\x05\x04\x03\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
		"\xD8\x03\x02\x02\x02\xD5\xD7\x05\x06\x04\x02\xD6\xD5\x03\x02\x02\x02\xD7" +
		"\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9" +
		"\xDE\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05\b\x05\x02\xDC" +
		"\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1" +
		"\xE2\x07\x02\x02\x03\xE2\x03\x03\x02\x02\x02\xE3\xE5\x05f4\x02\xE4\xE3" +
		"\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7" +
		"\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA" +
		"\x07\"\x02\x02\xEA\xEB\x05^0\x02\xEB\xEC\x07E\x02\x02\xEC\x05\x03\x02" +
		"\x02\x02\xED\xEF\x07\x1B\x02\x02\xEE\xF0\x07(\x02\x02\xEF\xEE\x03\x02" +
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x05^" +
		"0\x02\xF2\xF3\x07G\x02\x02\xF3\xF5\x07Y\x02\x02\xF4\xF2\x03\x02\x02\x02" +
		"\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x07E\x02\x02" +
		"\xF7\x07\x03\x02\x02\x02\xF8\xFA\x05\f\x07\x02\xF9\xF8\x03\x02\x02\x02" +
		"\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02" +
		"\xFC\u0102\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x05\x10\t" +
		"\x02\xFF\u0103\x05\x18\r\x02\u0100\u0103\x05 \x11\x02\u0101\u0103\x05" +
		"p9\x02\u0102\xFE\x03\x02\x02\x02\u0102\xFF\x03\x02\x02\x02\u0102\u0100" +
		"\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02" +
		"\u0104\u0106\x07E\x02\x02\u0105\xFB\x03\x02\x02\x02\u0105\u0104\x03\x02" +
		"\x02\x02\u0106\t\x03\x02\x02\x02\u0107\u010D\x05\f\x07\x02\u0108\u010D" +
		"\x07 \x02\x02\u0109\u010D\x07,\x02\x02\u010A\u010D\x070\x02\x02\u010B" +
		"\u010D\x073\x02\x02\u010C\u0107\x03\x02\x02\x02\u010C\u0108\x03\x02\x02" +
		"\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B" +
		"\x03\x02\x02\x02\u010D\v\x03\x02\x02\x02\u010E\u0117\x05f4\x02\u010F\u0117" +
		"\x07%\x02\x02\u0110\u0117\x07$\x02\x02\u0111\u0117\x07#\x02\x02\u0112" +
		"\u0117\x07(\x02\x02\u0113\u0117\x07\x03\x02\x02\u0114\u0117\x07\x14\x02" +
		"\x02\u0115\u0117\x07)\x02\x02\u0116\u010E\x03\x02\x02\x02\u0116\u010F" +
		"\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0111\x03\x02\x02\x02" +
		"\u0116\u0112\x03\x02\x02\x02\u0116\u0113\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\r\x03\x02\x02\x02\u0118" +
		"\u011B\x07\x14\x02\x02\u0119\u011B\x05f4\x02\u011A\u0118\x03\x02\x02\x02" +
		"\u011A\u0119\x03\x02\x02\x02\u011B\x0F\x03\x02\x02\x02\u011C\u011D\x07" +
		"\v\x02\x02\u011D\u011F\x07q\x02\x02\u011E\u0120\x05\x12\n\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
		"\u0121\u0122\x07\x13\x02\x02\u0122\u0124\x05\xC6d\x02\u0123\u0121\x03" +
		"\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125" +
		"\u0126\x07\x1A\x02\x02\u0126\u0128\x05\xC4c\x02\u0127\u0125\x03\x02\x02" +
		"\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A" +
		"\x05\"\x12\x02\u012A\x11\x03\x02\x02\x02\u012B\u012C\x07J\x02\x02\u012C" +
		"\u0131\x05\x14\v\x02\u012D\u012E\x07F\x02\x02\u012E\u0130\x05\x14\v\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0134\u0135\x07I\x02\x02\u0135\x13\x03\x02\x02" +
		"\x02\u0136\u0138\x05f4\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03" +
		"\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A" +
		"\u013C\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x07q\x02" +
		"\x02\u013D\u013E\x07\x13\x02\x02\u013E\u0140\x05\x16\f\x02\u013F\u013D" +
		"\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\x15\x03\x02\x02\x02" +
		"\u0141\u0146\x05\xC6d\x02\u0142\u0143\x07[\x02\x02\u0143\u0145\x05\xC6" +
		"d\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144" +
		"\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\x17\x03\x02\x02\x02" +
		"\u0148\u0146\x03\x02\x02\x02\u0149\u014A\x07\x12\x02\x02\u014A\u014D\x07" +
		"q\x02\x02\u014B\u014C\x07\x1A\x02\x02\u014C\u014E\x05\xC4c\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02" +
		"\u014F\u0151\x07A\x02\x02\u0150\u0152\x05\x1A\x0E\x02\u0151\u0150\x03" +
		"\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153" +
		"\u0155\x07F\x02\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02" +
		"\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0158\x05\x1E\x10\x02\u0157\u0156" +
		"\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
		"\u0159\u015A\x07B\x02\x02\u015A\x19\x03\x02\x02\x02\u015B\u0160\x05\x1C" +
		"\x0F\x02\u015C\u015D\x07F\x02\x02\u015D\u015F\x05\x1C\x0F\x02\u015E\u015C" +
		"\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u0161\x1B\x03\x02\x02\x02\u0162\u0160\x03" +
		"\x02\x02\x02\u0163\u0165\x05";
	private static readonly _serializedATNSegment1: string =
		"f4\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0169\u016B\x07q\x02\x02\u016A\u016C\x05" +
		"\xD0i\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u016E\x03\x02\x02\x02\u016D\u016F\x05\"\x12\x02\u016E\u016D\x03\x02\x02" +
		"\x02\u016E\u016F\x03\x02\x02\x02\u016F\x1D\x03\x02\x02\x02\u0170\u0174" +
		"\x07E\x02\x02\u0171\u0173\x05&\x14\x02\u0172\u0171\x03\x02\x02\x02\u0173" +
		"\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02" +
		"\x02\x02\u0175\x1F\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u0178" +
		"\x07\x1E\x02\x02\u0178\u017A\x07q\x02\x02\u0179\u017B\x05\x12\n\x02\u017A" +
		"\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017E\x03\x02" +
		"\x02\x02\u017C\u017D\x07\x13\x02\x02\u017D\u017F\x05\xC4c\x02\u017E\u017C" +
		"\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0181\x05$\x13\x02\u0181!\x03\x02\x02\x02\u0182\u0186\x07A\x02" +
		"\x02\u0183\u0185\x05&\x14\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188" +
		"\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07" +
		"B\x02\x02\u018A#\x03\x02\x02\x02\u018B\u018F\x07A\x02\x02\u018C\u018E" +
		"\x058\x1D\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02" +
		"\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03" +
		"\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0193\x07B\x02\x02\u0193" +
		"%\x03\x02\x02\x02\u0194\u01A1\x07E\x02\x02\u0195\u0197\x07(\x02\x02\u0196" +
		"\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02" +
		"\x02\x02\u0198\u01A1\x05\x80A\x02\u0199\u019B\x05\n\x06\x02\u019A\u0199" +
		"\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02" +
		"\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03" +
		"\x02\x02\x02\u019F\u01A1\x05(\x15\x02\u01A0\u0194\x03\x02\x02\x02\u01A0" +
		"\u0196\x03\x02\x02\x02\u01A0\u019C\x03\x02\x02\x02\u01A1\'\x03\x02\x02" +
		"\x02\u01A2\u01AC\x05*\x16\x02\u01A3\u01AC\x050\x19\x02\u01A4\u01AC\x05" +
		"6\x1C\x02\u01A5\u01AC\x054\x1B\x02\u01A6\u01AC\x052\x1A\x02\u01A7\u01AC" +
		"\x05 \x11\x02\u01A8\u01AC\x05p9\x02\u01A9\u01AC\x05\x10\t\x02\u01AA\u01AC" +
		"\x05\x18\r\x02\u01AB\u01A2\x03\x02\x02\x02\u01AB\u01A3\x03\x02\x02\x02" +
		"\u01AB\u01A4\x03\x02\x02\x02\u01AB\u01A5\x03\x02\x02\x02\u01AB\u01A6\x03" +
		"\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB" +
		"\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC)\x03\x02\x02" +
		"\x02\u01AD\u01AE\x05.\x18\x02\u01AE\u01AF\x07q\x02\x02\u01AF\u01B4\x05" +
		"V,\x02\u01B0\u01B1\x07C\x02\x02\u01B1\u01B3\x07D\x02\x02\u01B2\u01B0\x03" +
		"\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4" +
		"\u01B5\x03\x02\x02\x02\u01B5\u01B9\x03\x02\x02\x02\u01B6\u01B4\x03\x02" +
		"\x02\x02\u01B7\u01B8\x07/\x02\x02\u01B8\u01BA\x05T+\x02\u01B9\u01B7\x03" +
		"\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01BC\x05,\x17\x02\u01BC+\x03\x02\x02\x02\u01BD\u01C0\x05\x80A\x02\u01BE" +
		"\u01C0\x07E\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02" +
		"\x02\u01C0-\x03\x02\x02\x02\u01C1\u01C4\x05\xC6d\x02\u01C2\u01C4\x072" +
		"\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
		"/\x03\x02\x02\x02\u01C5\u01C6\x05\x12\n\x02\u01C6\u01C7\x05*\x16\x02\u01C7" +
		"1\x03\x02\x02\x02\u01C8\u01C9\x05\x12\n\x02\u01C9\u01CA\x054\x1B\x02\u01CA" +
		"3\x03\x02\x02\x02\u01CB\u01CC\x07q\x02\x02\u01CC\u01CF\x05V,\x02\u01CD" +
		"\u01CE\x07/\x02\x02\u01CE\u01D0\x05T+\x02\u01CF\u01CD\x03\x02\x02\x02" +
		"\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05" +
		"\x80A\x02\u01D25\x03\x02\x02\x02\u01D3\u01D4\x05\xC6d\x02\u01D4\u01D5" +
		"\x05F$\x02\u01D5\u01D6\x07E\x02\x02\u01D67\x03\x02\x02\x02\u01D7\u01D9" +
		"\x05\n\x06\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
		"\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x05:\x1E\x02\u01DE" +
		"\u01E0\x07E\x02\x02\u01DF\u01DA\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02" +
		"\x02\u01E09\x03\x02\x02\x02\u01E1\u01E9\x05<\x1F\x02\u01E2\u01E9\x05@" +
		"!\x02\u01E3\u01E9\x05D#\x02\u01E4\u01E9\x05 \x11\x02\u01E5\u01E9\x05p" +
		"9\x02\u01E6\u01E9\x05\x10\t\x02\u01E7\u01E9\x05\x18\r\x02\u01E8\u01E1" +
		"\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3\x03\x02\x02\x02" +
		"\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E8\u01E6\x03" +
		"\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9;\x03\x02\x02\x02\u01EA" +
		"\u01EB\x05\xC6d\x02\u01EB\u01F0\x05> \x02\u01EC\u01ED\x07F\x02\x02\u01ED" +
		"\u01EF\x05> \x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03" +
		"\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07E\x02\x02\u01F4" +
		"=\x03\x02\x02\x02\u01F5\u01FA\x07q\x02\x02\u01F6\u01F7\x07C\x02\x02\u01F7" +
		"\u01F9\x07D\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02" +
		"\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD" +
		"\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07H\x02\x02" +
		"\u01FE\u01FF\x05L\'\x02\u01FF?\x03\x02\x02\x02\u0200\u0202\x05B\"\x02" +
		"\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03" +
		"\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0210\x03\x02\x02\x02\u0205" +
		"\u0203\x03\x02\x02\x02\u0206\u0211\x05.\x18\x02\u0207\u020B\x05\x12\n" +
		"\x02\u0208\u020A\x05f4\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020D\x03" +
		"\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C" +
		"\u020E\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F\x05.\x18" +
		"\x02\u020F\u0211\x03\x02\x02\x02\u0210\u0206\x03\x02\x02\x02\u0210\u0207" +
		"\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x07q\x02\x02" +
		"\u0213\u0218\x05V,\x02\u0214\u0215\x07C\x02\x02\u0215\u0217\x07D\x02\x02" +
		"\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021D\x03\x02\x02\x02\u021A" +
		"\u0218\x03\x02\x02\x02\u021B\u021C\x07/\x02\x02\u021C\u021E\x05T+\x02" +
		"\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x03" +
		"\x02\x02\x02\u021F\u0220\x05,\x17\x02\u0220A\x03\x02\x02\x02\u0221\u0228" +
		"\x05f4\x02\u0222\u0228\x07%\x02\x02\u0223\u0228\x07\x03\x02\x02\u0224" +
		"\u0228\x07\x0E\x02\x02\u0225\u0228\x07(\x02\x02\u0226\u0228\x07)\x02\x02" +
		"\u0227\u0221\x03\x02\x02\x02\u0227\u0222\x03\x02\x02\x02\u0227\u0223\x03" +
		"\x02\x02\x02\u0227\u0224\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227" +
		"\u0226\x03\x02\x02\x02\u0228C\x03\x02\x02\x02\u0229\u022A\x05\x12\n\x02" +
		"\u022A\u022B\x05@!\x02\u022BE\x03\x02\x02\x02\u022C\u0231\x05H%\x02\u022D" +
		"\u022E\x07F\x02\x02\u022E\u0230\x05H%\x02\u022F\u022D\x03\x02\x02\x02" +
		"\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
		"\x02\x02\x02\u0232G\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0237\x05J&\x02\u0235\u0236\x07H\x02\x02\u0236\u0238\x05L\'\x02\u0237" +
		"\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238I\x03\x02\x02" +
		"\x02\u0239\u023E\x07q\x02\x02\u023A\u023B\x07C\x02\x02\u023B\u023D\x07" +
		"D\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023FK\x03\x02\x02" +
		"\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x05N(\x02\u0242\u0244\x05" +
		"\xA6T\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0242\x03\x02\x02\x02\u0244" +
		"M\x03\x02\x02\x02\u0245\u0251\x07A\x02\x02\u0246\u024B\x05L\'\x02\u0247" +
		"\u0248\x07F\x02\x02\u0248\u024A\x05L\'\x02\u0249\u0247\x03\x02\x02\x02" +
		"\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03" +
		"\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E" +
		"\u0250\x07F\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02" +
		"\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0246\x03\x02\x02\x02\u0251\u0252" +
		"\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x07B\x02\x02" +
		"\u0254O\x03\x02\x02\x02\u0255\u0257\x07q\x02\x02\u0256\u0258\x05\xCAf" +
		"\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0260" +
		"\x03\x02\x02\x02\u0259\u025A\x07G\x02\x02\u025A\u025C\x07q\x02\x02\u025B" +
		"\u025D\x05\xCAf\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02" +
		"\x02\u025D\u025F\x03\x02\x02\x02\u025E\u0259\x03\x02\x02\x02\u025F\u0262" +
		"\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02" +
		"\u0261Q\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u026A\x05\xC6" +
		"d\x02\u0264\u0267\x07M\x02\x02\u0265\u0266\t\x02\x02\x02\u0266\u0268\x05" +
		"\xC6d\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268" +
		"\u026A\x03\x02\x02\x02\u0269\u0263\x03\x02\x02\x02\u0269\u0264\x03\x02" +
		"\x02\x02\u026AS\x03\x02\x02\x02\u026B\u0270\x05^0\x02\u026C\u026D\x07" +
		"F\x02\x02\u026D\u026F\x05^0\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0272" +
		"\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
		"\u0271U\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0275\x07?\x02" +
		"\x02\u0274\u0276\x05X-\x02\u0275\u0274\x03\x02\x02\x02\u0275\u0276\x03" +
		"\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x07@\x02\x02\u0278" +
		"W\x03\x02\x02\x02\u0279\u027E\x05Z.\x02\u027A\u027B\x07F\x02\x02\u027B" +
		"\u027D\x05Z.\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02" +
		"\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0283\x03" +
		"\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0282\x07F\x02\x02\u0282" +
		"\u0284\x05\\/\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02" +
		"\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0287\x05\\/\x02\u0286\u0279\x03" +
		"\x02\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287Y\x03\x02\x02\x02\u0288" +
		"\u028A\x05\x0E\b\x02\u0289\u0288\x03\x02\x02\x02\u028A\u028D\x03\x02\x02" +
		"\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E" +
		"\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u028F\x05\xC6d\x02" +
		"\u028F\u0290\x05J&\x02\u0290[\x03\x02\x02\x02\u0291\u0293\x05\x0E\b\x02" +
		"\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03" +
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296" +
		"\u0294\x03\x02\x02\x02\u0297\u0298\x05\xC6d\x02\u0298\u0299\x07m\x02\x02" +
		"\u0299\u029A\x05J&\x02\u029A]\x03\x02\x02\x02\u029B\u02A0\x07q\x02\x02" +
		"\u029C\u029D\x07G\x02\x02\u029D\u029F\x07q\x02\x02\u029E\u029C\x03\x02" +
		"\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0" +
		"\u02A1\x03\x02\x02\x02\u02A1_\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02" +
		"\x02\u02A3\u02AA\x05b2\x02\u02A4\u02AA\x05d3\x02\u02A5\u02AA\x07<\x02" +
		"\x02\u02A6\u02AA\x07=\x02\x02\u02A7\u02AA\x07;\x02\x02\u02A8\u02AA\x07" +
		">\x02\x02\u02A9\u02A3\x03\x02\x02\x02\u02A9\u02A4\x03\x02\x02\x02\u02A9" +
		"\u02A5\x03\x02\x02\x02\u02A9\u02A6\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
		"\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AAa\x03\x02\x02\x02\u02AB\u02AC" +
		"\t\x03\x02\x02\u02ACc\x03\x02\x02\x02\u02AD\u02AE\t\x04\x02\x02\u02AE" +
		"e\x03\x02\x02\x02\u02AF\u02B0\x07l\x02\x02\u02B0\u02B7\x05^0\x02\u02B1" +
		"\u02B4\x07?\x02\x02\u02B2\u02B5\x05h5\x02\u02B3\u02B5\x05l7\x02\u02B4" +
		"\u02B2\x03\x02\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
		"\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07@\x02\x02\u02B7\u02B1" +
		"\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8g\x03\x02\x02\x02\u02B9" +
		"\u02BE\x05j6\x02\u02BA\u02BB\x07F\x02\x02\u02BB\u02BD\x05j6\x02\u02BC" +
		"\u02BA\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02" +
		"\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BFi\x03\x02\x02\x02\u02C0\u02BE" +
		"\x03\x02\x02\x02\u02C1\u02C2\x07q\x02\x02\u02C2\u02C3\x07H\x02\x02\u02C3" +
		"\u02C4\x05l7\x02\u02C4k\x03\x02\x02\x02\u02C5\u02C9\x05\xA6T\x02\u02C6" +
		"\u02C9\x05f4\x02\u02C7\u02C9\x05n8\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8" +
		"\u02C6\x03\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9m\x03\x02\x02" +
		"\x02\u02CA\u02D3\x07A\x02\x02\u02CB\u02D0\x05l7\x02\u02CC\u02CD\x07F\x02" +
		"\x02\u02CD\u02CF\x05l7\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
		"\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02CB\x03\x02" +
		"\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5" +
		"\u02D7\x07F\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02" +
		"\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07B\x02\x02\u02D9o\x03\x02" +
		"\x02\x02\u02DA\u02DB\x07l\x02\x02\u02DB\u02DC\x07\x1E\x02\x02\u02DC\u02DD" +
		"\x07q\x02\x02\u02DD\u02DE\x05r:\x02\u02DEq\x03\x02\x02\x02\u02DF\u02E3" +
		"\x07A\x02\x02\u02E0\u02E2\x05t;\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2" +
		"\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02" +
		"\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6" +
		"\u02E7\x07B\x02\x02\u02E7s\x03\x02\x02\x02\u02E8\u02EA\x05\n\x06\x02\u02E9" +
		"\u02E8\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02E9\x03\x02" +
		"\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED" +
		"\u02EB\x03\x02\x02\x02\u02EE\u02F1\x05v<\x02\u02EF\u02F1\x07E\x02\x02" +
		"\u02F0\u02EB\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1u\x03\x02" +
		"\x02\x02\u02F2\u02F3\x05\xC6d\x02\u02F3\u02F4\x05x=\x02\u02F4\u02F5\x07" +
		"E\x02\x02\u02F5\u0307\x03\x02\x02\x02\u02F6\u02F8\x05\x10\t\x02\u02F7" +
		"\u02F9\x07E\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02" +
		"\x02\u02F9\u0307\x03\x02\x02\x02\u02FA\u02FC\x05 \x11\x02\u02FB\u02FD" +
		"\x07E\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02" +
		"\u02FD\u0307\x03\x02\x02\x02\u02FE\u0300\x05\x18\r\x02\u02FF\u0301\x07" +
		"E\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301" +
		"\u0307\x03\x02\x02\x02\u0302\u0304\x05p9\x02\u0303\u0305\x07E\x02\x02" +
		"\u0304\u0303\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03" +
		"\x02\x02\x02\u0306\u02F2\x03\x02\x02\x02\u0306\u02F6\x03\x02\x02\x02\u0306" +
		"\u02FA\x03\x02\x02\x02\u0306\u02FE\x03\x02\x02\x02\u0306\u0302\x03\x02" +
		"\x02\x02\u0307w\x03\x02\x02\x02\u0308\u030B\x05z>\x02\u0309\u030B\x05" +
		"|?\x02\u030A\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030By" +
		"\x03\x02\x02\x02\u030C\u030D\x07q\x02\x02\u030D\u030E\x07?\x02\x02\u030E" +
		"\u0310\x07@\x02\x02\u030F\u0311\x05~@\x02\u0310\u030F\x03\x02\x02\x02" +
		"\u0310\u0311\x03\x02\x02\x02\u0311{\x03\x02\x02\x02\u0312\u0313\x05F$" +
		"\x02\u0313}\x03\x02\x02\x02\u0314\u0315\x07\x0E\x02\x02\u0315\u0316\x05" +
		"l7\x02\u0316\x7F\x03\x02\x02\x02\u0317\u031B\x07A\x02\x02\u0318\u031A" +
		"\x05\x82B\x02\u0319\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02" +
		"\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x03" +
		"\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E\u031F\x07B\x02\x02\u031F" +
		"\x81\x03\x02\x02\x02\u0320\u0321\x05\x84C\x02\u0321\u0322\x07E\x02\x02" +
		"\u0322\u0326\x03\x02\x02\x02\u0323\u0326\x05\x88E\x02\u0324\u0326\x05" +
		"\x86D\x02\u0325\u0320\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325" +
		"\u0324\x03\x02\x02\x02\u0326\x83\x03\x02\x02\x02\u0327\u0329\x05\x0E\b" +
		"\x02\u0328\u0327\x03\x02\x02\x02\u0329\u032C\x03\x02\x02\x02\u032A\u0328" +
		"\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032D\x03\x02\x02\x02" +
		"\u032C\u032A\x03\x02\x02\x02\u032D\u032E\x05\xC6d\x02\u032E\u032F\x05" +
		"F$\x02\u032F\x85\x03\x02\x02\x02\u0330\u0332\x05\f\x07\x02\u0331\u0330" +
		"\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02" +
		"\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02\x02\x02\u0335\u0333\x03" +
		"\x02\x02\x02\u0336\u0339\x05\x10\t\x02\u0337\u0339\x05 \x11\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02" +
		"\x02\x02\u033A\u033C\x07E\x02\x02\u033B\u0333\x03\x02\x02\x02\u033B\u033A" +
		"\x03\x02\x02\x02\u033C\x87\x03\x02\x02\x02\u033D\u03A6\x05\x80A\x02\u033E" +
		"\u033F\x07\x04\x02\x02\u033F\u0342\x05\xA6T\x02\u0340\u0341\x07N\x02\x02" +
		"\u0341\u0343\x05\xA6T\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03" +
		"\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x07E\x02\x02\u0345" +
		"\u03A6\x03\x02\x02\x02\u0346\u0347\x07\x18\x02\x02\u0347\u0348\x05\xA0" +
		"Q\x02\u0348\u034B\x05\x88E\x02\u0349\u034A\x07\x11\x02\x02\u034A\u034C" +
		"\x05\x88E\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
		"\u034C\u03A6\x03\x02\x02\x02\u034D\u034E\x07\x17\x02\x02\u034E\u034F\x07" +
		"?\x02\x02\u034F\u0350\x05\x9AN\x02\u0350\u0351\x07@\x02\x02\u0351\u0352" +
		"\x05\x88E\x02\u0352\u03A6\x03\x02\x02\x02\u0353\u0354\x074\x02\x02\u0354" +
		"\u0355\x05\xA0Q\x02\u0355\u0356\x05\x88E\x02\u0356\u03A6\x03\x02\x02\x02" +
		"\u0357\u0358\x07\x0F\x02\x02\u0358\u0359\x05\x88E\x02\u0359\u035A\x07" +
		"4\x02\x02\u035A\u035B\x05\xA0Q\x02\u035B\u035C\x07E\x02\x02\u035C\u03A6" +
		"\x03\x02\x02\x02\u035D\u035E\x071\x02\x02\u035E\u0368\x05\x80A\x02\u035F" +
		"\u0361\x05\x8AF\x02\u0360\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02" +
		"\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365" +
		"\x03\x02\x02\x02\u0364\u0366\x05\x8EH\x02\u0365\u0364\x03\x02\x02\x02" +
		"\u0365\u0366\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0369\x05" +
		"\x8EH\x02\u0368\u0360\x03\x02\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369" +
		"\u03A6\x03\x02\x02\x02\u036A\u036B\x071\x02\x02\u036B\u036C\x05\x90I\x02" +
		"\u036C\u0370\x05\x80A\x02\u036D\u036F\x05\x8AF\x02\u036E\u036D\x03\x02" +
		"\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370" +
		"\u0371\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372\u0370\x03\x02" +
		"\x02\x02\u0373\u0375\x05\x8EH\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375" +
		"\x03\x02\x02\x02\u0375\u03A6\x03\x02\x02\x02\u0376\u0377\x07+\x02\x02" +
		"\u0377\u0378\x05\xA0Q\x02\u0378\u037C\x07A\x02\x02\u0379\u037B\x05\x96" +
		"L\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A" +
		"\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0382\x03\x02\x02\x02" +
		"\u037E\u037C\x03\x02\x02\x02\u037F\u0381\x05\x98M\x02\u0380\u037F\x03" +
		"\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382" +
		"\u0383\x03\x02\x02\x02\u0383\u0385\x03\x02\x02\x02\u0384\u0382\x03\x02" +
		"\x02\x02\u0385\u0386\x07B\x02\x02\u0386\u03A6\x03\x02\x02\x02\u0387\u0388" +
		"\x07,\x02\x02\u0388\u0389\x05\xA0Q\x02\u0389\u038A\x05\x80A\x02\u038A" +
		"\u03A6\x03\x02\x02\x02\u038B\u038D\x07&\x02\x02\u038C\u038E\x05\xA6T\x02" +
		"\u038D\u038C\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03" +
		"\x02\x02\x02\u038F\u03A6\x07E\x02\x02\u0390\u0391\x07.\x02\x02\u0391\u0392" +
		"\x05\xA6T\x02\u0392\u0393\x07E\x02\x02\u0393\u03A6\x03\x02\x02\x02\u0394" +
		"\u0396\x07\x06\x02\x02\u0395\u0397\x07q\x02\x02\u0396\u0395\x03\x02\x02" +
		"\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u03A6" +
		"\x07E\x02\x02\u0399\u039B\x07\r\x02\x02\u039A\u039C\x07q\x02\x02\u039B" +
		"\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02" +
		"\x02\x02\u039D\u03A6\x07E\x02\x02\u039E\u03A6\x07E\x02\x02\u039F\u03A0" +
		"\x05\xA6T\x02\u03A0\u03A1\x07E\x02\x02\u03A1\u03A6\x03\x02\x02\x02\u03A2" +
		"\u03A3\x07q\x02\x02\u03A3\u03A4\x07N\x02\x02\u03A4\u03A6\x05\x88E\x02" +
		"\u03A5\u033D\x03\x02\x02\x02\u03A5\u033E\x03\x02\x02\x02\u03A5\u0346\x03" +
		"\x02\x02\x02\u03A5\u034D\x03\x02\x02\x02\u03A5\u0353\x03\x02\x02\x02\u03A5" +
		"\u0357\x03\x02\x02\x02\u03A5\u035D\x03\x02\x02\x02\u03A5\u036A\x03\x02" +
		"\x02\x02\u03A5\u0376\x03\x02\x02\x02\u03A5\u0387\x03\x02\x02\x02\u03A5" +
		"\u038B\x03\x02\x02\x02\u03A5\u0390\x03\x02\x02\x02\u03A5\u0394\x03\x02" +
		"\x02\x02\u03A5\u0399\x03\x02\x02\x02\u03A5\u039E\x03\x02\x02\x02\u03A5" +
		"\u039F\x03\x02\x02\x02\u03A5\u03A2\x03\x02\x02\x02\u03A6\x89\x03\x02\x02" +
		"\x02\u03A7\u03A8\x07\t\x02\x02\u03A8\u03AC\x07?\x02\x02\u03A9\u03AB\x05" +
		"\x0E\b\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC" +
		"\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AF\x03\x02" +
		"\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B0\x05\x8CG\x02\u03B0\u03B1" +
		"\x07q\x02\x02\u03B1\u03B2\x07@\x02\x02\u03B2\u03B3\x05\x80A\x02\u03B3" +
		"\x8B\x03\x02\x02\x02\u03B4\u03B9\x05^0\x02\u03B5\u03B6\x07\\\x02\x02\u03B6" +
		"\u03B8\x05^0\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02" +
		"\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\x8D\x03" +
		"\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BD\x07\x15\x02\x02\u03BD" +
		"\u03BE\x05\x80A\x02\u03BE\x8F\x03\x02\x02\x02\u03BF\u03C0\x07?\x02\x02" +
		"\u03C0\u03C2\x05\x92J\x02\u03C1\u03C3\x07E\x02\x02\u03C2\u03C1\x03\x02" +
		"\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C5\x07@\x02\x02\u03C5\x91\x03\x02\x02\x02\u03C6\u03CB\x05\x94K\x02" +
		"\u03C7\u03C8\x07E\x02\x02\u03C8\u03CA\x05\x94K\x02\u03C9\u03C7\x03\x02" +
		"\x02\x02\u03CA\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB" +
		"\u03CC\x03\x02\x02\x02\u03CC\x93\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02" +
		"\x02\u03CE\u03D0\x05\x0E\b\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3" +
		"\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02" +
		"\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D5\x05" +
		"P)\x02\u03D5\u03D6\x05J&\x02\u03D6\u03D7\x07H\x02\x02\u03D7\u03D8\x05" +
		"\xA6T\x02\u03D8\x95\x03\x02\x02\x02\u03D9\u03DB\x05\x98M\x02\u03DA\u03D9" +
		"\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02" +
		"\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03E0\x05" +
		"\x82B\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1" +
		"\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\x97\x03\x02\x02" +
		"\x02\u03E3\u03E6\x07\b\x02\x02\u03E4\u03E7\x05\xA6T\x02\u03E5\u03E7\x07" +
		"q\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7" +
		"\u03E8\x03\x02\x02\x02\u03E8\u03EC\x07N\x02\x02\u03E9\u03EA\x07\x0E\x02" +
		"\x02\u03EA\u03EC\x07N\x02\x02\u03EB\u03E3\x03\x02\x02\x02\u03EB\u03E9" +
		"\x03\x02\x02\x02\u03EC\x99\x03\x02\x02\x02\u03ED\u03FA\x05\x9EP\x02\u03EE" +
		"\u03F0\x05\x9CO\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02" +
		"\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x07E\x02\x02\u03F2\u03F4" +
		"\x05\xA6T\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02" +
		"\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7\x07E\x02\x02\u03F6\u03F8\x05" +
		"\xA2R\x02\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8" +
		"\u03FA\x03\x02\x02\x02\u03F9\u03ED\x03\x02\x02\x02\u03F9\u03EF\x03\x02" +
		"\x02\x02\u03FA\x9B\x03\x02\x02\x02\u03FB\u03FE\x05\x84C\x02\u03FC\u03FE" +
		"\x05\xA2R\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02" +
		"\u03FE\x9D\x03\x02\x02\x02\u03FF\u0401\x05\x0E\b\x02\u0400\u03FF\x03\x02" +
		"\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402" +
		"\u0403\x03\x02\x02\x02\u0403\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02" +
		"\x02\x02\u0405\u0406\x05\xC6d\x02\u0406\u0407\x05J&\x02\u0407\u0408\x07" +
		"N\x02\x02\u0408\u0409\x05\xA6T\x02\u0409\x9F\x03\x02\x02\x02\u040A\u040B" +
		"\x07?\x02\x02\u040B\u040C\x05\xA6T\x02\u040C\u040D\x07@\x02\x02\u040D" +
		"\xA1\x03\x02\x02\x02\u040E\u0413\x05\xA6T\x02\u040F\u0410\x07F\x02\x02" +
		"\u0410\u0412\x05\xA6T\x02\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03" +
		"\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414" +
		"\xA3\x03\x02\x02\x02\u0415\u0413\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0416\u0417\x07q\x02\x02\u0417\u0419\x07?\x02\x02\u0418\u041A\x05" +
		"\xA2R\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
		"\u041B\x03\x02\x02\x02\u041B\u0429\x07@\x02\x02\u041C\u041D\x07-\x02\x02" +
		"\u041D\u041F\x07?\x02\x02\u041E\u0420\x05\xA2R\x02\u041F\u041E\x03\x02" +
		"\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u0429\x07@\x02\x02\u0422\u0423\x07*\x02\x02\u0423\u0425\x07?\x02\x02" +
		"\u0424\u0426\x05\xA2R\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426\x03" +
		"\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0429\x07@\x02\x02\u0428" +
		"\u0416\x03\x02\x02\x02\u0428\u041C\x03\x02\x02\x02\u0428\u0422\x03\x02" +
		"\x02\x02\u0429\xA5\x03\x02\x02\x02\u042A\u042B\bT\x01\x02\u042B\u044A" +
		"\x05\xAEX\x02\u042C\u044A\x05\xA4S\x02\u042D\u042E\x07!\x02\x02\u042E" +
		"\u044A\x05\xB2Z\x02\u042F\u0430\x07?\x02\x02\u0430\u0431\x05\xC6d\x02" +
		"\u0431\u0432\x07@\x02\x02\u0432\u0433\x05\xA6T\x17\u0433\u044A\x03\x02" +
		"\x02\x02\u0434\u0435\t\x05\x02\x02\u0435\u044A\x05\xA6T\x15\u0436\u0437" +
		"\t\x06\x02\x02\u0437\u044A\x05\xA6T\x14\u0438\u044A\x05\xA8U\x02\u0439" +
		"\u043A\x05\xC6d\x02\u043A\u0440\x07k\x02\x02\u043B\u043D\x05\xCAf\x02" +
		"\u043C\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03" +
		"\x02\x02\x02\u043E\u0441\x07q\x02\x02\u043F\u0441\x07!\x02\x02\u0440\u043C" +
		"\x03\x02\x02\x02\u0440\u043F\x03\x02\x02\x02\u0441\u044A\x03\x02\x02\x02" +
		"\u0442\u0443\x05\xB0Y\x02\u0443\u0445\x07k\x02\x02\u0444\u0446\x05\xCA" +
		"f\x02\u0445\u0444\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447" +
		"\x03\x02\x02\x02\u0447\u0448\x07!\x02\x02\u0448\u044A\x03\x02\x02\x02" +
		"\u0449\u042A\x03\x02\x02\x02\u0449\u042C\x03\x02\x02\x02\u0449\u042D\x03" +
		"\x02\x02\x02\u0449\u042F\x03\x02\x02\x02\u0449\u0434\x03\x02\x02\x02\u0449" +
		"\u0436\x03\x02\x02\x02\u0449\u0438\x03\x02\x02\x02\u0449\u0439\x03\x02" +
		"\x02\x02\u0449\u0442\x03\x02\x02\x02\u044A\u049B\x03\x02\x02\x02\u044B" +
		"\u044C\f\x13\x02\x02\u044C\u044D\t\x07\x02\x02\u044D\u049A\x05\xA6T\x14" +
		"\u044E\u044F\f\x12\x02\x02\u044F\u0450\t\b\x02\x02\u0450\u049A\x05\xA6" +
		"T\x13\u0451\u0459\f\x11\x02\x02\u0452\u0453\x07J\x02\x02\u0453\u045A\x07" +
		"J\x02\x02\u0454\u0455\x07I\x02\x02\u0455\u0456\x07I\x02\x02\u0456\u045A" +
		"\x07I\x02\x02\u0457\u0458\x07I\x02\x02\u0458\u045A\x07I\x02\x02\u0459" +
		"\u0452\x03\x02\x02\x02\u0459\u0454\x03\x02\x02\x02\u0459\u0457\x03\x02" +
		"\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u049A\x05\xA6T\x12\u045C\u045D" +
		"\f\x10\x02\x02\u045D\u045E\t\t\x02\x02\u045E\u049A\x05\xA6T\x11\u045F" +
		"\u0460\f\x0E\x02\x02\u0460\u0461\t\n\x02\x02\u0461\u049A\x05\xA6T\x0F" +
		"\u0462\u0463\f\r\x02\x02\u0463\u0464\x07[\x02\x02\u0464\u049A\x05\xA6" +
		"T\x0E\u0465\u0466\f\f\x02\x02\u0466\u0467\x07]\x02\x02\u0467\u049A\x05" +
		"\xA6T\r\u0468\u0469\f\v\x02\x02\u0469\u046A\x07\\\x02\x02\u046A\u049A" +
		"\x05\xA6T\f\u046B\u046C\f\n\x02\x02\u046C\u046D\x07S\x02\x02\u046D\u049A" +
		"\x05\xA6T\v\u046E\u046F\f\t\x02\x02\u046F\u0470\x07T\x02\x02\u0470\u049A" +
		"\x05\xA6T\n\u0471\u0472\f\b\x02\x02\u0472\u0473\x07M\x02\x02\u0473\u0474" +
		"\x05\xA6T\x02\u0474\u0475\x07N\x02\x02\u0475\u0476\x05\xA6T\t\u0476\u049A" +
		"\x03\x02\x02\x02\u0477\u0478\f\x07\x02\x02\u0478\u0479\t\v\x02\x02\u0479" +
		"\u049A\x05\xA6T\x07\u047A\u047B\f\x1B\x02\x02\u047B\u0487\x07G\x02\x02" +
		"\u047C\u0488\x07q\x02\x02\u047D\u0488\x05\xA4S\x02\u047E\u0488\x07-\x02" +
		"\x02\u047F\u0481\x07!\x02\x02\u0480\u0482\x05\xC2b\x02\u0481\u0480\x03" +
		"\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483" +
		"\u0488\x05\xB6\\\x02\u0484\u0485\x07*\x02\x02\u0485\u0488\x05\xCCg\x02" +
		"\u0486\u0488\x05\xBC_\x02\u0487\u047C\x03\x02\x02\x02\u0487\u047D\x03" +
		"\x02\x02\x02\u0487\u047E\x03\x02\x02\x02\u0487\u047F\x03\x02\x02\x02\u0487" +
		"\u0484\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\u049A\x03\x02" +
		"\x02\x02\u0489\u048A\f\x1A\x02\x02\u048A\u048B\x07C\x02\x02\u048B\u048C" +
		"\x05\xA6T\x02\u048C\u048D\x07D\x02\x02\u048D\u049A\x03\x02\x02\x02\u048E" +
		"\u048F\f\x16\x02\x02\u048F\u049A\t\f\x02\x02\u0490\u0491\f\x0F\x02\x02" +
		"\u0491\u0492\x07\x1C\x02\x02\u0492\u049A\x05\xC6d\x02\u0493\u0494\f\x05" +
		"\x02\x02\u0494\u0496\x07k\x02\x02\u0495\u0497\x05\xCAf\x02\u0496\u0495" +
		"\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02" +
		"\u0498\u049A\x07q\x02\x02\u0499\u044B\x03\x02\x02\x02\u0499\u044E\x03" +
		"\x02\x02\x02\u0499\u0451\x03\x02\x02\x02\u0499\u045C\x03\x02\x02\x02\u0499" +
		"\u045F\x03\x02\x02\x02\u0499\u0462\x03\x02\x02\x02\u0499\u0465\x03\x02" +
		"\x02\x02\u0499\u0468\x03\x02\x02\x02\u0499\u046B\x03\x02\x02\x02\u0499" +
		"\u046E\x03\x02\x02\x02\u0499\u0471\x03\x02\x02\x02\u0499\u0477\x03\x02" +
		"\x02\x02\u0499\u047A\x03\x02\x02\x02\u0499\u0489\x03\x02\x02\x02\u0499" +
		"\u048E\x03\x02\x02\x02\u0499\u0490\x03\x02\x02\x02\u0499\u0493\x03\x02" +
		"\x02\x02\u049A\u049D\x03\x02\x02\x02\u049B\u0499\x03\x02\x02\x02\u049B" +
		"\u049C\x03\x02\x02\x02\u049C\xA7\x03\x02\x02\x02\u049D\u049B\x03\x02\x02" +
		"\x02\u049E\u049F\x05\xAAV\x02\u049F\u04A0\x07j\x02\x02\u04A0\u04A1\x05" +
		"\xACW\x02\u04A1\xA9\x03\x02\x02\x02\u04A2\u04B3\x07q\x02\x02\u04A3\u04A5" +
		"\x07?\x02\x02\u04A4\u04A6\x05X-\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5" +
		"\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04B3\x07@\x02" +
		"\x02\u04A8\u04A9\x07?\x02\x02\u04A9\u04AE\x07q\x02\x02\u04AA\u04AB\x07" +
		"F\x02\x02\u04AB\u04AD\x07q\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04B0" +
		"\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02" +
		"\u04AF\u04B1\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B3\x07" +
		"@\x02\x02\u04B2\u04A2\x03\x02\x02\x02\u04B2\u04A3\x03\x02\x02\x02\u04B2" +
		"\u04A8\x03\x02\x02\x02\u04B3\xAB\x03\x02\x02\x02\u04B4\u04B7\x05\xA6T" +
		"\x02\u04B5\u04B7\x05\x80A\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5" +
		"\x03\x02\x02\x02\u04B7\xAD\x03\x02\x02\x02\u04B8\u04B9\x07?\x02\x02\u04B9" +
		"\u04BA\x05\xA6T\x02\u04BA\u04BB\x07@\x02\x02\u04BB\u04CB\x03\x02\x02\x02" +
		"\u04BC\u04CB\x07-\x02\x02\u04BD\u04CB\x07*\x02\x02\u04BE\u04CB\x05`1\x02" +
		"\u04BF\u04CB\x07q\x02\x02\u04C0\u04C1\x05.\x18\x02\u04C1\u04C2\x07G\x02" +
		"\x02\u04C2\u04C3\x07\v\x02\x02\u04C3\u04CB\x03\x02\x02\x02\u04C4\u04C8" +
		"\x05\xC2b\x02\u04C5\u04C9\x05\xCEh\x02\u04C6\u04C7\x07-\x02\x02\u04C7" +
		"\u04C9\x05\xD0i\x02\u04C8\u04C5\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02" +
		"\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA\u04B8\x03\x02\x02\x02\u04CA\u04BC" +
		"\x03\x02\x02\x02\u04CA\u04BD\x03\x02\x02\x02\u04CA\u04BE\x03\x02\x02\x02" +
		"\u04CA\u04BF\x03\x02\x02\x02\u04CA\u04C0\x03\x02\x02\x02\u04CA\u04C4\x03" +
		"\x02\x02\x02\u04CB\xAF\x03\x02\x02\x02\u04CC\u04CD\x05P)\x02\u04CD\u04CE" +
		"\x07G\x02\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04CC\x03\x02\x02\x02" +
		"\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D4\x03\x02\x02\x02\u04D1\u04D3\x05" +
		"f4\x02\u04D2\u04D1\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02\u04D4\u04D2" +
		"\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D7\x03\x02\x02\x02" +
		"\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04D9\x07q\x02\x02\u04D8\u04DA\x05" +
		"\xCAf\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA" +
		"\xB1\x03\x02\x02\x02\u04DB\u04DC\x05\xC2b\x02\u04DC\u04DD\x05\xB4[\x02" +
		"\u04DD\u04DE\x05\xBA^\x02\u04DE\u04E5\x03\x02\x02\x02\u04DF\u04E2\x05" +
		"\xB4[\x02\u04E0\u04E3\x05\xB8]\x02\u04E1\u04E3\x05\xBA^\x02\u04E2\u04E0" +
		"\x03\x02\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3\u04E5\x03\x02\x02\x02" +
		"\u04E4\u04DB\x03\x02\x02\x02\u04E4\u04DF\x03\x02\x02\x02\u04E5\xB3\x03" +
		"\x02\x02\x02\u04E6\u04E8\x07q\x02\x02\u04E7\u04E9\x05\xBE`\x02\u04E8\u04E7" +
		"\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04F1\x03\x02\x02\x02" +
		"\u04EA\u04EB\x07G\x02\x02\u04EB\u04ED\x07q\x02\x02\u04EC\u04EE\x05\xBE" +
		"`\x02\u04ED\u04EC\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F0" +
		"\x03\x02\x02\x02\u04EF\u04EA\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02" +
		"\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F6\x03" +
		"\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F6\x05\xC8e\x02\u04F5" +
		"\u04E6\x03\x02\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\xB5\x03\x02\x02" +
		"\x02\u04F7\u04F9\x07q\x02\x02\u04F8\u04FA\x05\xC0a\x02\u04F9\u04F8\x03" +
		"\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB" +
		"\u04FC\x05\xBA^\x02\u04FC\xB7\x03\x02\x02\x02\u04FD\u0519\x07C\x02\x02" +
		"\u04FE\u0503\x07D\x02\x02\u04FF\u0500\x07C\x02\x02\u0500\u0502\x07D\x02" +
		"\x02\u0501\u04FF\x03\x02\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503\u0501" +
		"\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x03\x02\x02\x02" +
		"\u0505\u0503\x03\x02\x02\x02\u0506\u051A\x05N(\x02\u0507\u0508\x05\xA6" +
		"T\x02\u0508\u050F\x07D\x02\x02\u0509\u050A\x07C\x02\x02\u050A\u050B\x05" +
		"\xA6T\x02\u050B\u050C\x07D\x02\x02\u050C\u050E\x03\x02\x02\x02\u050D\u0509" +
		"\x03\x02\x02\x02\u050E\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02" +
		"\u050F\u0510\x03\x02\x02\x02\u0510\u0516\x03\x02\x02\x02\u0511\u050F\x03" +
		"\x02\x02\x02\u0512\u0513\x07C\x02\x02\u0513\u0515\x07D\x02\x02\u0514\u0512" +
		"\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02" +
		"\u0516\u0517\x03\x02\x02\x02\u0517\u051A\x03\x02\x02\x02\u0518\u0516\x03" +
		"\x02\x02\x02\u0519\u04FE\x03\x02\x02\x02\u0519\u0507\x03\x02\x02\x02\u051A" +
		"\xB9\x03\x02\x02\x02\u051B\u051D\x05\xD0i\x02\u051C\u051E\x05\"\x12\x02" +
		"\u051D\u051C\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E\xBB\x03" +
		"\x02\x02\x02\u051F\u0520\x05\xC2b\x02\u0520\u0521\x05\xCEh\x02\u0521\xBD" +
		"\x03\x02\x02\x02\u0522\u0523\x07J\x02\x02\u0523\u0526\x07I\x02\x02\u0524" +
		"\u0526\x05\xCAf\x02\u0525\u0522\x03\x02\x02\x02\u0525\u0524\x03\x02\x02" +
		"\x02\u0526\xBF\x03\x02\x02\x02\u0527\u0528\x07J\x02\x02\u0528\u052B\x07" +
		"I\x02\x02\u0529\u052B\x05\xC2b\x02\u052A\u0527\x03\x02\x02\x02\u052A\u0529" +
		"\x03\x02\x02\x02\u052B\xC1\x03\x02\x02\x02\u052C\u052D\x07J\x02\x02\u052D" +
		"\u052E\x05\xC4c\x02\u052E\u052F\x07I\x02\x02\u052F\xC3\x03\x02\x02\x02" +
		"\u0530\u0535\x05\xC6d\x02\u0531\u0532\x07F\x02\x02\u0532\u0534\x05\xC6" +
		"d\x02\u0533\u0531\x03\x02\x02\x02\u0534\u0537\x03\x02\x02\x02\u0535\u0533" +
		"\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\xC5\x03\x02\x02\x02" +
		"\u0537\u0535\x03\x02\x02\x02\u0538\u053A\x05f4\x02\u0539\u0538\x03\x02" +
		"\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053D\x03\x02\x02\x02\u053B" +
		"\u053E\x05P)\x02\u053C\u053E\x05\xC8e\x02\u053D\u053B\x03\x02\x02\x02" +
		"\u053D\u053C\x03\x02\x02\x02\u053E\u0543\x03\x02\x02\x02\u053F\u0540\x07" +
		"C\x02\x02\u0540\u0542\x07D\x02\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0545" +
		"\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02" +
		"\u0544\xC7\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\u0547\t\r" +
		"\x02\x02\u0547\xC9\x03\x02\x02\x02\u0548\u0549\x07J\x02\x02\u0549\u054E" +
		"\x05R*\x02\u054A\u054B\x07F\x02\x02\u054B\u054D\x05R*\x02\u054C\u054A" +
		"\x03\x02\x02\x02\u054D\u0550\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02" +
		"\u054E\u054F\x03\x02\x02\x02\u054F\u0551\x03\x02\x02\x02\u0550\u054E\x03" +
		"\x02\x02\x02\u0551\u0552\x07I\x02\x02\u0552\xCB\x03\x02\x02\x02\u0553" +
		"\u055A\x05\xD0i\x02\u0554\u0555\x07G\x02\x02\u0555\u0557\x07q\x02\x02" +
		"\u0556\u0558\x05\xD0i\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03" +
		"\x02\x02\x02\u0558\u055A\x03\x02\x02\x02\u0559\u0553\x03\x02\x02\x02\u0559" +
		"\u0554\x03\x02\x02\x02\u055A\xCD\x03\x02\x02\x02\u055B\u055C\x07*\x02" +
		"\x02\u055C\u0560\x05\xCCg\x02\u055D\u055E\x07q\x02\x02\u055E\u0560\x05" +
		"\xD0i\x02\u055F\u055B\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560" +
		"\xCF\x03\x02\x02\x02\u0561\u0563\x07?\x02\x02\u0562\u0564\x05\xA2R\x02" +
		"\u0563\u0562\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0565\x03" +
		"\x02\x02\x02\u0565\u0566\x07@\x02\x02\u0566\xD1\x03\x02\x02\x02\xAD\xD3" +
		"\xD8\xDE\xE6\xEF\xF4\xFB\u0102\u0105\u010C\u0116\u011A\u011F\u0123\u0127" +
		"\u0131\u0139\u013F\u0146\u014D\u0151\u0154\u0157\u0160\u0166\u016B\u016E" +
		"\u0174\u017A\u017E\u0186\u018F\u0196\u019C\u01A0\u01AB\u01B4\u01B9\u01BF" +
		"\u01C3\u01CF\u01DA\u01DF\u01E8\u01F0\u01FA\u0203\u020B\u0210\u0218\u021D" +
		"\u0227\u0231\u0237\u023E\u0243\u024B\u024F\u0251\u0257\u025C\u0260\u0267" +
		"\u0269\u0270\u0275\u027E\u0283\u0286\u028B\u0294\u02A0\u02A9\u02B4\u02B7" +
		"\u02BE\u02C8\u02D0\u02D3\u02D6\u02E3\u02EB\u02F0\u02F8\u02FC\u0300\u0304" +
		"\u0306\u030A\u0310\u031B\u0325\u032A\u0333\u0338\u033B\u0342\u034B\u0362" +
		"\u0365\u0368\u0370\u0374\u037C\u0382\u038D\u0396\u039B\u03A5\u03AC\u03B9" +
		"\u03C2\u03CB\u03D1\u03DC\u03E1\u03E6\u03EB\u03EF\u03F3\u03F7\u03F9\u03FD" +
		"\u0402\u0413\u0419\u041F\u0425\u0428\u043C\u0440\u0445\u0449\u0459\u0481" +
		"\u0487\u0496\u0499\u049B\u04A5\u04AE\u04B2\u04B6\u04C8\u04CA\u04CF\u04D4" +
		"\u04D9\u04E2\u04E4\u04E8\u04ED\u04F1\u04F5\u04F9\u0503\u050F\u0516\u0519" +
		"\u051D\u0525\u052A\u0535\u0539\u053D\u0543\u054E\u0557\u0559\u055F\u0563";
	public static readonly _serializedATN: string = Utils.join(
		[
			Java7Parser._serializedATNSegment0,
			Java7Parser._serializedATNSegment1,
			Java7Parser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java7Parser.__ATN) {
			Java7Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Java7Parser._serializedATN));
		}

		return Java7Parser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Java7Parser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Java7Parser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java7Parser.SEMI, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java7Parser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java7Parser.SEMI, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_modifier; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Java7Parser.CLASS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.EXTENDS, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java7Parser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(Java7Parser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.BITAND);
		} else {
			return this.getToken(Java7Parser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeBound; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(Java7Parser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Java7Parser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(Java7Parser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classBody; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_methodBody; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeTypeOrVoid; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeTypeOrVoid) {
			listener.enterTypeTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeTypeOrVoid) {
			listener.exitTypeTypeOrVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeTypeOrVoid) {
			return visitor.visitTypeTypeOrVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_genericConstructorDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterGenericConstructorDeclaration) {
			listener.enterGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitGenericConstructorDeclaration) {
			listener.exitGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) {
			return visitor.visitGenericConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody: BlockContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceBodyDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceBodyDeclaration) {
			listener.enterInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceBodyDeclaration) {
			listener.exitInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(Java7Parser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Java7Parser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_interfaceMethodModifier; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterGenericInterfaceMethodDeclaration) {
			listener.enterGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitGenericInterfaceMethodDeclaration) {
			listener.exitGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) {
			return visitor.visitGenericInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.IDENTIFIER);
		} else {
			return this.getToken(Java7Parser.IDENTIFIER, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.DOT);
		} else {
			return this.getToken(Java7Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.QUESTION, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(Java7Parser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_lastFormalParameter; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLastFormalParameter) {
			listener.enterLastFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLastFormalParameter) {
			listener.exitLastFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.IDENTIFIER);
		} else {
			return this.getToken(Java7Parser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.DOT);
		} else {
			return this.getToken(Java7Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java7Parser.AT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotation; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Java7Parser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_elementValue; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java7Parser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(Java7Parser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationTypeDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationTypeBody; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationTypeElementRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationTypeElementRest) {
			listener.enterAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationTypeElementRest) {
			listener.exitAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) {
			listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) {
			listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationMethodRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationMethodRest) {
			listener.enterAnnotationMethodRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationMethodRest) {
			listener.exitAnnotationMethodRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_annotationConstantRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterAnnotationConstantRest) {
			listener.enterAnnotationConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitAnnotationConstantRest) {
			listener.exitAnnotationConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(Java7Parser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java7Parser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_block; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_localTypeDeclaration; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLocalTypeDeclaration) {
			listener.enterLocalTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLocalTypeDeclaration) {
			listener.exitLocalTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLocalTypeDeclaration) {
			return visitor.visitLocalTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel: BlockContext;
	public _statementExpression: ExpressionContext;
	public _identifierLabel: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.COLON, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RPAREN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(Java7Parser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_catchClause; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.BITOR);
		} else {
			return this.getToken(Java7Parser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_catchType; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(Java7Parser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_resourceSpecification; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.SEMI);
		} else {
			return this.getToken(Java7Parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_resources; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Java7Parser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_resource; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression: ExpressionContext;
	public _enumConstantName: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(Java7Parser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.SEMI);
		} else {
			return this.getToken(Java7Parser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_forControl; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_forInit; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java7Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_parExpression; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_expressionList; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_methodCall; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix: Token;
	public _bop: Token;
	public _postfix: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RBRACK, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LPAREN, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RPAREN, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.MOD, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LT);
		} else {
			return this.getToken(Java7Parser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.GT);
		} else {
			return this.getToken(Java7Parser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.INSTANCEOF, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.NOTEQUAL, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BITAND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.MOD_ASSIGN, 0); }
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.COLONCOLON, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(Java7Parser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.IDENTIFIER);
		} else {
			return this.getToken(Java7Parser.IDENTIFIER, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_primary; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classType; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_creator; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.IDENTIFIER);
		} else {
			return this.getToken(Java7Parser.IDENTIFIER, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.DOT);
		} else {
			return this.getToken(Java7Parser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_createdName; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(Java7Parser.IDENTIFIER, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_innerCreator; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterInnerCreator) {
			listener.enterInnerCreator(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitInnerCreator) {
			listener.exitInnerCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_explicitGenericInvocation; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterExplicitGenericInvocation) {
			listener.enterExplicitGenericInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitExplicitGenericInvocation) {
			listener.exitExplicitGenericInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
			listener.enterNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
			listener.exitNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
			return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java7Parser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(Java7Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeList; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.LBRACK);
		} else {
			return this.getToken(Java7Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.RBRACK);
		} else {
			return this.getToken(Java7Parser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeType; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java7Parser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(Java7Parser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java7Parser.COMMA);
		} else {
			return this.getToken(Java7Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_superSuffix; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterSuperSuffix) {
			listener.enterSuperSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitSuperSuffix) {
			listener.exitSuperSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) {
			return visitor.visitSuperSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(Java7Parser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) {
			listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) {
			listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) {
			return visitor.visitExplicitGenericInvocationSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java7Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java7Parser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java7Parser.RULE_arguments; }
	// @Override
	public enterRule(listener: Java7ParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Java7ParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java7ParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


