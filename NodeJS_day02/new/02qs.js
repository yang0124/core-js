const qs = require('querystring');

var str="wd=123&rsv_spt=1&rsv_iqid=0xcec71eb7000f88fd&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=500&rsv_sug4=6112";

var qsobj=qs.parse(str);//可以解析查询字符串部分，也只能解析查询字符串部分

console.log(qs);

//再将对象变回去
console.log(qs.stringify(qsobj));
