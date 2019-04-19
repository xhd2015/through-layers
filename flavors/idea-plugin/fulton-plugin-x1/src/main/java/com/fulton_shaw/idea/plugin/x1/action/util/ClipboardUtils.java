package com.fulton_shaw.idea.plugin.x1.action.util;

import javax.sound.sampled.Clip;
import java.awt.*;
import java.awt.datatransfer.*;
import java.io.IOException;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/18
 */
public class ClipboardUtils {
    private ClipboardUtils() {
    }

    public static Clipboard getClipboard() {
        return Toolkit.getDefaultToolkit().getSystemClipboard();
    }

    /**
     * set clipboard content as string
     * @param text
     */
    public static void setClipboardString(String text) {
        Clipboard clipboard = getClipboard();
        StringSelection selection = new StringSelection(text);
        clipboard.setContents(selection, selection);
    }

    /**
     * get content from clipboard as string
     * @return
     */
    public static String getClipboardString() {
        Clipboard clipboard = getClipboard();
        Transferable contents = clipboard.getContents(ClipboardUtils.class);
        if (contents != null && contents.isDataFlavorSupported(DataFlavor.stringFlavor)) {
            try {
                return (String) contents.getTransferData(DataFlavor.stringFlavor);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return null;
    }
}
