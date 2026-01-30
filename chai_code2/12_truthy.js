const userEmail = "priyanshu@gmail.com"
if (userEmail){
    console.log("Condition is truthy")
}else{
    console.log("Condition is falsy")
}
//Truthy and Falsy Values
/*
JavaScript me kuch values ko "truthy" aur kuch ko "falsy" mana jata hai.
Truthy Values:
- Non-zero numbers (e.g., 1, -1, 3.14)
- Non-empty strings (e.g., "hello", "0", "false")
- Objects (e.g., {}, [])
- true
Falsy Values:
- 0
- "" (empty string)
- null
- undefined
- NaN (Not a Number)
- false
Jab koi value condition me use hoti hai (jaise if statement me), to JavaScript us value ko boolean me convert karta hai.
Agar value truthy hai, to condition true hoti hai; agar falsy hai, to condition false hoti hai.
Is concept ka use karke hum conditional statements me alag-alag tarah ki values ko check kar sakte hain.
*/

//Array is empty check
const name = []
if (name.length === 0){
    console.log("Array is empty")
}

const name1 ={}
if (Object.keys(name1).length === 0){
    console.log("Object is empty")
}

//Nullish coalescing operator (??)
/*
Nullish coalescing operator (??) ek logical operator hai jo do values ko compare karta hai aur pehli value ko return karta hai agar wo null ya undefined nahi hai; agar pehli value null ya undefined hai, to dusri value return karta hai.
Iska syntax kuch is tarah hota hai:
let result = value1 ?? value2;
Yahan, agar value1 null ya undefined hai, to result me value2 assign hoga; agar value1 valid hai (null ya undefined nahi), to result me value1 assign hoga.
Ye operator tab useful hota hai jab hume kisi variable ki value ko check karna hota hai aur uske default value ko set karna hota hai agar wo variable null ya undefined ho.
*/
let val1;
val1 = 5 ?? 10; // val1 will be 5
// console.log(val1);
val1 = null ?? 10; // val1 will be 10
// console.log(val1);
val1 = undefined ?? 10; // val1 will be 10
// console.log(val1);

//Ternary Operator
/*
Ternary operator ek shorthand syntax hai jo conditional statements ko likhne ke liye use hota hai.
Iska syntax kuch is tarah hota hai:
condition ? expression1 : expression2;
Yahan, agar condition true hoti hai, to expression1 execute hota hai; agar condition false hoti hai, to expression2 execute hota hai.
Ternary operator ka use karke hum simple if-else statements ko ek line me likh sakte hain, jo code ko concise aur readable banata hai.
*/
const isLoggedIn = true;
//Using if-else
/*if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}*/
//Using Ternary Operator
isLoggedIn ? console.log("User is logged in") : console.log("User is not logged in");