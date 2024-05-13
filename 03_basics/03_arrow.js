const user = {
    username: 'shivansh',
    price: '1999',

    welcomeMessage: function(){
        console.log(`${this.username} + Welcome to my page`);
        //console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "agarwal"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "shivansh"
//     console.log(this.username);
// }
// chai()

//const chai = function(){
    let username = "shivansh"
    console.log(this.username);
//}
chai()

const chai = () => {
    let username = "shivansh"
    console.log(this.username);
}
chai()