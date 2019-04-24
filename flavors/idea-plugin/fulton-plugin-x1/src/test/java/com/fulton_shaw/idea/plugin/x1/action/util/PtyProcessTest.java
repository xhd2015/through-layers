package com.fulton_shaw.idea.plugin.x1.action.util;

import com.fulton_shaw.common.util.data.DataUtils;
import com.fulton_shaw.idea.plugin.x1.action.experiment.G;
import com.pty4j.PtyProcess;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.StandardCharsets;
import java.util.Map;

/**
 * @author xiaohuadong
 * @date 2019/04/21
 */
public class PtyProcessTest {
    private static final Logger LOG = LoggerFactory.getLogger(PtyProcessTest.class);

    public static void main(String[] args) throws IOException, InterruptedException {
        new PtyProcessTest().testPty();
    }

    @Test
    public void testPty() throws IOException, InterruptedException {
        // The command to run in a PTY...
        String[] cmd = {"cmd"};
// The initial environment to pass to the PTY child process...
        Map<String,String> env = DataUtils.buildMapFromList("NAME","xiaohuadong");
        PtyProcess pty = PtyProcess.exec(cmd, env,".",true);

        OutputStream os = pty.getOutputStream();
        InputStream is = pty.getInputStream();

// ... work with the streams ...
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, StandardCharsets.UTF_8));
        BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));

        G.put("writer", writer);
        G.put("reader", reader);

        BufferedReader sysReader = new BufferedReader( new InputStreamReader(System.in));
        String inline = null;
        while ( reader.ready() && (inline=reader.readLine())!=null){
            System.out.println(inline);
        }
        while (true){
            String line = sysReader.readLine();
            if(line==null){
                break;
            }
            writer.write(line);
            writer.newLine();
            writer.flush();

            ReadableByteChannel channel = Channels.newChannel(is);
            ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
            int n = channel.read(byteBuffer);
            if(n!=0 && n!=-1){
                byteBuffer.flip();
                while (byteBuffer.hasRemaining()){
                    byte ch = byteBuffer.get();
                    System.out.print((char)ch);
                }
            }

//            while ( reader.ready() && (inline=reader.readLine())!=null){
//                System.out.println(inline);
//            }
        }


// wait until the PTY child process terminates...
        int result = pty.waitFor();

// free up resources.
        pty.destroy();
    }
}
