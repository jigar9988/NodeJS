console.log("jigar");
const fs = require("fs");

fs.writeFileSync("sync.txt","Hi this is sync.js");
const data = fs.readFileSync("sync.txt");
console.log(data.toString());


// fs.writeFileSync("./nodeJs/another.txt","this is another txt file");
