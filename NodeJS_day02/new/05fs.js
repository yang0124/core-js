const fs = require('fs');

var x=fs.readFileSync("./public/readme.txt");
console.log(x);
console.log(x.toString());
