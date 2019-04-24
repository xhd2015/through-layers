package com.fulton_shaw.idea.plugin.x1.action.terminal.group;

import com.intellij.openapi.editor.colors.EditorColorsManager;
import com.intellij.openapi.editor.colors.EditorColorsScheme;
import com.intellij.openapi.ui.TextFieldWithBrowseButton;
import com.intellij.ui.IdeBorderFactory;
import com.intellij.ui.components.JBCheckBox;
import com.intellij.ui.components.JBList;
import com.intellij.uiDesigner.core.GridConstraints;
import com.intellij.uiDesigner.core.GridLayoutManager;
import com.intellij.uiDesigner.core.Spacer;

import javax.swing.*;
import javax.swing.event.ListDataEvent;
import javax.swing.event.ListDataListener;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/23
 */
public class FultonTerminalSettingsPanel {
    private FultonTerminalOptionsProvider.SingleTabState state;

    // whole panel
    private JPanel myWholePanel;

    private JTextField myStartDirectoryField;
    private JPanel myGlobalSettingsPanel;
    private JTextField myTabNameTextField;
    private TextFieldWithBrowseButton myShellPathField;
    private JPanel myConfigurablesPanel;
    private JTextArea myExecuteCommandField;
    private JTextField myShellOptions;
    private JBCheckBox myIsCygwin;
    private JBList<String> myColorScheme;
    private java.util.List<String> schemes;

    public FultonTerminalSettingsPanel() {
        // initiate the model
        ListModel<String> model = new AbstractListModel<String>() {
            @Override
            public int getSize() {
                return getSchemes().size();
            }

            @Override
            public String getElementAt(int index) {
                return getSchemes().get(index);
            }
        };
        myColorScheme.setModel(model);
    }

    public List<String> getSchemes() {
        if (schemes == null) {
            schemes = new ArrayList<>();
            for (EditorColorsScheme scheme : EditorColorsManager.getInstance().getAllSchemes()) {
                schemes.add(scheme.getName());
            }
        }
        return schemes;
    }

    public FultonTerminalOptionsProvider.SingleTabState getState() {
        return state;
    }

    public void refreshState(FultonTerminalOptionsProvider.SingleTabState state) {
        this.state = state;
//        myWholePanel.setBorder(IdeBorderFactory.createTitledBorder("Profiles Settings"));
        myTabNameTextField.setText(state.getTitle());
        myShellPathField.setText(state.getShellPath());
        myStartDirectoryField.setText(state.getStartDirectory());
        myExecuteCommandField.setText(state.getStartupScript());
        myShellOptions.setText(state.getShellOptions());
        myIsCygwin.setSelected(state.isCygwin());
        myColorScheme.setSelectedIndex(colorToIndex(state.getColorScheme()));
    }

    public JPanel getRootPanel() {
        return myWholePanel;
    }

    public boolean isModified() {
        return
                !Objects.equals(myTabNameTextField.getText(), state.getTitle()) ||
                        !Objects.equals(myShellPathField.getText(), state.getShellPath()) ||
                        !Objects.equals(myStartDirectoryField.getText(), state.getStartDirectory()) ||
                        !Objects.equals(myExecuteCommandField.getText(), state.getStartupScript()) ||
                        !Objects.equals(myShellOptions.getText(), state.getShellOptions()) ||
                        !Objects.equals(myIsCygwin.isSelected(), state.isCygwin()) ||
                        !Objects.equals(getSelectedColorScheme(), state.getColorScheme())
                ;
    }

    /**
     * negative value, max value are ignroed
     *
     * @return
     */
    private String getSelectedColorScheme() {
        int idx = myColorScheme.getSelectedIndex();
        return idx < 0 || idx == Integer.MAX_VALUE ? null : getSchemes().get(idx);
    }

    private int colorToIndex(String scheme) {
        for (int i = 0; i < getSchemes().size(); i++) {
            if (Objects.equals(getSchemes().get(i), scheme)) {
                return i;
            }
        }
        return Integer.MAX_VALUE;
    }

    public void apply() {
        state.setTitle(myTabNameTextField.getText());
        state.setShellPath(myShellPathField.getText());
        state.setStartDirectory(myStartDirectoryField.getText());
        state.setStartupScript(myExecuteCommandField.getText());
        state.setShellOptions(myShellOptions.getText());
        state.setCygwin(myIsCygwin.isSelected());
        state.setColorScheme(getSelectedColorScheme());
    }

}
