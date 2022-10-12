//Declaration of an array
let arr=[10,20,30,80,20]

//case1:accessing elements of an array in normal way
// let x=arr[2]
// let y=arr[4]
// console.log(x,y);

//accessing first 2 eleements of an array

// let[x,y]=arr
// console,log(x,y);

//accessing first 3 elements of an array
// let[x,y,z]=arr
// console.log(x,y,z)

//accessing element of an array by skipping the elements in between
let[a,,,b]=arr
console.log(a,b)