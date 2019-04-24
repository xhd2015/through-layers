package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.fulton_shaw.common.lang.exception.GroupException;
import com.google.common.base.Predicate;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.editor.colors.EditorColorsManager;
import com.intellij.openapi.editor.colors.EditorColorsScheme;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.terminal.JBTerminalSystemSettingsProviderBase;
import com.intellij.terminal.JBTerminalWidget;
import com.intellij.util.EnvironmentUtil;
import com.jediterm.pty.PtyProcessTtyConnector;
import com.jediterm.terminal.TtyConnector;
import com.jediterm.terminal.TtyConnectorWaitFor;
import com.pty4j.PtyProcess;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.Executors;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class StandaloneTerminalWidgetWrapper {
    public static final String[] SPECIAL_KEYS = new String[]{"SELECTED", "PROJECT_ROOT", "WORKSPACE_ROOT"};
    private FultonTerminalOptionsProvider.SingleTabState state;
    private JBTerminalWidget widget;
    private TtyConnectorWaitFor waitFor;
    private LinkedList<Runnable> exitCallback;


    public StandaloneTerminalWidgetWrapper(Project project, VirtualFile virtualFile, FultonTerminalOptionsProvider.SingleTabState state) {
        exitCallback = new LinkedList<>();
        this.state = state;
        if (state.getShellPath() == null) {
            return;
        }
        try {
            Map<String, String> env = new HashMap<>(EnvironmentUtil.getEnvironmentMap());
            for (String specialKey : SPECIAL_KEYS) {
                env.put(specialKey, parseDirectory(project, virtualFile, "${" + specialKey + "}"));
            }
            java.util.List<String> commands = new ArrayList<>();
            commands.add(state.getShellPath());
            String options = state.getShellOptions();
            if (options != null && options.length() > 0) {
                String[] split = options.split("[ \t]+");
                for (String s : split) {
                    if (StringUtils.isNotEmpty(s)) {
                        commands.add(s);
                    }
                }
            }
            String[] cmd = commands.toArray(new String[commands.size()]);

            boolean isCygwin = state.isCygwin();
            boolean isConsole = false;
            String dir = parseDirectory(project, virtualFile, state.getStartDirectory());
            PtyProcess ptyProcess = PtyProcess.exec(cmd, env, dir, isConsole, isCygwin, null);
            TtyConnector ttyConnector = new PtyProcessTtyConnector(ptyProcess, StandardCharsets.UTF_8);

            if (!ttyConnector.isConnected()) {
                ttyConnector.close();
                return;
            }
            // set the  color scheme
            JBTerminalSystemSettingsProviderBase settingsProvider = new JBTerminalSystemSettingsProviderBase() {{
                if (state.getColorScheme() != null) {
                    EditorColorsScheme scheme = EditorColorsManager.getInstance().getScheme(state.getColorScheme());
                    this.myColorScheme.updateGlobalScheme(scheme);
                }
            }};

            // add to widget
            widget = new JBTerminalWidget(project, settingsProvider, project);
            widget.createTerminalSession(ttyConnector);
            widget.getTerminalPanel().init();
            widget.getTerminalPanel().initKeyHandler();

            new Thread(new Runnable() {
                @Override
                public void run() {
                    widget.getTerminalStarter().start();
                }
            }).start();

            // dispose the frame on exit
            waitFor = new TtyConnectorWaitFor(ttyConnector, Executors.newSingleThreadExecutor());
            waitFor.setTerminationCallback(new Predicate<Integer>() {
                public boolean apply(Integer exitCode) {
                    widget.dispose();
                    GroupException groupException = new GroupException();
                    if (exitCallback != null) {
                        for (Runnable runnable : exitCallback) {
                            try {
                                runnable.run();
                            } catch (Exception e) {
                                groupException.addException(e);
                            }
                        }
                    }
                    groupException.throwUncheckedIfAny("termination callback failed");
                    return true;
                }
            });
            // run startup script
            String script = state.getStartupScript();
            if (StringUtils.isNotBlank(script)) {
                widget.getTerminalStarter().sendString(script);
            }
            // no matter what the previous script is, send a new line to end these all
            widget.getTerminalStarter().sendString(" \n");
        } catch (IOException e1) {
            throw new RuntimeException("error creating PTY, check if your shell path and other configurations are correct.",e1);
        }
    }

    public void showInFrame() {
        // add to frame
        JFrame frame = new JFrame(state.getTitle());
        frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        frame.getContentPane().add(widget, BorderLayout.CENTER);
        // apply saved width & height
        if (state.getWindowHeight() != null && state.getWindowWidth() != null) {
            Dimension dimension = new Dimension();
            dimension.setSize(state.getWindowWidth(), state.getWindowHeight());
            frame.setPreferredSize(dimension);
        }
        // apply X Y
        if (state.getWindowX() != null && state.getWindowY() != null) {
            frame.setLocation(state.getWindowX(), state.getWindowY());
        }
        frame.pack();
        frame.setVisible(true);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                // save window size
                Dimension size = frame.getSize();
                state.setWindowHeight(size.getHeight());
                state.setWindowWidth(size.getWidth());
                state.setWindowX(frame.getX());
                state.setWindowY(frame.getY());
                super.windowClosing(e);
            }
        });

        waitFor.setTerminationCallback(new Predicate<Integer>() {
            @Override
            public boolean apply(Integer integer) {
                frame.dispose();
                return true;
            }
        });

        // dispose the frame on exit
        addTerminationCallback(new Runnable() {
            @Override
            public void run() {
                frame.dispose();
            }
        });
    }

    public void addTerminationCallback(Runnable callback) {
        if (this.waitFor != null) {
            this.exitCallback.add(callback);
        }
    }


    public JBTerminalWidget getWidget() {
        return widget;
    }

    public FultonTerminalOptionsProvider.SingleTabState getState() {
        return state;
    }

    private static String parseDirectory(Project project, VirtualFile virtualFile, String path) {
        if (StringUtils.isBlank(path)) {
            path = "${SELECTED}";
        }
        if (path.startsWith("${") && path.endsWith("}")) {
            String variable = path.substring(2, path.length() - 1);
            path = null;
            if ("SELECTED".equals(variable)) {
                if (virtualFile != null) {
                    path = virtualFile.getCanonicalPath();
                }
            } else if ("PROJECT_ROOT".equals(variable)) {
                VirtualFile projectFile = project.getProjectFile();
                if (projectFile != null) {
                    path = projectFile.getCanonicalPath();
                }
            } else if ("WORKSPACE_ROOT".equals(variable)) {
                VirtualFile workspaceFile = project.getWorkspaceFile();
                if (workspaceFile != null) {
                    path = workspaceFile.getCanonicalPath();
                }
            } else {
                path = System.getProperty(variable);
                if (path == null) {
                    path = System.getenv(variable);
                }
            }
        }
        if (path == null) {
            path = System.getProperty("user.home");
        }
        if (path != null) {
            File file = new File(path);
            if (!file.isDirectory()) {
                path = file.getParentFile().getAbsolutePath();
            }
        }
        return path;
    }
}
