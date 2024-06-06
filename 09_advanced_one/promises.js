const promiseOne = new Promise(function(resolve, reject) {
    // Do an ansyc task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)

})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task to");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async is resolved");
})

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({ username: "Chai", email: "chai@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
     console.log(user);
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({ username: "shivansh", password: "123"})
        }else{
            reject('ERROR')
        }
    }, 1000)
})
 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));