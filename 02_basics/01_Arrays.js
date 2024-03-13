// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["IronMan", "Thor", "Hulk"]
const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);

//Array Methods

myArr.push(9)
myArr.pop()

myArr.unshift(5)
myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof myArr);


//splice, slice
console.log("A", myArr);


const myna1 = myArr.slice(1, 3)
console.log("B", myArr);
console.log(myna1);

const myna2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(myna2);

