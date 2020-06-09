<?php
	$name=$_GET["name"];
	if($name=="龚光绪"){
		echo JSON_encode([1,2,3]);
	}else if($name=="李想"){
		echo JSON_encode([4,5,6]);
	}else if($name=="夏莹"){
		echo JSON_encode([7,8,9]);
	}
?>