const jslingua = require("jslingua");

let outputDiv = null;
let morpho = jslingua.nserv("Morpho", "ar");

module.exports.bindOutput = function (outDiv){
    outputDiv = outDiv;
}

module.exports.setLanguage = function (lang) {
    morpho = jslingua.nserv("Morpho", lang);
}

module.exports.process = function (verb) {
    //if (outputDiv == null) return ;
    //outputDiv.innerHTML = verb;
    return verb;
}
