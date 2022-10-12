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
    console.log("account holder" +" "+this.name+"  "+this.homeadd+" "+val2)
}
funct.apply(["hi", "hello"])






