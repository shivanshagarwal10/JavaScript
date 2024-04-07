//const tinderUser = {};
const tinderUser = new Object();

tinderUser.id = "1233eha",
tinderUser.name = "Sam",
tinderUser.isLoggedIn = false

//console.log(tinderUser);

 const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstName: "Shivansh",
            lastName: "Agarwal"
        }
    }
 }
 //console.log(regularUser.fullname.userfullname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {2: "c", 3: "d"}

 const obj = {...obj1,...obj2}

 //console.log(obj);

 const users = [
    {
        id : 1,
        email : "s@gmail.com", 
    },
    {
        id : 2,
        email : "h@gmail.com", 
    },
    {
        id : 3,
        email : "i@gmail.com", 
    }
 ]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JavaScript in hindi",
    price: "999",
    CourseInstructor: "shivansh"

}
//course.CourseInstructor

const {courseName: jscourse} = course;
console.log(jscourse);

const navbar = ({company}) => {

    navbar (company = "shivash")
}
// {
//    "name" : "shivansh",
//    "course": "java scrpit in hindi",
//    "price" : "free"
// }

[
    {},
    {},
    {}
]





