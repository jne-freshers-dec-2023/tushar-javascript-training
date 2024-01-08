function operation1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log("Operations 1 Completed");
            resolve("Result from Operation 1")
        },2000)
    })
}

function operation2(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log("Operations 2 Completed")
            resolve("Result from Operation 2");
        },1500)
    })
}

function operation3(){
    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log("Operation 3 Completed");
            resolve("Result from Operation 3");
        }, 1000)
    })
}

const promises = [operation1(), operation2(), operation3()];

Promise.all(promises)
.then((result)=>{
    console.log("All Operations Completed Successfull")
    console.log("Result : ", result)
})
.catch((error)=>{

    console.error("Atleast One Operation Failed : ", error);
})


