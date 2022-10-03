//concatination 
var arr=[1,3,4,6,2]
var arr1=[22,33,44,55,66,77]
var arr2=[2,5,6,7,2,4,2]

var arr1=["ranju"]
console.log(arr.concat(arr1))

//push-it will add the element at the end of an array 
console.log(arr)
console.log(arr.push('R'))
console.log(arr)

//pop-It will remove the last element from the array and return the removed element
console.log(arr)
console.log(arr.pop())
console.log(arr)

//unshift method-It will add the elemnt at the begining of an array 
console.log(arr)
console.log(arr.unshift('300'))
console.log(arr)

//shift method-It will remove the first element from array and return the 
console.log(arr)
console.log(arr.shift())
console.log(arr)

//splice method-[start index, delete count ,new element ]-it will delete as well as adds the given element 

console.log(arr)
console.log(arr.splice(1, 1, 100))
console.log(arr.splice(1,0,100))
console.log(arr)

//slice-[start index, end index]-
console.log(arr1)
console.log(arr1.slice(1, 4))
console.log(arr1)

//array.every-->It will return the boolean value based on the condition (if any one of the condition 
//is not satisfyng it will  return false )
console.log(arr)
console.log(arr.every((element)=>
{
return element <=6
}))
console.log(arr);

//array.some[if any one of the condition is satisfying it will return true]
console.log(arr)
console.log(arr.some((element)=>
{
return element <8
}))
console.log(arr);

//index of[element, starting index]
console.log(arr)
console.log(arr.indexOf(4,2))
console.log(arr);

//Last index of[element, last index]
console.log(arr)
console.log(arr.lastIndexOf(4,2))
console.log(arr);

//reverse
console.log(arr);
console.log(arr.reverse())
console.log(arr);

//include
console.log(arr);
console.log(arr.includes(2))
console.log(arr);

//join
console.log(arr);
console.log(arr.join("tree"))
console.log(arr);

//for each
arr.forEach((element, index) => 
{
    console.log(element+1)
});
console.log(arr);

//map
console.log(arr)
console.log(arr.map((element, index) => 
{
    return element*2
}))
console.log(arr);

//filter
console.log(arr)
console.log(arr.filter((element, index) => 
{
    if(element>4)
    return element
}))
console.log(arr);


//sort
console.log(arr)
console.log(arr.sort((a,b) => 
{
return a-b
}));
console.log(arr);

//reduce
var number=[2, 4,6,8,10]
console.log(number)
function myfunc(total,number) 
{
    return total-number     
}
console.log(number.reduce(myfunc));
console.log(number);
    
//reduce right
var number=[10, 24,6,88,10]
console.log(number)
function myfunc(total,number) 
{
    return total-number     
}
console.log(number.reduceRight(myfunc));
console.log(number);
