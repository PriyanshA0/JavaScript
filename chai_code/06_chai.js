//string
const name = "Priyanshu"
const surname = "Nidhi"
//console.log(name + " " + surname) //Concatenation

console.log(`hello my name is ${name} and she is my wife ${surname}`)
//Template literals (ES6 feature)
//means we can use backticks `` to create strings
//and we can use ${} to embed expressions in strings
//It makes string creation and manipulation easier and more readable


//new way to create strings
const fullName = new String('Priyanshu Mishra')
console.log(typeof fullName) //object
//what is this new String()?
//It is a String object that wraps a primitive string value
//We can use it to create string objects with additional properties and methods
//But it is not recommended to use it as it can lead to unexpected behavior
//Always prefer using string literals '' or "" to create strings
console.log(fullName[0]) //P
console.log(fullName.length) //15
console.log(fullName.toUpperCase()) //PRIYANSHU MISHRA
console.log(fullName.charAt(5))//n
console.log(fullName.indexOf('r')) //2

//substring method
const newString = fullName.substring(0,3)
console.log(newString) //Pri

//slice method
const anotherString = fullName.slice(0,3)
console.log(anotherString) //Pri
//Both substring and slice methods are used to extract a part of a string
//But there is a difference between them
//substring() method does not accept negative indices
//slice() method accepts negative indices   

//trim method
const stringWithSpaces = "   Hello World!   "
console.log(stringWithSpaces.trim()) //Hello World!
//trim() method removes whitespace from both ends of a string

//Replace method
const greeting = "Hello World!"
const newGreeting = greeting.replace("World", "Chai.js")
console.log(newGreeting) //Hello Chai.js
//replace() method replaces a specified value with another value in a string

//Include method
const phrase = "The quick brown fox jumps over the lazy dog"
console.log(phrase.includes("fox")) //true
console.log(phrase.includes("cat")) //false
//includes() method checks if a string contains a specified value and returns true or false

//Split method
const csv = "apple,banana,orange,grape"
const fruits = csv.split(",")
console.log(fruits) //['apple', 'banana', 'orange', 'grape']
//split() method splits a string into an array of substrings based on a specified separator