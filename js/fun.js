var a = function foo(){
	foo();
}
//foo();//报错 foo赋值给a. 作用域在a 全局无法找到foo

var arr = [1,2,3];
var arr2 = [4,5,6];

console.log(arr.concat(arr2).pop());




