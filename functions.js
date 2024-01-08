//function declaration
function greet(name){
    console.log("Hello " + name + "!")
}

greet("Tushar")

//function expression
const multiply = function(x,y){
    return x*y;
}

const result = multiply(2, 3);
console.log("Result = ", result);

//Arrow Function
const square = (num)=>num*num;

const squaredValue = square(2);
console.log("Squared value = ", squaredValue)

//Function with default parameters
function power(base, exponent = 2){
    return Math.pow(base, exponent);
}

const result1 = power(4);
const result2 = power(4, 3);

console.log("Result 1 = ", result1);
console.log("Result 2 = ", result2);

//function with rest parameter
function sum(...numbers){
    return numbers.reduce((total, num)=> total + num,0)
}

const total_sum = sum(1,2,3,4,5);

console.log("Total sum : ", total_sum)

//IIFE
// (function(){
//     console.log("Hi");
// })();
  