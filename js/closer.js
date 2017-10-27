
var Student=(function(){

    var m_staticMaxAge = 120;//定义一个私有的静态属性

    function ageIsValid(age){ //定义一个私有的静态方法
        if(age > m_staticMaxAge){
            throw Error("the property age must be less than "+m_staticMaxAge);
        }
    }

    //返回构造函数，设置一些属性
    return function (name,age) {

        var m_name, m_age;//把私有属性都放到这里定义

        //私有属性的 setter 和 getter 都放到这里
        this.setName = function (name) {

            Student.nameIsValid(name);
            m_name = name;
        };

        this.setAge = function (age) {
            ageIsValid(age);
            m_age = age;
        };

        this.getName = function () {
            return m_name;
        };

        this.getAge = function () {
            return m_age;
        };

        this.setName(name);
        this.setAge(age);
    };
})();

//定义公有的方法
Student.prototype = {
    show:function(){
        console.log("showcall   name:"+this.getName()+" age:"+this.getAge());
    }
};

//定义静态的公有方法
Student.nameIsValid = function(name){
    if(typeof name != 'string'){
        throw  Error("property name must me a string value");
    }
};

//////////////////////////////////////////////////////////////////////////////




//正常调用
var stu = new Student('zhengjinwei',12);
console.log("name:"+stu.getName()+" age:"+stu.getAge());
stu.show();



//报name异常的调用
var stu2 = new Student(1212,12);
console.log("name:"+stu2.getName()+" age:"+stu2.getAge());
stu.show();


//报age异常的调用
var stu3 = new Student("zhengjinwei",121);
console.log("name:"+stu3.getName()+" age:"+stu3.getAge());
stu.show();



