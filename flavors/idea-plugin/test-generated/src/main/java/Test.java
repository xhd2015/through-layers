import javax.sql.DataSource;
import java.util.List;

public abstract class Test{

    private static DataSource dataSource;
    public static void main(String[] args){
        String s = "simple:fixme";
        String s2 = "simple:hello";

        exec[dataSource] List<Long> ids = begin
        SELECT  a.id   FROM t_ad_info a WHERE a.name LIKE CONCAT(#{args[0]},'%');
        end;
        System.out.println("ids = " + ids);

    }

    public abstract String getName(Long id);


}