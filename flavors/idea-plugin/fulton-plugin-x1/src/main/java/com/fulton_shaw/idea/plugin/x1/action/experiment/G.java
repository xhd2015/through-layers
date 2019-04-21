package com.fulton_shaw.idea.plugin.x1.action.experiment;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * global debug
 * @author xiaohuadong
 * @date 2019/04/21
 */
public class G {
    private static ConcurrentMap<String,Object> map = new ConcurrentHashMap<>();

    public static <T> T get(String key){
        return (T) map.get(key);
    }
    public static void put(String key,Object v){
        map.putIfAbsent(key, v);
    }
}
