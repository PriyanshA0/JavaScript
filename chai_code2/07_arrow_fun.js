//Arrow Functions
//Muliline comments
/*
Hindi me samjhayen to:
Arrow functions ek concise syntax provide karte hain functions ko define karne ke liye.
Ye traditional function expressions ka ek shorthand version hain.
Arrow functions me 'this' keyword ka behavior bhi different hota hai, jo ki lexical scope ko follow karta hai.
Iska matlab hai ki arrow function apne surrounding context ka 'this' value inherit karta hai, na ki apne khud ke 'this' value ko create karta hai.
*/

const user = {
    username: "Priyanshu",
    price : 100,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`); //Welcome Priyanshu
        console.log(this);
        //Yeh this keyword user object ko refer kar raha hai
        /*Matlab:
        {
            username: "Priyanshu",
            price : 100,
            welcomeMessage: function(){...}
        }
            eplaination:
            this keyword user object ko refer kar raha hai kyunki welcomeMessage function user object ke andar defined hai.
        */

    }
}

user.welcomeMessage();
user.username = "Nidhi"
user.welcomeMessage();
/*
Output:
Welcome Priyanshu
{
  username: 'Priyanshu',
  price: 100,
  welcomeMessage: [Function: welcomeMessage]
}
Welcome Nidhi
{
  username: 'Nidhi',
    price: 100,
    welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this); //global object (window in browsers, global in Node.js)
//Yeh this keyword global object ko refer kar raha hai
//Matlab: global scope mein this keyword global object ko refer karta hai.  
/*Explaination:
Jab hum global scope mein this keyword ka use karte hain, to yeh global object ko refer karta hai.
Browser environment mein yeh window object hota hai, aur Node.js environment mein yeh global object hota hai.
*/

/*
iska output kya hoga?
Answer: global object (window in browsers, global in Node.js)
isliye output
{}
*/

const chai = function(){
    let username = "Priyanshu";
    console.log(this.username); //undefined
    /*
    Explanation:
    Arrow function ke andar this keyword apne surrounding context ka this value inherit karta hai.
    Yahan surrounding context global scope hai, jahan username defined nahi hai, isliye undefined aata hai.
    */
}

chai();

//Arrow function syntax
const chaiArrow = () => {
    let username = "Priyanshu";
    console.log(this.username); //undefined
    /*
    Explanation:
    Arrow function ke andar this keyword apne surrounding context ka this value inherit karta hai.
    Yahan surrounding context global scope hai, jahan username defined nahi hai, isliye undefined aata hai.
    */
}

// const sum  = (num1, num2) => {
//     return num1 + num2;
// }

const sum = (num1, num2) => num1 + num2; //implicit return
//Agar function ke andar sirf ek hi expression hai, to curly braces aur return statement ko hata kar implicit return use kar sakte hain.

console.log(sum(5, 10)); //15

/*
curly braces aur return statement ke bina arrow function ka use karne ka fayda:
1. Conciseness: Code zyada concise aur readable ho jata hai.
2. Implicit Return: Agar function ke andar sirf ek hi expression hai, to usse directly return kar sakte hain bina return keyword ke.
3. Cleaner Syntax: Code zyada clean aur less cluttered lagta hai, especially jab simple operations perform kar rahe hote hain.
*/

//Object ke liye 
const obj = (num1,num2) => ({
    sum: num1 + num2,
    difference: num1 - num2
});
console.log(obj(10,5)); //{ sum: 15, difference: 5 }
//Agar arrow function object return kar raha hai, to object ko parentheses me wrap karna padta hai, taaki JavaScript usse block ke roop me na samjhe.