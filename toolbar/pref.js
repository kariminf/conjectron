const {remote, ipcRenderer} = require("electron");
const settings = remote.getGlobal("settings");

const plang = document.getElementById("p-lang"),
      pstyle = document.getElementById("p-style"),
      pnative = document.getElementById("p-native");

plang.value = settings.value("plang", "eng");
pstyle.value = settings.value("pstyle", "default");
pnative.checked = settings.value("pnative", false);

document.getElementById("close").addEventListener("click", function (e) {
  settings.setValue("plang", plang.value);
  ipcRenderer.send("setLocale", plang.value);
  settings.setValue("pstyle", pstyle.value);
  settings.setValue("pnative", pnative.checked);
  let window = remote.getCurrentWindow();
  window.close();
});
