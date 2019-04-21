package org.antlr.intellij.plugin.preview;

import com.intellij.notification.Notification;
import com.intellij.notification.NotificationType;
import com.intellij.notification.Notifications;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.fileChooser.FileChooserFactory;
import com.intellij.openapi.fileChooser.FileSaverDescriptor;
import com.intellij.openapi.fileChooser.FileSaverDialog;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.SystemInfo;
import com.intellij.openapi.util.io.FileUtilRt;
import com.intellij.openapi.util.registry.Registry;
import com.intellij.openapi.vfs.VirtualFileWrapper;
import com.intellij.ui.JBColor;
import com.intellij.util.ui.UIUtil;
import org.apache.batik.dom.GenericDOMImplementation;
import org.apache.batik.svggen.SVGGraphics2D;
import org.apache.batik.svggen.SVGGraphics2DIOException;
import org.apache.commons.lang.StringUtils;
import org.w3c.dom.DOMImplementation;
import org.w3c.dom.Document;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

/**
 * Shows a contextual menu when the user right-clicks on the parse tree preview. The menu contains options
 * to export the parse tree to several image formats.
 */
class ParseTreeContextualMenu {

    static void showPopupMenu(UberTreeViewer parseTreeViewer, MouseEvent event) {
        JPopupMenu menu = new JPopupMenu();

        menu.add(createExportMenuItem(parseTreeViewer, "Export to image (white background)", false));
        menu.add(createExportMenuItem(parseTreeViewer, "Export to image (transparent background)", true));

        menu.show(parseTreeViewer, event.getX(), event.getY());
    }

    private static JMenuItem createExportMenuItem(UberTreeViewer parseTreeViewer, String label, boolean useTransparentBackground) {
        JMenuItem item = new JMenuItem(label);
        boolean isMacNativSaveDialog = SystemInfo.isMac && Registry.is("ide.mac.native.save.dialog");

        item.addActionListener(event -> {
            String[] extensions = useTransparentBackground ? new String[]{"png", "svg"} : new String[]{"png", "jpg", "svg"};
            FileSaverDescriptor descriptor = new FileSaverDescriptor("Export Image to", "Choose the destination file", extensions);
            FileSaverDialog dialog = FileChooserFactory.getInstance().createSaveFileDialog(descriptor, (Project) null);

            String fileName = "parseTree" + (isMacNativSaveDialog ? ".png" : "");
            VirtualFileWrapper vf = dialog.save(null, fileName);

            if (vf == null) {
                return;
            }

            File file = vf.getFile();
            String imageFormat = FileUtilRt.getExtension(file.getName());
            if (StringUtils.isBlank(imageFormat)) {
                imageFormat = "png";
            }

            if ("svg".equals(imageFormat)) {
                exportToSvg(parseTreeViewer, file, useTransparentBackground);
            } else {
                exportToImage(parseTreeViewer, file, useTransparentBackground, imageFormat);
            }
        });

        return item;
    }

    private static void exportToImage(UberTreeViewer parseTreeViewer, File file, boolean useTransparentBackground, String imageFormat) {
        int imageType = useTransparentBackground ? BufferedImage.TYPE_INT_ARGB : BufferedImage.TYPE_INT_RGB;
        BufferedImage bi = UIUtil.createImage(parseTreeViewer.getWidth(), parseTreeViewer.getHeight(), imageType);
        Graphics graphics = bi.getGraphics();

        if (!useTransparentBackground) {
            graphics.setColor(JBColor.WHITE);
            graphics.fillRect(0, 0, parseTreeViewer.getWidth(), parseTreeViewer.getHeight());
        }

        parseTreeViewer.paint(graphics);

        try {
            if (!ImageIO.write(bi, imageFormat, file)) {
                Notification notification = new Notification(
                        "ANTLR 4 export",
                        "Error while exporting parse tree to file " + file.getAbsolutePath(),
                        "unknown format '" + imageFormat + "'?",
                        NotificationType.WARNING
                );
                Notifications.Bus.notify(notification);
            }
        } catch (IOException e) {
            Logger.getInstance(ParseTreeContextualMenu.class)
                    .error("Error while exporting parse tree to file " + file.getAbsolutePath(), e);
        }
    }

    private static void exportToSvg(UberTreeViewer parseTreeViewer, File file, boolean useTransparentBackground) {
        DOMImplementation domImpl = GenericDOMImplementation.getDOMImplementation();
        Document document = domImpl.createDocument("http://www.w3.org/2000/svg", "svg", null);
        SVGGraphics2D svgGenerator = new SVGGraphics2D(document);

        if (!useTransparentBackground) {
            svgGenerator.setColor(JBColor.WHITE);
            svgGenerator.fillRect(0, 0, parseTreeViewer.getWidth(), parseTreeViewer.getHeight());
        }
        parseTreeViewer.paint(svgGenerator);

        try {
            svgGenerator.stream(file.getAbsolutePath(), true);
        } catch (SVGGraphics2DIOException e) {
            Logger.getInstance(ParseTreeContextualMenu.class)
                    .error("Error while exporting parse tree to SVG file " + file.getAbsolutePath(), e);
        }
    }
}
