//分配了一个指定大小的缓冲区 6kb
//var buf1=Buffer.alloc(6);
//console.log(buf1);

var buf2=Buffer.from("代老湿屌爆了");
console.log(buf2.toString());

//var buf3=Buffer.from([1,2,3,4,5,6,7,8,9,0]);
//console.log(buf3);

//基本没有卵用，因为我们不会主动我们不认识的东西
//但是有的时候node.js某些获取操作，获取来的自动就是一个buffer



