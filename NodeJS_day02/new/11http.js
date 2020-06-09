const http=require("http");

//创建服务器
var server=http.createServer();
//为服务器设置监听端口
server.listen(80);
//为服务器端绑定监听客户端请求事件
server.on("request",(req,res)=>{
	console.log(1);
	res.end("my name is NB");
})


console.log("服务器端已经开启");

