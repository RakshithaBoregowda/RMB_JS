var account=
{
name:"Avin",
homeadd:"Kalyannagar",

details: function()
{
    console.log("account holder details"+" "+this.name)
}

}

var account2={
    name:"ansh",
    homeadd:"HSR",

details2:function()
{
    console.log("account holder" +"  "+this.name+"  "+this.homeadd)
}
}

function funct(val1, val2)
{
    console.log("account holder" +" "+this.name+"  "+this.homeadd)
}
var fun=funct.bind(account,"hi", "hello")
fun()
// var fun1=funct.bind(account2,"good morning", "good evening")
// fun1()
//account.details()
// account2.details2(account)




