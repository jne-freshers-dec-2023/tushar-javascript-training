//synchronous code

console.log("Start")
console.log("Middle")
console.log("End")


//asynchronous code

console.log("Start")
setTimeout(() => {
    console.log("Middle")
}, 2000);

console.log("End")