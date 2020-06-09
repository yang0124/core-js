<?php
	//索引数组
	$arr=["杨涵吃","熊川","曾琪萍","张旗天",101,100.5];
	$arr[6]="李想";
	var_dump($arr);//因为只要是放在页面上的内容，前端都可以获取

	//hash数组
	$arr=array(
		"name"=>"马敏雪",
		"age"=>18,
		"salary"=>6500,
	);
	$arr["hair"]="茂密";
	var_dump($arr);
?>