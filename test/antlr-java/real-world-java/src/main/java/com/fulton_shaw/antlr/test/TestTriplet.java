package com.fulton_shaw.antlr.test;

import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.Parser;

/**
 * @author xiaohuadong
 * @date 2019/04/14
 */
public class TestTriplet<T extends Lexer,P extends Parser> {
    public T lexer;
    public CommonTokenStream tokens;
    public P parser;
}
