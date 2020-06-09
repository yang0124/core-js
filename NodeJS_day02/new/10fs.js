const fs = require('fs');

fs.readFile("./public/index.css",(err,buf)=>{
	fs.writeFile("./public/index.backup.css",buf,(err)=>{
		console.log("复制完成");
	})
})


