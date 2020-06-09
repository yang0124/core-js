const http=require("http");
var server=http.createServer();
server.listen(80);
server.on("request",(req,res)=>{//只要客户端有请求就会触发的事件
	res.write("<h1>hello world1</h1>");
	res.write("<h1>hello world2</h1>");
	res.end("<h1>hello world3</h1>");
})



console.log("服务器已开启");
