<?php
	$hide=$_GET["hide"];
	$conn=mysqli_connect("127.0.0.1","root","","h51906book",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	if($hide==0){
		
		$sql="SELECT * FROM books";
		$rs=mysqli_query($conn,$sql);
		$arr=[];
		while($row=mysqli_fetch_row($rs)){
			array_push($arr,$row);
		}
		echo JSON_encode($arr);
	}else if($hide==1){//新增
		$name=$_GET["name"];
		$price=$_GET["price"];
		$zuozhe=$_GET["zuozhe"];
		$content=$_GET["content"];
		
		$sql="INSERT INTO books VALUES(0,'$name','$price','$zuozhe','$content')";
		$rs=mysqli_query($conn,$sql);
		if($rs){
			echo("<script>location='success.html'</script>");
		}
	}else if($hide==2){
		$id=$_GET["id"];
		$sql="DELETE FROM books WHERE id=$id";
		$rs=mysqli_query($conn,$sql);
	}else if($hide==3){
		$id=$_GET["id"];
		$sql="SELECT * FROM books WHERE id=$id";
		$rs=mysqli_query($conn,$sql);
		$arr=mysqli_fetch_row($rs);
		echo JSON_encode($arr);
	}else if($hide==4){
		$id=$_GET["id"];
		$name=$_GET["name"];
		$price=$_GET["price"];
		$zuozhe=$_GET["zuozhe"];
		$content=$_GET["content"];
		
		$sql="UPDATE books SET name='$name',price='$price',zuozhe='$zuozhe',content='$content' WHERE id=$id";
		
		$rs=mysqli_query($conn,$sql);
		if($rs){
			echo("<script>location='success.html'</script>");
		}
	}
	
?>