//const conj = require("./conj/conj");
const {remote, ipcRenderer} = require("electron");

let out = document.getElementById("content-bar");

ipcRenderer.on("process-reply", (event, content) => {
    out.innerHTML = content;
});
