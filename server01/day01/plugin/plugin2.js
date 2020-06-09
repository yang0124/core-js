
//全局函数插件  $.extend(object)

$.extend({
    add:function(a,b){
        return a+b;
    }
});


$.fn.extend({
   test:function(){
   	//this指代调用方法的jquery对象
   	alert(this.val());
   }
});