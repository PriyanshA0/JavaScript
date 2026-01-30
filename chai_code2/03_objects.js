// singleton pattern

//object literal

//what is symbol?
//symbol is a unique and immutable primitive value and may be used as the key of an Object property.
//in simple words it is used to create unique identifiers for object properties

//symbols
const sym1 = Symbol('myidentifier');

//what is object?
//collection of key value pairs
//example
//name is key and "Priyanshu" is value
//syntax is key:value

const user = {
    name: "Priyanshu",
    age: 21,
    [sym1]: 'my symbol value',
    isLoggedIn: true,
    email: 'priyanshu@example.com',
    lastlogin: ['2023-10-01', '2023-10-02']
}



console.log(user);
console.log(user.name); //dot notation
console.log(user['age']); //bracket notation
//what is difference between dot and bracket notation?
//in bracket notation we can use variable also
const key = 'email';
console.log(user[key]);
console.log(user[sym1]); //accessing symbol property
console.log(typeof sym1); //symbol

//adding new property
user.namre = "New Priyanshu"; //updating existing property
//Object.freeze(user); //this will make the object immutable
user.age = 22; //this will not work as object is frozen
console.log(user);


user.greating = function() {
    console.log("Hello " + this.name);
}//method added to object

user.greatingtwo = function() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
}//method added to object

console.log(user.greating());//function definition
//output will be undefined if we don't call the function

console.log(user.greatingtwo());//function call

//freeze method 
//Object.freeze(value)