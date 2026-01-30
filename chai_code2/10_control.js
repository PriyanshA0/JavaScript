// Control flow
/*
    Control flow ka matlab hai ki code ka execution order kaise hota hai.
    JavaScript me control flow sequential hota hai, matlab code top se bottom tak execute hota hai.
    Lekin kuch constructs hote hain jo control flow ko change kar sakte hain, jaise:
    1. Conditional Statements (if, else if, else, switch)
    2. Loops (for, while, do...while)
    3. Function Calls
    4. Exception Handling (try, catch, finally)
*/

// Example of Conditional Statement
//If
//syntax
/*
if(condition){
    //code to be executed if condition is true
}
*/
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
//Else
//syntax
/*
if(condition){
    //code to be executed if condition is true
} else {
    //code to be executed if condition is false
}
*/
age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}