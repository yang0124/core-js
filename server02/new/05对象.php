<?php
	class dog{
		public $name="旺财";
		public $height=180;
		public $weight=150;
		function eatshit(){return "正在吃屎";}
	};
	
	$wc=new dog;
	
	var_dump($wc);
	echo($wc->name);
	echo($wc->height);
	echo($wc->eatshit());
?>