package com.fulton_shaw.antlr.mybatis.demo;

import java.util.List;


public class InlineSqlMapper{

    List<User> query(UserMatrix matrix){
        exec[mysqlDatasource] List<User> users =
        begin
            SELECT * FROM t_user_info where id=${id} and name = #{name} and t_ad_info.id > 0;
         end;
         return users;
    }
}