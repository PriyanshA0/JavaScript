//Functions
// console.log("P")
// console.log("r")
// console.log("i")
// console.log("y")
// console.log("a")
// console.log("n")
// console.log("s")
// console.log("h")
// console.log("u")

function printMyName() {
    console.log("P")
    console.log("r")
    console.log("i")
    console.log("y")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
    console.log("u")
}
//printMyName(); //function call

function sum(num1, num2) {
    // console.log(num1 + num2)
    let result = num1 + num2;
    return result;
}

// sum(2, 3); //5
// sum(3,"4")//34
// sum("Hello ", "World")//Hello World
// sum("5", 6)//56
// sum(3,null)//3
// sum(undefined, 5)//NaN

const result = sum(4,5); //function call
//console.log("Result",result); //undefined as sum function does not return anything

//What we done till now is function declaration
//Function expression

function login(username){
    if (username === undefined) {
        console.log("Please enter username");
        return;
        // This will exit from the function
    }
    return `Hello ${username}, you are logged in successfully`;
}

//console.log(login("Priyanshu")); //function call

function calculateSum(...numbers) {
    //rest operator
    return numbers
}

//console.log(calculateSum(1,2,3,4,5,6,7,8,9,10)); //array of numbers

const user ={
    username: "Priyanshu",
    age: 21,
    
}

function handleObject(anyobjects) {
    console.log(`username is ${anyobjects.username} and age is ${anyobjects.age}`);
}

handleObject(user); //function call with object as argument

handleObject({username: "Nidhi", age: 20}); //function call with object literal as argument

const myarr = [200,300,400,500];

function returnsecondvalue(getarray) {
    return getarray[1];
}

//console.log(returnsecondvalue(myarr)); //function call with array as argument

console.log(returnsecondvalue([100,200,300,400])); //function call with array literal as argument

