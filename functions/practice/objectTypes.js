//object literal

// var data={Name:'ranju', city:'Bangalore', state:"karnataka", data1:{

//     pin:"562114"}


// }
// console.log(data.data1.pin)


//using new keyword

// var data=new Object()
// data.Name1="ranju";
// data.city="HSR";
// data.state="karnataka"

//object using constructor function
// function acc(Name, city,state)
// {
//     this.Name=Name;
//     this.city=city;
//     this.state=state
// }
// var acc1=new acc("prathap","HBR","karnataka");
// console.log(acc1)


// class data
// {
//     constructor(name1, age, gender)
//     {
//         this.name1=name1;
//         this.age=age;
//         this.gender=gender;
//     }

// }
// var obj=new data("partha", 29,"male")
// console.log(obj)

//type 5
var name11={
    name1:"anu", 
    city:"Hebbal",
    greeting: function()
    {
        console.log("good morning bengaluru ==>"+this.city)
    }
   
}

var name22=Object.create(name11)
{
    name11.name1="parthu";
}
// console.log(name11)
// console.log(name22)
// console.log("account holder name is"+name11.name1)
console.log(name11.greeting())