var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'h51906'
});
var arr=["李林","ll123","ll@qq.com"];
connection.query("INSERT INTO man VALUES(0,?,?,?)",arr, function (error, results) {
  console.log(results);
});

connection.end();