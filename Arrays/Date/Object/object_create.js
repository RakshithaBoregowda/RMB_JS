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

var acc1=Object.create(openacc)
{
    acc1.name="Ranju";//overriding 
    
    acc1.city="mangalore";//overriding 

    console.log(acc1)
    console.log(openacc)
    console.log(openacc.city)

    console.log(acc1.accno())
    console.log(openacc.accno())
}
