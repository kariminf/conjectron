const {app, BrowserWindow, ipcMain, remote} = require("electron");
const conj = require("./conj/conj");
const settings = require("settings-store");

settings.init({
    appName:       "Conjectron", //required,
    publisherName: "kariminf", //optional
    reverseDNS:    "kariminf.conjectron" //required for macOS
});

global.settings = settings;

let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        icon: "img/icon/conjectron.png"
    });

    // and load the index.html of the app.
    win.loadFile("index.html");
}


ipcMain.on("setLanguage", (event, lang) => {
    conj.setLanguage(lang);
});

ipcMain.on("process", (event, verb) => {
    let reply = conj.process(verb);
    event.sender.send("process-reply", reply);
});

app.on("ready", createWindow);
