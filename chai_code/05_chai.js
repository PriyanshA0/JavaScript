//Premitive data types
//Pass by value means when we assign a primitve data type variable to another variable
//then a copy of the value is created in the new variable
//so if we change the value of new variable it will not affect the old variable
//7 Types : string, number, bigint, boolean, null, undefined, symbol

const score = 100


//Non-premitive data type
//Reference pass means when we assign a non-premitive data type variable to another variable
//then a reference of the value is created in the new variable
//so if we change the value of new variable it will affect the old variable
//1 Type : object (array, function, etc)

const heros = ['shaktiman', 'naagraj', 'doga']

let obj={
    name: 'Chai.js',
    description: 'Chai.js is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.',
    version: '4.3.7',
    main: 'index.js',
}
//Function Declaration by Variable method

const myFunction = function(){
    console.log('This is my function')
}

// console.log(typeof heros) //object
// console.log(typeof myFunction) //function

//Memory Stack and Heap
//Stack is used to store primitve data types and references to non-premitive data types
//Heap is used to store non-premitive data types  


let name = 'Chai.js' //Stored in Stack
let framework = name //Stored in Stack
framework = 'Mocha' //Stored in Stack
// console.log(name) //Chai.js
// console.log(framework) //Mocha

let userone = {
    email: "user@gmail.com",
    upi:"user@upi"
}

let usertwo = userone //Reference is stored in Stack, Object is stored in Heap
usertwo.email = "usertwo@gmail.com"
console.log(userone.email) //output: usertwo@gmail.com
console.log(usertwo.email) //output: usertwo@gmail.com
//resone: both userone and usertwo are pointing to the same object in heap memory