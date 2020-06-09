const http=require("http");
const url=require("url");
const fs=require("fs");

var server=http.createServer();
server.listen(80);
server.on("request",(req,res)=>{
	var obj=url.parse(req.url,true);
	if(obj.pathname=="/index" || obj.pathname=="/"){
		fs.readFile("./07Promise.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/first"){
		var arr=[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3];
		res.end(JSON.stringify(arr));
	}else if(obj.pathname=="/second"){
		var arr=[4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6];
		res.end(JSON.stringify(arr));
	}else if(obj.pathname=="/last"){
		var arr=[7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9];
		res.end(JSON.stringify(arr));
	}
});
