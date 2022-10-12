async function sync()
{
    console.log("login to application")
    var promise=new Promise((resolve,reject)=>{

    setTimeout(() => {
    console.log("inprogress")
    resolve("success")
    reject("failure")
    }, 2000);

})

await promise.then((message)=>{console.log(message);})
             .catch((message)=>{console.log(message);})

}
sync()

