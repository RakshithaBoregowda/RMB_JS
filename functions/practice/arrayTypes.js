var array=[1,3,4,5,6,]
var array1="ranju"
console.log(array)
console.log(array.concat(array1));

console.log(array.push("r"));
console.log(array)

console.log(array.pop("r"))
console.log(array)

console.log(array.unshift(5000))
console.log(array)

console.log(array.shift(5000))
console.log(array)

console.log(array.slice(1,3))
console.log(array)

console.log(array.splice(1,1, 3000))
console.log(array)

console.log(array.indexOf(2,4))
console.log(array)

console.log(array.lastIndexOf(2,4))
console.log(array)

// console.log(array.some((element)=>{

//     return element<5
// }))
// console.log(array)

// console.log(array.every((element)=>{

//     return element<5
// }))


array.forEach((element,index)=>
{

console.log(element+":"+index)
console.log(array)
})
    

var array3=[10,20,20,20,50,55]
function myfunc(total, number)
{
    return total-number
}
console.log(array3.reduce(myfunc));

console.log(array.map((element, index)=>{
   return element*4

}))
console.log(array)