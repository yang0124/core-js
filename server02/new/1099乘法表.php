<?php
	for($j=1;$j<=9;$j++){
		for($i=1,$str="";$i<=$j;$i++){
			$str.=$i."*".$j."=".$i*$j." ";
		}
		echo($str."<br>");
	}
?>