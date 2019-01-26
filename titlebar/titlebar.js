const remote = require("electron").remote;
const fs = require("fs");

let content = fs.readFileSync(__dirname + "/titlebar.html", "utf8");
document.getElementById("titlebar").innerHTML = content;

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
      let window = remote.getCurrentWindow();
      window.close();
  });
