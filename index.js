//const conj = require("./conj/conj");
const {remote, ipcRenderer} = require("electron");
const settings = remote.getGlobal("settings");

let out = document.getElementById("contentbar");

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

if (settings.value("pnative", false)){
  document.getElementById("titlebar").style.display = "none";
}
