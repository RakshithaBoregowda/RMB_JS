var empname="reema";
console.log(empname)

function employeeaddress()
{
    var empadd="HSR";
    console.log(empadd)

    function info()
    {
    console.log("hello")
    //global
    console.log(empname)
    }
    info();
}

employeeaddress();
