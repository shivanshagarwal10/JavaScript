// Class 1

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

//sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result

    return number1+number2
}
addTwoNumbers(3, 4);
addTwoNumbers(3, "4");
addTwoNumbers(3, "A");
addTwoNumbers(3, null);

// const result = addTwoNumbers(3, 4);
// console.log("Result:", result);

function loginUserMessage(username){
    //or we can write (!username)
    if(username === undefined){
        console.log("Please enter the username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("shivansh"));
console.log(loginUserMessage());






// Class 2

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 2000, 282));


function calculateCartPrice(...num1){ // for considering all the num
    return num1
}
console.log(calculateCartPrice(200, 200, 300, 2526));


function calculateCartPrice(val1, val2, ...num1){
     return num1
 }
console.log(calculateCartPrice(200, 2000, 282, 392));



const user = {
    username: "shivansh",
    price: 10000
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)


handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));








