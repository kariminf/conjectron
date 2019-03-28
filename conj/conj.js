const jslingua = require("jslingua");
const fs = require("fs");
const ejs = require("ejs");
const i18n = require("i18n");

let language = "",
    morpho = null,
    template = "";

module.exports.bindOutput = function (outDiv){
    outputDiv = outDiv;
}

module.exports.setLanguage = function (lang) {
    if (lang == language) return;
    language = lang;
    morpho = jslingua.nserv("Morpho", lang);
    template = fs.readFileSync(__dirname + "/" + lang + ".ejs", "utf8");
}

i18n.configure({
    directory: __dirname + "/../locales",
    prefix: "conj-",
    defaultLocale: "eng"
});

module.exports.setLocale = function (lang) {
    i18n.setLocale(lang);
    //console.log("locale set to: ", lang);
}

//i18n.setLocale("eng");

/*ejs.filters.conj = function(obj) {
  return morpho.conjugate(obj.verb,obj.opt);
};*/

module.exports.process = function (verb) {
  //console.log("processing ...");
  let output = ejs.render(template, {
    morpho: morpho,
    verb: verb,
    i18n: i18n
  });
  //morpho.conjugate(verb,Object.assign(hepa))
  return output;
}
