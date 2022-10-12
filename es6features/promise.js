async function sync()
{
    console.log("log into application");
    //create an object
    var promise=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("in progress")
            resolve("success")
            reject("failure")
        },2000)
        
    })

    await promise.then((message)=>{console.log(message);})
                  .catch((message)=>{console.log(message)})
}
sync()


