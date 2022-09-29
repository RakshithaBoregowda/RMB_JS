var a=10;//global
let b=20;//script 
const c=30;//script

function sum(a, b) 
{
  var i=11;//local
  let j=22;//local
  const k=33;//local

{
    var e=30;//local
    let f=40;//block
    const g=50;//block
}
}
sum(2,6)

{
    var m=7;//global
    let n=8;//block
    const o=9;//block
}

