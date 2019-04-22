package com.fulton_shaw.idea.plugin.x1.action.util;

import com.intellij.terminal.JBTerminalPanel;
import com.intellij.terminal.JBTerminalSystemSettingsProviderBase;
import com.jediterm.pty.PtyProcessTtyConnector;
import com.jediterm.terminal.*;
import com.jediterm.terminal.emulator.Emulator;
import com.jediterm.terminal.emulator.JediEmulator;
import com.jediterm.terminal.model.JediTerminal;
import com.jediterm.terminal.model.StyleState;
import com.jediterm.terminal.model.TerminalTextBuffer;
import com.pty4j.PtyProcess;
import org.junit.Test;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/22
 */
public class JTermTest {

    public static void main(String[] args) throws IOException {
        JTermTest test = new JTermTest();
        test.testJTerm();
    }
    @Test
    public void testJTerm() throws IOException {
        PtyProcess ptyProcess = PtyProcess.exec(new String[]{"cmd.exe"});
        TtyConnector ttyConnector = new PtyProcessTtyConnector(ptyProcess, StandardCharsets.UTF_8);
        TerminalDataStream terminalDataStream = new TtyBasedArrayDataStream(ttyConnector);

        JBTerminalSystemSettingsProviderBase settingsProviderBase = new JBTerminalSystemSettingsProviderBase();
        TerminalColor terminalColor = new TerminalColor(0, 0, 0);
        TextStyle textStyle = new TextStyle(terminalColor, terminalColor);
        StyleState styleState = new StyleState(textStyle);
        TerminalTextBuffer terminalTextBuffer = new TerminalTextBuffer(25, 80, styleState);
        TerminalDisplay terminalDisplay = new JBTerminalPanel(settingsProviderBase, terminalTextBuffer, styleState);
        Terminal terminal = new JediTerminal(terminalDisplay, terminalTextBuffer, styleState);

        Emulator emulator = new JediEmulator(terminalDataStream, terminal);

    }
}
