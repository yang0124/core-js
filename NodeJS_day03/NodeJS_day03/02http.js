const http=require("http");
const url=require("url");
const fs=require("fs");
var server=http.createServer();
server.listen(80);
server.on("request",(req,res)=>{//只要客户端有请求就会触发的事件
	var urlobj=url.parse(req.url,true);
	if(urlobj.pathname=="/index" || urlobj.pathname=="/"){
		fs.readFile("./public/index.html",(err,buf)=>{
			res.end(buf);
		})
	}
	else if(urlobj.pathname=="/register"){
		fs.readFile("./public/register.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(urlobj.pathname=="/register.do"){//提交才会触发这个请求
		//下午放的是数据库操作
		fs.appendFile("./public/user.log",`name=${urlobj.query.uname}&pwd=${urlobj.query.upwd}\n`,()=>{
			console.log("ok");
			fs.readFile("./public/success.html",(err,buf)=>{
				res.end(buf);
			})
		})
	}else{
		res.end("404")
	}
})



console.log("服务器已开启");