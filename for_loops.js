//simple for loop
for(let i=0; i<=10; i++)
{
    console.log(i)
}

//initializing variable outside for 
let j = 1;
for(j=1; j<=10; j++)
{
    console.log(j)
}

//for in loop
let myArray = [1,2,3,4,5,6];

console.log("Index"+"=>"+"Values")

for(let key in myArray)
{
    console.log(key + '=>' + myArray[key])
}

//for of loop
let str = ['apple', 'banana', 'orange', 'grape'];

console.log("Elements in array are : ")

for(let key of str)
{
    console.log(key)
}