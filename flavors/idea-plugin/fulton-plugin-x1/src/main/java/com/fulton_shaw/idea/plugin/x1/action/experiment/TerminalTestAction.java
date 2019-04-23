package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.terminal.JBTerminalSystemSettingsProviderBase;
import com.intellij.terminal.JBTerminalWidget;
import com.intellij.util.EnvironmentUtil;
import com.jediterm.pty.PtyProcessTtyConnector;
import com.jediterm.terminal.TtyConnector;
import com.pty4j.PtyProcess;

import javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

/**
 * @author xiaohuadong
 * @date 2019/04/22
 */
public class TerminalTestAction extends AnAction {

    /**
     * for cmd:  set isConsole, isCygwin to false
     * for cygwin/bash: set isCygwin  to true, and the command line to be : Drive:/path/to/cygwin/bin/bash.exe --login -i
     *      -i is recommended be at the end
     *  for powershell:
     *  for ssh:
     *
     * @param e
     */
    @Override
    public void actionPerformed(AnActionEvent e) {
        Map<String, String> originalEnv = EnvironmentUtil.getEnvironmentMap();
        try {
            Map<String, String> env =
                    originalEnv
//                    new HashMap<>()
                    ;
//            env.put("Path", originalEnv.get("Path"));
            // for Windows, do not set console flag, or you will:1.not see the color when invoking cygwin or powershell 2.backspace generates one line

            // this will open another window, not cygwin itself
//            String[] cmd = new String[]{
//                    "D:/installed/cygwin/bin/mintty.exe", "-i", "/Cygwin-Terminal.ico", "-"
//            };

            // when running cygwin bash, do not use WinPtyPorcess,that is, set isCygwin=true,else control characters will confuse it
            // and note that "--login", "-i", the order is important, you can try that in a cmd, it will report long option error
            String[] cmd = {
                    "D:\\installed\\cygwin\\bin\\bash.exe",
                    "--login","-i",
            };
//            String[] cmd = new String[]{"cmd"};
            boolean isCygwin = true;
            boolean isConsole = false;
            PtyProcess ptyProcess = PtyProcess.exec(cmd, env, ".", isConsole, isCygwin, null
            );
            TtyConnector ttyConnector = new PtyProcessTtyConnector(ptyProcess, StandardCharsets.UTF_8);

            if (!ttyConnector.isConnected()) {
                ttyConnector.close();
                return;
            }

            JBTerminalWidget widget = new JBTerminalWidget(e.getProject(), new JBTerminalSystemSettingsProviderBase(), e.getProject());
            widget.createTerminalSession(ttyConnector);
            widget.getTerminalPanel().init();
            widget.getTerminalPanel().initKeyHandler();


            JFrame frame = new JFrame("test");
            frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

            frame.getContentPane().add(widget, BorderLayout.CENTER);
            frame.pack();
            frame.setVisible(true);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    widget.getTerminalStarter().start();
                }
            }).start();


            String[] testCmds =  new String[]{
                    "echo yes",
                    "echo no",
                    "echo end"
            };

            for (String testCmd : testCmds) {
                widget.getTerminalStarter().sendString(testCmd);
                widget.getTerminalStarter().sendString("\n");
            }
        } catch (IOException e1) {
            throw new RuntimeException(e1);
        }

    }

    @Override
    public boolean isDumbAware() {
        return true;
    }
}
