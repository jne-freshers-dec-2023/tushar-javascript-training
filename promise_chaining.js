const myPromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{

        const success = true;

        if(success)
        {
            resolve("Operation Completed");
        }
        else
        {
            reject("Operation Failed")
        }
    },1000)
})


myPromise
.then((result)=>{
    console.log(result);
    return "Another Operation Started";
})
.then((result)=>{
    console.log(result);
    return "Another Operation Completed"
})
.then((result)=>{
    console.log(result);
    return "All Operations Completed"
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})