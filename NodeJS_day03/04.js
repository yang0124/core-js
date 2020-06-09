const http=require("http");
const url=require("url");
const fs=require("fs");
const mysql=require("mysql");
var server=http.createServer();
server.listen(8008);

server.on("request",(req,res)=>{
	var obj=url.parse(req.url,true);
	if(obj.pathname=="/" || obj.pathname=="/index"){
		fs.readFile("E:/dy/jx/12NODE/NodeJS_day03/public/four.html",(err,buf)=>{
			res.end(buf);
		})
	}else if(obj.pathname=="/four.do"){
		var arr=[];
		for(var i in obj.query){
			arr.push(obj.query[i]);
		}
		var connection = mysql.createConnection({
		  host     : '127.0.0.1',
		  user     : 'root',
		  password : '',
		  database : 'h51906'
		});
		var sql="INSERT INTO man VALUES(0,?,?,?)";
		connection.query(sql,arr,(error, results)=>{
		  	if(results){
		  		res.end("<h1>success</h1>")
		  	}
		});
		
		connection.end();
	}
})
