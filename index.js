const jslingua = require("jslingua");

const settings = require("settings-store");

settings.init({
    appName:       "Conjectron", //required,
    publisherName: "kariminf", //optional
    reverseDNS:    "kariminf.conjectron" //required for macOS
});

let lang = settings.value("lang", "ar");

document.getElementById("lang").value = lang;
