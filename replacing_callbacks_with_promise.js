//callback
function greet(name, callback)
{
    setTimeout(function(){
        console.log("Hello " + name + "!")
        callback();
    },1000)
}

function sayGoodBye()
{
    setTimeout(function(){

        console.log("Goodbye!!");
    },1000)
}

greet("Tushar", sayGoodBye);


//replacing callbacks with promise

function greetWithPromise(name){
    return new Promise(function(resolve){

        setTimeout(function(){

            console.log("Hello " + name + "!"+" using promise");
            resolve();
        },3000)
    })
}

function sayGoodByeWithPromise(){
    return new Promise(function(resolve){

        setTimeout(function(){

            console.log("Goodbye using promise!!");
            resolve();
        },1000)
    })
}

greetWithPromise("Tushar")
.then(function(){

    return sayGoodByeWithPromise();
})
.catch(function(error){
    console.error("Error : ", error);
})