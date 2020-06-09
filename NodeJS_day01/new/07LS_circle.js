var pi=Math.PI;
function size(r){
	return pi*r*r
}

function perimiter(r){
	return 2*pi*r
}

//公开：
//对象名.属性名=值
//对象名.方法名=function(){}
exports.mj=size;
exports.zc=perimiter;

