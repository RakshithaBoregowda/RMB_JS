console.log("login");
{
setTimeout(()=>
{
console.log("first")
},1000);

setTimeout(()=>
{
console.log("third")
},3000);

setTimeout(()=>
{
console.log("second")
},2000);
}
console.log("logout")