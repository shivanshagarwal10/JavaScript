const accountId = 144553
let accountEmail = "shiv@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2   //not allowed

accountEmail = "shiva@gmail.com"
accountPassword = "778q331"
accountCity = "Hyderabad"

/* Prefer not to use var because of issue in block scope and functional scope */

console.table([accountEmail, accountPassword, accountCity, accountState])

console.log(accountId);