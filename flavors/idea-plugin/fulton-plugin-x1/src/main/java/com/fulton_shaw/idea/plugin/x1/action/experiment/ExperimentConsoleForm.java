package com.fulton_shaw.idea.plugin.x1.action.experiment;

import java.awt.*;
import javax.swing.*;

import com.intellij.uiDesigner.core.*;

/**
 * @author xiaohuadong
 * @date 2019/04/20
 */
public class ExperimentConsoleForm {

    public static void main(String[] args) {
        JFrame frame = new JFrame("ExperimentConsoleForm");
        frame.setContentPane(new ExperimentConsoleForm().panel1);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }

    public ExperimentConsoleForm() {
        init();
    }

    private void init() {
        initComponents();
    }

    public Component getRootComponent() {
        return panel1;
    }

    public JPanel getPanel1() {
        return panel1;
    }

    public JTextArea getTextArea2() {
        return textArea2;
    }

    public JTextArea getTextArea1() {
        return textArea1;
    }

    public JButton getButton1() {
        return button1;
    }

    private void initComponents() {
        // JFormDesigner - Component initialization - DO NOT MODIFY  //GEN-BEGIN:initComponents
        // Generated using JFormDesigner Evaluation license - unknown
        panel1 = new JPanel();
        JScrollPane scrollPane1 = new JScrollPane();
        textArea1 = new JTextArea();
        textArea2 = new JTextArea();
        button1 = new JButton();

        //======== panel1 ========
        {

            // JFormDesigner evaluation mark
            panel1.setBorder(new javax.swing.border.CompoundBorder(
                    new javax.swing.border.TitledBorder(new javax.swing.border.EmptyBorder(0, 0, 0, 0),
                            "JFormDesigner Evaluation", javax.swing.border.TitledBorder.CENTER,
                            javax.swing.border.TitledBorder.BOTTOM, new java.awt.Font("Dialog", java.awt.Font.BOLD, 12),
                            java.awt.Color.red), panel1.getBorder()));
            panel1.addPropertyChangeListener(new java.beans.PropertyChangeListener() {
                public void propertyChange(java.beans.PropertyChangeEvent e) {
                    if ("border".equals(e.getPropertyName())) throw new RuntimeException();
                }
            });

            panel1.setLayout(new GridLayoutManager(3, 1, new Insets(0, 0, 0, 0), -1, -1));

            //======== scrollPane1 ========
            {

                //---- textArea1 ----
                textArea1.putClientProperty("html.disable", true);
                scrollPane1.setViewportView(textArea1);
            }
            panel1.add(scrollPane1, new GridConstraints(0, 0, 1, 1,
                    GridConstraints.ANCHOR_CENTER, GridConstraints.FILL_BOTH,
                    GridConstraints.SIZEPOLICY_CAN_SHRINK | GridConstraints.SIZEPOLICY_CAN_GROW | GridConstraints.SIZEPOLICY_WANT_GROW,
                    GridConstraints.SIZEPOLICY_CAN_SHRINK | GridConstraints.SIZEPOLICY_CAN_GROW | GridConstraints.SIZEPOLICY_WANT_GROW,
                    null, null, null));
            panel1.add(textArea2, new GridConstraints(1, 0, 1, 1,
                    GridConstraints.ANCHOR_CENTER, GridConstraints.FILL_BOTH,
                    GridConstraints.SIZEPOLICY_CAN_GROW | GridConstraints.SIZEPOLICY_WANT_GROW,
                    GridConstraints.SIZEPOLICY_CAN_GROW | GridConstraints.SIZEPOLICY_WANT_GROW,
                    null, new Dimension(150, 50), null));

            //---- button1 ----
            button1.setText("Button");
            panel1.add(button1, new GridConstraints(2, 0, 1, 1,
                    GridConstraints.ANCHOR_CENTER, GridConstraints.FILL_HORIZONTAL,
                    GridConstraints.SIZEPOLICY_CAN_SHRINK | GridConstraints.SIZEPOLICY_CAN_GROW,
                    GridConstraints.SIZEPOLICY_FIXED,
                    null, null, null));
        }
        // JFormDesigner - End of component initialization  //GEN-END:initComponents
    }

    // JFormDesigner - Variables declaration - DO NOT MODIFY  //GEN-BEGIN:variables
    // Generated using JFormDesigner Evaluation license - unknown
    private JPanel panel1;
    private JTextArea textArea1;
    private JTextArea textArea2;
    private JButton button1;

    public void setData(ExperimentConsoleForm data) {
    }

    public void getData(ExperimentConsoleForm data) {
    }

    public boolean isModified(ExperimentConsoleForm data) {
        return false;
    }

    // JFormDesigner - End of variables declaration  //GEN-END:variables
}
