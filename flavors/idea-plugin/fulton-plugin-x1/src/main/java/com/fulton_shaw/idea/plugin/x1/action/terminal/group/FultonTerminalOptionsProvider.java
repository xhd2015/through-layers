package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.openapi.components.PersistentStateComponent;
import com.intellij.openapi.components.State;
import com.intellij.openapi.components.Storage;
import com.intellij.openapi.project.Project;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.List;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
@State(name = "fultonTerminalOptions", reloadable = false, storages = {
        @Storage("fulton-plugins.xml")
})
public class FultonTerminalOptionsProvider implements PersistentStateComponent<FultonTerminalOptionsProvider.State> {
    // the default one
    public static final int MODE_TAB = 0;
    public static final int MODE_WINDOW = 1;


    public static class SingleTabState {
        private String title;
        private String shellPath;
        private String startDirectory;
        private String startupScript;
        private String shellOptions;
        private boolean isCygwin;
        private Double windowWidth;
        private Double windowHeight;
        private Integer windowX;
        private Integer windowY;
        private Integer mode;
        private String colorScheme;

        public String getColorScheme() {
            return colorScheme;
        }

        public void setColorScheme(String colorScheme) {
            this.colorScheme = colorScheme;
        }

        public Integer getWindowX() {
            return windowX;
        }

        public void setWindowX(Integer windowX) {
            this.windowX = windowX;
        }

        public Integer getWindowY() {
            return windowY;
        }

        public void setWindowY(Integer windowY) {
            this.windowY = windowY;
        }

        public Integer getMode() {
            return mode;
        }

        public void setMode(Integer mode) {
            this.mode = mode;
        }

        public Double getWindowWidth() {
            return windowWidth;
        }

        public void setWindowWidth(Double windowWidth) {
            this.windowWidth = windowWidth;
        }

        public Double getWindowHeight() {
            return windowHeight;
        }

        public void setWindowHeight(Double windowHeight) {
            this.windowHeight = windowHeight;
        }

        public String getShellPath() {
            return shellPath;
        }

        public void setShellPath(String shellPath) {
            this.shellPath = shellPath;
        }

        public boolean isCygwin() {
            return isCygwin;
        }

        public void setCygwin(boolean cygwin) {
            isCygwin = cygwin;
        }

        public String getShellOptions() {
            return shellOptions;
        }

        public void setShellOptions(String shellOptions) {
            this.shellOptions = shellOptions;
        }

        public String getStartupScript() {
            return startupScript;
        }

        public void setStartupScript(String startupScript) {
            this.startupScript = startupScript;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getStartDirectory() {
            return startDirectory;
        }

        public void setStartDirectory(String startDirectory) {
            this.startDirectory = startDirectory;
        }

        public void copy(SingleTabState other) {
            this.setStartDirectory(other.getStartDirectory());
            this.setShellPath(other.getShellPath());
            this.setCygwin(other.isCygwin());
            this.setShellOptions(other.getShellOptions());
            this.setStartupScript(other.getStartupScript());
            this.setTitle(other.getTitle());
            this.setWindowWidth(other.getWindowWidth());
            this.setWindowHeight(other.getWindowHeight());
            this.setMode(other.getMode());
            this.setWindowX(other.getWindowX());
            this.setWindowY(other.getWindowY());
            this.setColorScheme(other.getColorScheme());
        }

    }

    public static class State {
        private Integer lastSelected;
        private List<SingleTabState> states;

        public State() {
            this.states = new ArrayList<>();
        }

        public void copy(State other) {
            this.lastSelected = other.lastSelected;
            for (SingleTabState state : other.states) {
                SingleTabState cpy = new SingleTabState();
                cpy.copy(state);
                this.states.add(cpy);
            }
        }

        public List<SingleTabState> getStates() {
            return states;
        }

        public Integer getLastSelected() {
            return lastSelected;
        }

        public void setLastSelected(Integer lastSelected) {
            this.lastSelected = lastSelected;
        }

        public void setStates(List<SingleTabState> states) {
            this.states = states;
        }
    }

    private Project project;
    private State state;

    public FultonTerminalOptionsProvider(Project project) {
        this.project = project;
        this.state = new State();
    }

    @Nullable
    @Override
    public State getState() {
        return this.state;
    }

    public int getLastSelected() {
        Integer i = this.state.getLastSelected();
        return i != null ? i : -1;
    }

    public void setLastSelected(int lastSelected) {
        this.state.setLastSelected(lastSelected);
    }

    public SingleTabState getStateAt(int i) {
        return this.state.getStates().get(i);
    }

    public int getStateCount() {
        return this.state.getStates().size();
    }

    @Override
    public void loadState(@NotNull FultonTerminalOptionsProvider.State state) {
        this.state.copy(state);
    }


}

