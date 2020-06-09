//创建插件:完成列表排序
//方式一:对象方法
//如何使用插件
//$(".orderObj li").sort(父元素);

$.fn.extend({
  sort:function(parent){
  //a:写一循环将所有列表元素保存数组中.
  var items = [];
  //this 指代调用方法的jquery对象
  $.each(this,function(index,elem){
      items.push($(elem));
  });
  //b:对数组中的元素排序作,依据元素文件内容
  items.sort(function(a,b){
     if(a.text()<b.text()){
        return -1;
     }else if(a.text() > b.text()){
        return 1;
     }else{
     	return 0;
     }
  });
  //c:排序结果
  //d:将排序后结果->
  //e:迭代数组中每一个元素,添加父列表中
  $.each(items,function(i,it){
  	  parent.append(it);
  });
  }
});

