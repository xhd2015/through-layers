package com.fulton_shaw.antlr.test;

import org.antlr.v4.runtime.*;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;

/**
 * @author xiaohuadong
 * @date 2019/04/14
 */
public class Utils {
    private Utils() {
    }

    public static InputStream getResourcesStream(String name) {
        if (name != null) {
            return new ByteArrayInputStream(Resources.getStringSource(name).getBytes());
        }
        return null;
    }


    public static <T extends Lexer, P extends Parser> TestTriplet<T, P> createTriplet(InputStream stream, Class<T> clz, Class<P> pclz) {
        TestTriplet<T, P> triplet = new TestTriplet<T, P>();
        try {
            CharStream input = CharStreams.fromStream(stream);
            triplet.lexer = (T) clz.getConstructor(CharStream.class).newInstance(input);
            triplet.tokens = new CommonTokenStream(triplet.lexer);
            triplet.parser = (P) pclz.getConstructor(TokenStream.class).newInstance(triplet.tokens);
            return triplet;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static <T extends Lexer> T createLexer(Class<T> clz, CharStream stream) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        return (T) clz.getConstructor(CharStream.class).newInstance(stream);
    }

    public static String capitalize(String s) {
        return s != null && s.length() > 0 ? (Character.toUpperCase(s.charAt(0)) + s.substring(1)) : s;
    }

    public static String decapitalize(String s) {
        return s != null && s.length() > 0 ? (Character.toLowerCase(s.charAt(0)) + s.substring(1)) : s;
    }
}
