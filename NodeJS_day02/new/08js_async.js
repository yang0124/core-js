const fs = require('fs');

fs.readFile("./public/readme.txt",(err,data)=>{
	//可能中间的操作比较复杂，慢慢做，让后面的人先做
	console.log(data);
})
console.log(2);