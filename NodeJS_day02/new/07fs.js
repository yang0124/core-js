const fs = require('fs');

var buf=fs.readFileSync("./public/index.css");

fs.appendFileSync("./public/index.backup.css",buf);

console.log("复制完毕了");
