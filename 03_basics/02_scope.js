// var c = 300
let a = 300


if(true){
    let a = 10
    const b = 20

    //console.log("INNER:", a);
}

/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}*/

//console.log(a);
//console.log(b);
//console.log(a);
// we don't declare the var because it just print the value in the function and the outer also

function one(){
    const username = "shivansh"
    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // we can't do it because it is out of the if console.log(website);
    two()
}
one()

if(true){
    const username = "shivansh"
    if(username === "shivansh"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++++
console.log(addOne(5));
addOne(5)
function addOne(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2;
}
addTwo(5)
