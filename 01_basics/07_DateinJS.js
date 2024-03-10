// Dates

let myDate = new Date();
//console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 4);
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2024, 0, 4, 5, 3);
// console.log(myCreatedDate.toLocaleString());

//  let myCreatedDate = new Date("01-03-2024")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp =  Date.now();
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})


