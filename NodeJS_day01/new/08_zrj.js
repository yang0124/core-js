var a=4;

//module.exports == exports
//exports.a=a;
//module.exports.a=a;

module.exports={
	num:a
}



//其实真正做了公开的操作的人是module.exports
//在node.js的底层有一句话：exports=module.exports;
//					  exports={};
//						{}	==	{}

