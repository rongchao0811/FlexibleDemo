var Dog = (function(){
	return function(color,type){
		var p_type , p_color;//私有变量
		this.setColor = function(color){
			p_color = color;
		}
		this.setType = function(type){
			p_type = type;
		}
		this.getColor = function(){
			return p_color;
		};
		this.getType = function(){
			return p_type;
		}
		this.setColor(color);
		this.setType(type);
	}
})()


Dog.prototype = {
	wang:function(){
		console.log('wangwang');
	}
}

var dog1 = new Dog("black","zangao");
dog1.wang();
dog1.setColor('yellow');
console.log(dog1.getColor());
