package com.fulton_shaw.idea.plugin.x1.action.experiment;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
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

import java.nio.charset.StandardCharsets;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/22
 */
public class TerminalTextAction extends AnAction {
    @Override
    public void actionPerformed(AnActionEvent e) {
        try {
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
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
}
