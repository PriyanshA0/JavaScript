//Variables
const accountID = 12345
let accountEmail ="priyanshu@gmail.com"
var accountPassword = "Priyansh@123"
accountcity = "Mumbai"
let accountState; //declaration

//accountID = 123456 // not allowed

accountEmail = "Nidhi@gmail.com"
accountPassword = "Nidhi@123"
accountcity ="Banglore"

console.log(accountID)

/*
Prefer not to use var because of its function scope
Use const for non changing variables
Use let for changing variables
*/

//console.table([])//for tabular representation
console.table([accountID,accountEmail,accountPassword,accountcity,accountState])

//accountState output will be undefined as it is declared but not initialized