//converstion and operation
let score = "33abc"
//console.log(typeof score)


let valueInNumber = Number(score)
//console.log(typeof valueInNumber);

//console.log(valueInNumber);//NaN -> not a number
//NaN is a type of number in JS
//"33" =>33
//"abc" =>NaN
//"33abc" =>NaN 
//true =>1 , false =>0

//converstion in boolean
let isloggedIn = ""
let booleanIsLoggedIn = Boolean(isloggedIn)
//console.log(booleanIsLoggedIn)
//"" => false
//"Priyansh" => true
//0 => false

//converstion in string
let someNumber = 3434
let stringNumber = String(someNumber)
//console.log(typeof stringNumber)
//3434 => "3434"


//operations
let value = 34
let negValue = -value
//console.log(negValue)//-34

let str1 = "Priyansh"
let str2 = "Mishra"
//console.log(str1 + " " + str2)//Priyansh Mishra

// console.log("1" + 2)//12
// console.log(typeof ("1" + 2))//string

// console.log("1" - 2)//-1
// console.log(typeof ("1" - 2))//number

//precedence of operators
let x = 3
let y = 4
let z = 5
let ans = x + y * z

//console.log(ans)//23

//precedence can be changed using brackets
ans = (x + y) * z
//console.log(ans)//35

//increment and decrement operators
let incrementValue = 10
//incrementValue = incrementValue + 1
incrementValue++
//console.log(incrementValue)//11
incrementValue--
//console.log(incrementValue)//10
//++incrementValue
//console.log(incrementValue)//11
//--incrementValue
//console.log(incrementValue)//10

//post increment and pre increment
let postIncrement = 15
//console.log(postIncrement++)//15
//console.log(postIncrement)//16  
let preIncrement = 15
//console.log(++preIncrement)//16
//console.log(preIncrement)//16
//similar for post decrement and pre decrement

