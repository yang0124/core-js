const http=require("http");
const url=require("url");
const fs=require("fs");
var server=http.createServer();
server.listen(80);
server.on("request",(req,res)=>{
	var obj=url.parse(req.url);
	if(obj.pathname=="/index"){//路由跳转，判断路由
		fs.readFile("./public/index.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/news"){
		res.end("新闻页");
	}else if(obj.pathname=="/product"){
		res.end("产品页");
	}else{
		res.end("404");
	}
});
