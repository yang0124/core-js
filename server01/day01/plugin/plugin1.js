
//对象方法插件- $.fn.extend(object)
//object 对象结构
//最常用关键字键 this
//this 当前元素
//1:插件中有一个方法 test

$.fn.extend({
   test:function(){
   	//this指代调用方法的jquery对象
   	alert(this.val());
   }
});