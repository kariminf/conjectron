const remote = require("electron").remote;
const fs = require("fs");
const settings = require("settings-store");

settings.init({
    appName:       "Conjectron", //required,
    publisherName: "kariminf", //optional
    reverseDNS:    "kariminf.conjectron" //required for macOS
});

//Load titlebar HTML content
let content = fs.readFileSync(__dirname + "/conjbar.html", "utf8");
document.getElementById("conjbar").innerHTML = content;

let lang = settings.value("lang", "ar");

document.getElementById("lang").value = lang;


//Load titlebar CSS content
let cssId = "conjbar-css";
if (!document.getElementById(cssId))
{
    let head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.id   = cssId;
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "./conjbar/conjbar.css";
    link.media = "all";
    head.appendChild(link);
}
