
class p1
{
    constructor(name1, class1, age)
    {
        this.name1=name1;
        this.class1=class1;
        this.age=age;

    }

    a=10;
    static b=20;

    method1()
    {this.a;
    console.log("inside non static method")
    }

   static method()
    {this.b;
    console.log("inside non static method")
    var ob=new p1()
    ob.method1();

}
}
var obj1=new p1("shiv",10,"29")
console.log(obj1)
p1.method();
