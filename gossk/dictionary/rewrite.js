let fs = require("fs");

let dict = require("./slingonian-en-ru-dict.json");
let newdict = [];

for (let word of dict) {
  newdict.push({ en: word.en, ru: word.ru });
}

fs.writeFileSync("./en-ru-dict.json", JSON.stringify(newdict), "utf-8");
