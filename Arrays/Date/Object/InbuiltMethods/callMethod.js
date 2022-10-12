var acc=
{
name:"Amar",
phoneno:"9900679073",

otherinfo: function()
{
  console.log("account holder name:"+""+this.name+" "+this.phoneno)
}
}


var acc2=
{
name:"vinu",
phoneno:"9900679873",

otherinfo2: function()
{
  console.log("account holder name:"+""+this.name+" "+this.phoneno)
}

}
function fun(city, state)
{
    console.log( "account holder name:"+""+this.name+" "+this.phoneno+" "+city+" "+state)
}
//fun.call(acc2,"bangalore", "karnataka")
fun.call(acc,"bangalore", "karnataka")

