const resolvedPromise = new Promise((resolve, reject)=>{

    resolve("resolvedPromise is resolved")
})

resolvedPromise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

const rejectedPromise = new Promise((resolve, reject)=>{

    reject("rejectedPromise is rejected")
})

rejectedPromise
.then((result)=>{

    console.log(result)
})
.catch((error)=>{
    console.log(error)
})