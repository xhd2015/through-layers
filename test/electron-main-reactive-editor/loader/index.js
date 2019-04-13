// const {app} = require('electron')
const path = require("path");

import  {app,BrowserWindow}  from  "electron"

// require('electron-reload')(__dirname);

console.info("global = ", global)

let win = null;

// dir name is /, resolved to "D:/"
console.log("dirname is", path.resolve(__dirname));

function createWindow() {
    win = new BrowserWindow({
        width: 1400,
        height: 1200,
        // webPreferences: {
        //     webSecurity: false
        //   }
    });

    win.webContents.openDevTools()

    // win.loadURL("file:///D:\\repos\\through-layer\\test\\electron-main-reactive-editor\\index.html"); // not work
    // win.loadURL("file:///D:\\repos\\through-layers\\dist\\index.html") // worked
    // win.loadURL("file:///D:\\repos\\through-layer\\test\\electron-main-reactive-editor\\dist\\index.html"); // not work
    
    win.loadURL("file:///index.html"); // work
    win.on("close", () => {
        win = null
    })
}


app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (win == null) {
        createWindow()
    }
})

