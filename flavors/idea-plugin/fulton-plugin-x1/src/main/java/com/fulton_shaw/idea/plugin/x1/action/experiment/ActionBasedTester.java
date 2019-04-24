package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.terminal.JBTerminalSystemSettingsProviderBase;
import com.intellij.terminal.JBTerminalWidget;
import com.jediterm.pty.PtyProcessTtyConnector;
import com.jediterm.terminal.TtyConnector;
import com.jediterm.terminal.ui.TerminalPanel;
import com.pty4j.PtyProcess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.IOException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/22
 */
public class ActionBasedTester extends AnAction {
    private static final Logger LOG = LoggerFactory.getLogger(ActionBasedTester.class);


    private static String RUNNING_TEST =
            "testCreateTerminalWidget"
//            "testFromScratch"
            ;


    @Override
    public void actionPerformed(AnActionEvent e) {
        try {
            Method method = getClass().getDeclaredMethod(RUNNING_TEST, AnActionEvent.class);
            method.invoke(this, e);
        } catch (Exception e1) {
            throw new RuntimeException(e1);
        }
    }

    private void testFromScratch(AnActionEvent e) {
        JFrame frame = new JFrame("test");
        frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

        JPanel panel = new JPanel(new BorderLayout());

        panel.setPreferredSize(new Dimension(500, 500));

        JLabel label = new JLabel("hello world>");
        panel.add(label, BorderLayout.PAGE_START);


        label.setFocusable(true);
        label.addFocusListener(new FocusAdapter() {
            @Override
            public void focusGained(FocusEvent e) {
                LOG.info("focusevent gained:{}", e);
                // necessary, only when focused can the input method be invoken
                label.requestFocusInWindow();
            }
        });

        // not input method, just key listener, that works fine
//        label.addInputMethodListener(new InputMethodListener() {
//            @Override
//            public void inputMethodTextChanged(InputMethodEvent event) {
//                LOG.debug("inputMethodTextChanged:{}", event);
//            }
//
//            @Override
//            public void caretPositionChanged(InputMethodEvent event) {
//                LOG.debug("caretPositionChanged:{}", event);
//            }
//        });
        label.addKeyListener(new KeyAdapter() {
            @Override
            public void keyTyped(KeyEvent e) {
                LOG.debug("key typed:{}", e);
                char ch = e.getKeyChar();
                label.setText(label.getText() + ch);
                super.keyTyped(e);
            }

            @Override
            public void keyPressed(KeyEvent e) {
                LOG.debug("key pressed:{}", e);
                super.keyPressed(e);
            }
        });

        JButton button = new JButton("hello world");
        panel.add(button, BorderLayout.CENTER);

        // not necessary
//        label.setFocusable(true);

        frame.getContentPane().add(panel, BorderLayout.CENTER);


        frame.pack();
        frame.setVisible(true);

    }

    /**
     * ttyConnector is used to decouple view and terminal
     * @param e
     * @throws IOException
     */
    private void testCreateTerminalWidget(AnActionEvent e) throws IOException {


        PtyProcess ptyProcess = PtyProcess.exec(new String[]{"cmd"});
        TtyConnector ttyConnector = new PtyProcessTtyConnector(ptyProcess, StandardCharsets.UTF_8);

        JBTerminalSystemSettingsProviderBase providerBase = new JBTerminalSystemSettingsProviderBase();


        JFrame jFrame = new JFrame("test")
//        {{
//            enableEvents(AWTEvent.INPUT_METHOD_EVENT_MASK);
//        }}
                ;

        jFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        JBTerminalWidget jbTerminalWidget = new JBTerminalWidget(e.getProject(), providerBase, e.getProject());
        jbTerminalWidget.createTerminalSession(ttyConnector);

        jbTerminalWidget.setFocusable(true);
        jbTerminalWidget.addFocusListener(new FocusAdapter() {
            @Override
            public void focusGained(FocusEvent e) {
                LOG.info("widget focus:{}", e);
                jbTerminalWidget.requestFocusInWindow();
            }
        });

        TerminalPanel terminalPanel = jbTerminalWidget.getTerminalPanel();
        terminalPanel.setFocusable(true);
        terminalPanel.addFocusListener(new FocusAdapter() {
            @Override
            public void focusGained(FocusEvent e) {
                LOG.info("terminal focus:{}", e);
                terminalPanel.requestFocusInWindow();
            }
        });
        // do when changed
//        jbTerminalWidget.getComponent().revalidate();
        // running
        if (jbTerminalWidget.getTtyConnector().isConnected()) {
            jbTerminalWidget.getTerminalPanel().initKeyHandler();

            jFrame.getContentPane().add(jbTerminalWidget, BorderLayout.CENTER);
            jFrame.pack();
            jFrame.setVisible(true);
            jbTerminalWidget.getTerminalPanel().requestFocusInWindow();
            new Thread(new Runnable() {
                @Override
                public void run() {
                    jbTerminalWidget.getTerminalStarter().start();
                }
            }).start();
        } else {
            LOG.error("tty is not connected");
        }
//        terminalPanel.addKeyListener(new KeyAdapter() {
//            @Override
//            public void keyTyped(KeyEvent e) {
//                LOG.info("terminal key typed:{}", e);
//                super.keyTyped(e);
//            }
//        });
//        jbTerminalWidget.getTerminal().writeCharacters("hello world");


    }
}
