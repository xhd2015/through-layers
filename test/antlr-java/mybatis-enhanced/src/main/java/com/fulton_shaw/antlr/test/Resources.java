package com.fulton_shaw.antlr.test;

import javax.annotation.Resource;

/**
 * inlined source
 * @author xiaohuadong
 * @date 2019/04/14
 */
public class Resources {

    public static String getStringSource(String name){
        try {
            name = name.toUpperCase();
            if(!name.endsWith("_SOURCE")){
                name = name + "_SOURCE";
            }
            return (String)Resources.class.getDeclaredField(name.toUpperCase()).get(null);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public static String SIMPLE_SOURCE = "package simple;\n" +
            "\n" +
            "import java.util.Map;\n" +
            "import java.util.Arrays;\n" +
            "\n" +
            "/**\n" +
            " * class Simple for test\n" +
            " */\n" +
            "public class Simple{\n" +
            "    private String name;\n" +
            "    private Map<String,String> info;\n" +
            "    public static void main(String[] args){\n" +
            "        System.out.println(Arrays.asList(args));\n" +
            "    }\n" +
            "    /**\n" +
            "     * get name of this simple\n" +
            "     */\n" +
            "    public String getName(){\n" +
            "        return this.name;\n" +
            "    }\n" +
            "\n" +
            "}";
}
