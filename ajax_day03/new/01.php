<?php
	$talk=$_POST["talk"];
	if($talk==1){
		echo $_GET[x]."(".'[1,2,3,4,5]'.")";
	}else if($talk==2){
		echo '[6,7,8,9,0]';
	}else{
		echo '[]';
	}

?>