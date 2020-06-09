let num=1;
let shuzu=[23,21,45,32,54,3,321,32,1,32,13,21];
shuzu.sort((a,b)=>{
	return a-b;
});

let str="今天我去了她家，她说，我要把我交给你";
str=str.replace("我去",()=>{
	return "**";
});
