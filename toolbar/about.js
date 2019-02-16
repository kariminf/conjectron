const {remote} = require("electron");

document.getElementById("close").addEventListener("click", function (e) {
      let window = remote.getCurrentWindow();
      window.close();
});
