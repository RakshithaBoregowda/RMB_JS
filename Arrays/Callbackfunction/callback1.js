function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function arithmetic(a, b, func)
{
    console.log("arithmetic operation")
    result=add(a,b)
    console.log(result)
    
}
arithmetic(1,2,add)