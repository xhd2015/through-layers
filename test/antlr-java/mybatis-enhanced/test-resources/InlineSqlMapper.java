package com.fulton_shaw.antlr.mybatis.demo;

import java.util.List;


public class InlineSqlMapper{

    List<User> query(UserMatrix matrix){
        exec[mysqlDatasource] List<Uer> users =  
        begin
            SELECT * FROM t_ad_info where name = #{name};
         end;
         return users;
    }
}