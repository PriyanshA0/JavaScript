//Scope
// let a = 10; //global scope
// let b = 20; //global scope
// const c = 30; //global scope
// var d = 40; //global scope

//console.log("Outside block", a, b, c, d);

//block scope
if (true){
    let a = 100; //block scope
    const b = 200;
    var d = 400; //function scope
    //console.log("Inside block", a, b, c, d);
}

//console.log("Outside block", a, b, c, d); //d will be 400 as var is function scoped

function one(){
    const username = "Chai"; //function scope

    function two(){
        const password = "Code";
        console.log(username); //can access parent function variable
        //yeh upper function ke variable ko access kar sakta hai
    }
    console.log(password); //error: cannot access child function variable
    //yeh lower function ke variable ko access nahi kar sakta hai
    two();
}

one();
//Iska output kya hoga?
//Answer: Error: cannot access password variable
//Explanation: password variable is defined inside function two() and cannot be accessed outside of it.

//Isko bolte Closure
//closure ek aisa function hota hai jo apne parent function ke scope ko access kar sakta hai, chahe parent function ka execution complete ho chuka ho.

if (true){
    const username = "ChaiCode";
    if (username === "ChaiCode"){
        const website = "www.chaicode.com";
        console.log(username + " " + website); //ChaiCode www.chaicode.com
    }
    console.log(website); //error: cannot access website variable
    //website variable sirf inner if block ke andar accessible hai, outer block mein nahi.
}

console.log(username); //error: cannot access username variable
//username variable sirf outer if block ke andar accessible hai, global scope mein nahi.

//Example of closure
function addone(num){
    return num + 1;
}

addone(5); //6

const addtwo = function(num){
    return num + 2;
}
addtwo(5); //7

//Dono me Difference kya hai?
//First one is a normal function that takes a number and returns the number plus one.
//Second one is a function expression assigned to a constant variable addtwo, which takes a number and returns the number plus two.

//Hindi me samjhayen to:
//Pehla function ek normal function hai jo ek number leta hai aur usme ek jod kar return karta hai.
//Dusra function ek function expression hai jo ek constant variable addtwo ko assign kiya gaya hai, jo ek number leta hai aur usme do jod kar return karta hai.

//Dono ke access karne ka tarika same hai, dono ko hum function call karke use kar sakte hain.
//par initialization me thoda difference hai.
