//const conj = require("./conj/conj");
const {remote, ipcRenderer} = require("electron");
/*const settings = require("settings-store");

settings.init({
    appName:       "Conjectron", //required,
    publisherName: "kariminf", //optional
    reverseDNS:    "kariminf.conjectron" //required for macOS
});



conj.setLanguage(lang);

conj.bindOutput(document.getElementById("content-bar"));
*/
//ipcRenderer.send("bindOutput", document.getElementById("content-bar"));

let out = document.getElementById("content-bar");

ipcRenderer.on("process-reply", (event, content) => {
    out.innerHTML = content;
});
