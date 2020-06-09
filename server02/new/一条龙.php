<?php
	$hide=$_POST["hide"];
	$name=$_POST["name"];//前端的
	$pwd=$_POST["pwd"];
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	mysqli_query($conn,"SET NAMES UTF8");

	if($hide==0){
		$email=$_POST["email"];
		$sql="SELECT name FROM woman";
		$rs=mysqli_query($conn,$sql);
		while(($row=mysqli_fetch_row($rs))!=null){
			if($row[0]==$name){
				echo("<script>location='error.html?value=注册'</script>");
				return false;
			}
		}
		$sql="INSERT INTO woman VALUES(0,'$name','$pwd','$email')";
		$rs=mysqli_query($conn,$sql);
			
		mysqli_close($conn);
		echo("<script>location='success.html?value=注册'</script>");
	}else if($hide==1){
		$sql="SELECT name,pwd FROM woman";
		$rs=mysqli_query($conn,$sql);
		while(($row=mysqli_fetch_row($rs))!=null){
			if($row[0]==$name && $row[1]==$pwd){
				echo("<script>location='success.html?value=登录'</script>");
				return false;
			}
		}
		echo("<script>location='error.html?value=登录'</script>");	
	}
	
	
	
?>