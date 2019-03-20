//const conj = require("./conj/conj");
const {remote, ipcRenderer} = require("electron");

let out = document.getElementById("content-bar");

ipcRenderer.on("process-reply", (event, content) => {
    out.innerHTML = content;

});

let cssId = "content-css";
if (!document.getElementById(cssId)) {
    let head  = document.getElementsByTagName("head")[0];
    let link  = document.createElement("link");
    link.id   = cssId;
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "./style/content-default.css";
    link.media = "all";
    head.appendChild(link);
}
