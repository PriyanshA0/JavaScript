//Immediately Invoked Function Expression (IIFE)
/*
IIFE ek aisa function hota hai jo define hote hi turant execute ho jata hai.
Iska use hum temporary scope create karne ke liye karte hain, jisse variables aur functions global scope mein pollute na ho.
*/
function fun(){
    console.log(`DB connected`);
}
fun(); //DB connected

//IIFE version
(function(){
    console.log(`DB connected`);
})(); //DB connected

/* 
IIFE ke fayde:
1. Variable Encapsulation: IIFE ke andar defined variables aur functions sirf usi IIFE ke scope mein accessible hote hain, jisse global scope pollute nahi hota.
2. Avoiding Global Namespace Pollution: IIFE ke use se hum apne code ko global namespace mein pollute hone se bacha sakte hain, jisse naming conflicts ka risk kam ho jata hai.
3. Immediate Execution: IIFE turant execute ho jata hai, jisse hum apne code ko turant run kar sakte hain bina kisi additional function call ke.
4. Module Pattern: IIFE ka use hum module pattern implement karne ke liye kar sakte hain, jisme hum private variables aur methods create kar sakte hain jo bahar se accessible nahi hote.
*/
//Example of IIFE
const result = (function(num1, num2){
    const sum = num1 + num2; //private variable
    return sum; //public return value
})(5, 10);
console.log(result); //15

//Type of IIFE
/* Named IIFE */
(function namedIIFE(){
    console.log("This is a named IIFE");
})();
//Output: This is a named IIFE

/* Arrow Function IIFE */
(() => {
    console.log("This is an arrow function IIFE");
})();
//Output: This is an arrow function IIFE

/* Parameterized IIFE */
(function(num1, num2){
    console.log("Sum is:", num1 + num2);
})(5, 10);
//Output: Sum is: 15
/* IIFE with Return Value */
const multipliedValue = (function(num1, num2){
    return num1 * num2;
})(5, 10);
console.log("Multiplied Value is:", multipliedValue);
//Output: Multiplied Value is: 50

