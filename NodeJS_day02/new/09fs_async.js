const fs = require('fs');
fs.writeFile("./public/readme.txt","替换了",(err)=>{
	console.log(1);
})
console.log(2);
