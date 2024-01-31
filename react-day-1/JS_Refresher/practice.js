console.log("Hello world!");

//function invocation
function greet() {
  console.log("Hello!!");
}

greet();

// function invocation by passing params
function greetUser(username, message) {
  console.log(username + message);
}

greetUser("Tushar", " Hello!!!");

//arrow functions
const greetAdmin = (adminName, message) => {
  console.log(adminName + message);
};

greetAdmin("Tushar", " Hello!");

//objects
const user = {
  name: "tushar",
  age: 23,
  sayHello() {
    console.log("Hello I am inside object");
  },
};

console.log(user);
user.sayHello();

//class
class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  greet() {
    console.log("Hi");
  }
}

const user1 = new User("Deomare", 10);

console.log(user1.name, user1.age);
user1.greet();

//Arrays
const operations = ["create", "read", "update", "delete"];
console.log(operations);

//some array methods

const index = operations.findIndex((item) => {
  return item === "delete";
});

console.log(index);

const updatedOperations = operations.map((item) => {
  return item + "!";
});

console.log(updatedOperations);

//Destructuring

const [firstName, lastName] = ["Tushar", "Deomare"];

console.log(firstName);
console.log(lastName);

//spread operator

const newOperations = [...operations, "write"];

console.log(newOperations);

const newUser = {
  Admin: true,
  ...user,
};

console.log(newUser);
newUser.sayHello();

//passing function as value
function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("Passed function as value successfully");
});

//string and string methods
let helloMessage = "Hello";
helloString = helloMessage.concat("!!!");

console.log(helloString);
