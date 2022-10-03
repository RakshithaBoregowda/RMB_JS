var accHolder=
{
name: "pratha",
phone:"9900679073",
pan:"CGSA0123" , 
city: "Bengaluru",

//object inside the object
Otherifo:{ pin:"562114", state:"karnataka"},
}
console.log(accHolder)

//adding 
accHolder.city="mangalore";
console.log(accHolder)

//deleting 
delete accHolder.city
console.log(accHolder)

//printing object inside an object
console.log(accHolder["name"])
console.log(accHolder.Otherifo.pin)



