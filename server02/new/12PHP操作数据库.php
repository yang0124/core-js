<?php
	//1、
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	
	//2、
	//新增
//	$sql="INSERT INTO woman VALUES(0,'马敏雪','mmx123','mmx@qq.com')";
	//删除
//	$sql="DELETE FROM woman WHERE id=13";
	//修改
//	$sql="UPDATE woman SET name='姚庆' WHERE id=12";
	//查看
	
	
	//2.5、PHP传送数据库的时候需要设置编码格式
	mysqli_query($conn,"SET NAMES UTF8");
	
	//3、执行
	$result=mysqli_query($conn,$sql);
	var_dump($result);
	//4、
	mysqli_close($conn);
?>