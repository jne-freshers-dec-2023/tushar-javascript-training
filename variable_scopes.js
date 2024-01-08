var globalVar = "I am global variable";

function sampleFunction(){
    var localVar = "I am local variable";

    console.log("Inside the function : ");
    console.log("Global variable : ", globalVar);
    console.log("Local Variable : ", localVar);
}

console.log("Outside the function : ");
console.log("Global Variable : ", globalVar);
// console.log("Variable inside function : ", localVar)  error occurs as localVar is not defined

sampleFunction();