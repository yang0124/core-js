<?php
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	$sql="SELECT * FROM man";
	mysqli_query($conn,"SET NAMES UTF8");
	$rs=mysqli_query($conn,$sql);
	
	while(($row=mysqli_fetch_row($rs))!=null){
		var_dump($row);
		echo("<br>");
	}	
	
	mysqli_close($conn)
?>