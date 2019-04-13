
import java.lang.Long;
import java.lang.Deprecated;
import java.util.Map;
import com.fulton_shaw.mock.RequestMapping;

/**
 * class Description:
 *     modifiers
 *     package:
 *     imports:{
 *         
 *     }
 */
@Deprecated
public class Test{
    public static void main(String[] args){
        
    }

    /**
     * this is jsut some comment
     * @param i
     * @return
     */
    @RequestMapping
    public Long getNumber(Long i){
        return i+1;
    }

    static class InternalTest{
        public Long getInstance(){
            return 0L;
        }
    }

}


class NonPublicClass{
    public void  main(){
        return;
    }
}
