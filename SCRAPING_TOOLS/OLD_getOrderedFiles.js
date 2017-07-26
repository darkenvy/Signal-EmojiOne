const gm = require("gm");
const async = require("async");
const fs = require("fs");
const path = require("path");

// let runningImage = gm(2048, 192).bitdepth(8).background("transparent");
let files = fs.readdirSync(path.join(__dirname, "out"));
files = files.filter(a => {
  const ext = a.split(".");
  return ext.length > 1 && ext[1] === "png";
});
files = files.sort((a, b) => parseInt(a) - parseInt(b));
// files = files.map(a => path.join(__dirname, a));

console.log(files);
