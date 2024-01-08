//Object in JS
const person = {

    name : "Tushar",
    age : 23,
    role : "Trainee Software Engineer"
};

console.log(person.name)
console.log(person.age)
console.log(person.role)

//MAPS in JS
const personMap = new Map();

personMap.set('name', "Tushar")
personMap.set('age', 23)
personMap.set('role', "Trainee Software Engineer")

console.log(personMap)
console.log(personMap.get("name"))
console.log(personMap.get("age"))
console.log(personMap.get("role"))