/*
深度克隆  对象或数组
 */

function  clone(target){
	//1. 初始化变量，获取目标数据的类型
	let result,targetClass = getTargetClass(target);
	
	//2. 判断目标的类型
	if(targetClass === 'Object'){
		result = {};
	}else if(targetClass === 'Array'){
		result = [];
	}else{
		return target;
	//3. 遍历目标数据
	for(let key in target){
		//获取每一项数据的类型
		let item = target[key];
		if(getTargetClass(item) === 'Object' || 'Array'){
			result[key] = clone(item)
		}else{
			result[key] = item;
		}
	}
	return result;		
}

let arr = [1,2,3,{name: 'kobe}];
let arr1 = clone(arr)
console.log(arr1);
arr[3].name = 'wade';
console.log(arr,arr1)
