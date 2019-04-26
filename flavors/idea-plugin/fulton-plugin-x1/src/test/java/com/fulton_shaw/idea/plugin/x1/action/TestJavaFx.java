package com.fulton_shaw.idea.plugin.x1.action;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.beans.property.ReadOnlyObjectProperty;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebEvent;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;
import org.w3c.dom.Document;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/24
 */
public class TestJavaFx  extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();
        EventHandler<WebEvent<String>> onAlert = webEngine.getOnAlert();
        webEngine.setOnAlert(new EventHandler<WebEvent<String>>() {
            @Override
            public void handle(WebEvent<String> event) {
                System.out.println("alert");
                onAlert.handle(event);
            }
        });
        webEngine.loadContent("<html><head><title>Hello World</title></head><body>Hello World</body></html>");


        StackPane stackPane = new StackPane();
        Scene scene = new Scene(stackPane,300,250);
        stackPane.getChildren().add(webView);

        primaryStage.setTitle("Hello World of Primary Stage");
        primaryStage.setScene(scene);
        primaryStage.show();

        Platform.runLater(new Runnable() {
            @Override
            public void run() {
//                JSObject jsObject = (JSObject) webEngine.executeScript("window");
//
//                JSObject p = (JSObject) jsObject.getMember("p");
//
//                System.out.println("p = " + p);
//                String name = (String) p.getMember("name");
//
//
//                System.out.println("name = " + name);
            }
        });

    }
}
