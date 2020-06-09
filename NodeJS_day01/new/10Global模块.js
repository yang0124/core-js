//node.js的console并不是我们以前使用的console，但是功能是完全相似的

//console.time("计算");
//var arr=[1,2,3,4,5]
//console.timeEnd("计算");

//定时器是一个异步操作
//setTimeout(()=>{
//	console.log(1);
//},0)

setImmediate(()=>{
	for(var i=1;i<=500;i++){
		console.log(i);
	}
})

console.log("后续操作何时执行");
