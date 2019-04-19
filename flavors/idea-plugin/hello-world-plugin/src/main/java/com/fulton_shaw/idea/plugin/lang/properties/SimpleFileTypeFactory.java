package com.fulton_shaw.idea.plugin.lang.properties;
import com.intellij.openapi.fileTypes.*;
import org.jetbrains.annotations.NotNull;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/16
 */


public class SimpleFileTypeFactory extends FileTypeFactory {
    @Override
    public void createFileTypes(@NotNull FileTypeConsumer fileTypeConsumer) {
        fileTypeConsumer.consume(SimpleFileType.INSTANCE);
    }
}
