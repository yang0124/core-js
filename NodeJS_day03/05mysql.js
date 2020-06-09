const mysql=require("mysql");

module.exports={
	sel:function(res){
		var connection = mysql.createConnection({
		  host     : '127.0.0.1',
		  user     : 'root',
		  password : '',
		  database : 'h51906book'
		});
		
		var sql="SELECT * FROM books";
		connection.query(sql,(error, results)=>{
		  	res.end(JSON.stringify(results));
		});
	},
	ins:function(res,arr){
		var connection = mysql.createConnection({
		  host     : '127.0.0.1',
		  user     : 'root',
		  password : '',
		  database : 'h51906book'
		});
		
		var sql="INSERT INTO books VALUES(0,?,?,?,?)";
		connection.query(sql,arr,(error, results)=>{
		  	if(results){
		  		res.end("<script>location='/index'</script>");
		  	}
		});
	},
	del:function(res,arr){
		var connection = mysql.createConnection({
		  host     : '127.0.0.1',
		  user     : 'root',
		  password : '',
		  database : 'h51906book'
		});
		var sql="DELETE FROM books WHERE id=?";
		connection.query(sql,arr,(error, results)=>{
		  	if(results){
		  		res.end("<script>location='/index'</script>");
		  	}
		});
	}
}
