const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce(( acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "javascript",
        price: 2999
    },
    {
        itemName: "java",
        price: 5999
    },
    {
        itemName: "mobile development",
        price: 8999
    },
    {
        itemName: "data scientist",
        price: 12999
    },
    {
        itemName: "javascript",
        price: 2999
    },

]
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);