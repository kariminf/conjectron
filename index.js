//const conj = require("./conj/conj");
const remote = require("electron").remote;
const settings = require("settings-store");

settings.init({
    appName:       "Conjectron", //required,
    publisherName: "kariminf", //optional
    reverseDNS:    "kariminf.conjectron" //required for macOS
});

//conj.setLanguage(lang);

//conj.bindOutput(document.getElementById("content-bar"));
