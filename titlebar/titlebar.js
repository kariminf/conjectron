const remote = require("electron").remote;
const fs = require("fs");
const settings = remote.getGlobal("settings");

//Load titlebar HTML content
let content = fs.readFileSync(__dirname + "/titlebar.html", "utf8");
document.getElementById("titlebar").innerHTML = content;

//Load titlebar CSS content
let cssId = "titlebar-css";
if (!document.getElementById(cssId))
{
  let head  = document.getElementsByTagName("head")[0];
  var link  = document.createElement("link");
  link.id   = cssId;
  link.rel  = "stylesheet";
  link.type = "text/css";
  link.href = "./titlebar/titlebar.css";
  link.media = "all";
  head.appendChild(link);
}

document.getElementById("min-btn").addEventListener("click", function (e) {
  let window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("max-btn").addEventListener("click", function (e) {
  let window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});

document.getElementById("close-btn").addEventListener("click", function (e) {
  settings.setValue("lang", document.getElementById("lang").value);
  let window = remote.getCurrentWindow();
  window.close();
});
