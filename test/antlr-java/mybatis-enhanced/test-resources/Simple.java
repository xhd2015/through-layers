package simple;

import java.util.Map;
import java.util.Arrays;

/**
 * class Simple for test
 */
public class Simple{
    private String name;
    private Map<String,String> info;
    public static void main(String[] args){
        System.out.println(Arrays.asList(args));
    }
    /**
     * get name of this simple
     */
    public String getName(){
        return this.name;
    }

}