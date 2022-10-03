var openacc={
    name:"raksha",
    city:"Bangalore",
    pin:"562114",

    //function inside the object
    accno: function()
    {
      return "account holder name:"+""+this.name
    }
    

}

var openacc2={}
console.log(openacc2.name)
//proto keyword
openacc2.__proto__=openacc
console.log(openacc)
console.log(openacc2)
openacc2.city="mangalore";
console.log(openacc2)

