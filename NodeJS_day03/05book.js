const http=require("http");
const url=require("url");
const fs=require("fs");
const ms=require("./05mysql");
var server=http.createServer();
server.listen(8008);

server.on("request",(req,res)=>{
	var obj=url.parse(req.url,true);
	if(obj.pathname=="/" || obj.pathname=="/index"){
		fs.readFile("./public/book/index.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/select"){
		ms.sel(res)
	}else if(obj.pathname=="/insert"){
		fs.readFile("./public/book/insert.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/insert.do"){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		ms.ins(res,arr);
	}else if(obj.pathname=="/delete"){
		var arr=[obj.query.id];
		ms.del(res,arr);
	}
})