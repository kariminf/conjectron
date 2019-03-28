const {remote} = require("electron");
const fs = require("fs");
const settings = remote.getGlobal("settings");
const BrowserWindow = remote.BrowserWindow;

//Load titlebar HTML content
let content = fs.readFileSync(__dirname + "/toolbar.html", "utf8");
document.getElementById("toolbar").innerHTML = content;

//Load titlebar CSS content
let cssId = "toolbar-css";
if (!document.getElementById(cssId))
{
    let head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.id   = cssId;
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "./toolbar/toolbar.css";
    link.media = "all";
    head.appendChild(link);
}

//aboutWin.setAlwaysOnTop(true);

let aboutWin = null;

document.getElementById("about-btn").addEventListener("click", function (e) {
  if (aboutWin) return;
  aboutWin = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    parent: remote.getCurrentWindow(),
    modal: true,
    resizable: false
  });
  aboutWin.loadFile(__dirname + "/about.html");
  aboutWin.on("close", function(){ aboutWin = null; });
  //aboutWin.setAlwaysOnTop(true);
});


let prefWin = null;

document.getElementById("pref-btn").addEventListener("click", function (e) {
  if (prefWin) return;
  prefWin = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    parent: remote.getCurrentWindow(),
    modal: true,
    resizable: false
  });
  prefWin.loadFile(__dirname + "/pref.html");
  prefWin.on("close", function(){ prefWin = null; });
  //aboutWin.setAlwaysOnTop(true);
});
