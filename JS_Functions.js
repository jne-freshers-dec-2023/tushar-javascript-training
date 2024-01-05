//Function Declaration
function hello(name)
{
    console.log("Hello" + " " + name + "!");
}

hello("Tushar")

//Function Expression
let hi = function(new_name)
{
    console.log("Hi" + " " + new_name +"!")
}

hi("Tushar")

//Arrow Functions
let hii=(naya_name)=>{
    console.log("Hii" +" "+ naya_name +"!")

}

hii("Tushar")

//High Order function
function operation(x, y, operationfunc)
{
    return operationfunc(x,y);
}

let add = (x,y)=>{
    return x+y
}

let multiply = (x,y)=>{
    return x*y
}

console.log(operation(5,3,add))
console.log(operation(5,3,multiply))

