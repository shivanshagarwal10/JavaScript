// Primitive 

// 7 DataTypes : Number, Boolean, String, Null, Undefined, Symbol,
//BigInt

// const val = 100;
// const ScoreVal = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInteger = 5636723287635672n;


// Reference (Non Primitive)
//Arrays, Objects, Functions

const heros = ["Srikanth", "HS Pranoy", "Lakshay Sen"]
let myObj = {
    name: "shivansh",
    age: 21,
}

const myFunction = function(){
    //console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
console.log(typeof heros);

// *******************************************************

// Stack(Primitive), Heap(Non-Primitive)

let myName = "shivansh";

let nickName = myName;
nickName = "kanha";

// console.log(myName);
// console.log(nickName);

let userOne = {
    email: "shiva@gmail.com",
    upiId: "8228@yml"
}

let userTwo = userOne
userTwo.email = "shiv@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);








