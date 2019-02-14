const jslingua = require("jslingua");
const fs = require("fs");
const ejs = require("ejs");

let language = "ar";
let morpho = jslingua.nserv("Morpho", "ara");
let template = "";
let forms;

module.exports.bindOutput = function (outDiv){
    outputDiv = outDiv;
}

module.exports.setLanguage = function (lang) {
    if (lang == language) return;
    language = lang;
    morpho = jslingua.nserv("Morpho", lang);
    forms = morpho.getForms();
    template = fs.readFileSync(__dirname + "/" + lang + ".html", "utf8");
}

let hepa = {
    person:"third",
    number: "singular",
    gender: "masculine",
    tense:"past"
};

/*ejs.filters.conj = function(obj) {
  return morpho.conjugate(obj.verb,obj.opt);
};*/

module.exports.process = function (verb) {
    let output = ejs.render(template, {
        morpho: morpho,
        verb: verb
    });
    //morpho.conjugate(verb,Object.assign(hepa))
    return output;
}
