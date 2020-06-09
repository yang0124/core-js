module.exports={
	avg:function(arr){
		for(var i=0,sum=0;i<arr.length;i++){
			sum+=arr[i];
		}
		return sum/arr.length;
	},
	sum:function(arr){
		for(var i=0,sum=0;i<arr.length;i++){
			sum+=arr[i];
		}
		return sum;
	}
}
