//For of loop
/*
For...of loop ka use iterable objects (jaise arrays, strings, maps, sets) ke elements par iterate karne ke liye hota hai.
Iska syntax kuch is tarah hota hai:
for (variable of iterable){
    //code to be executed
}
Yahan, variable har iteration me iterable ke current element ko represent karta hai.
Example:
let myArray = ['apple', 'banana', 'cherry'];
for (let fruit of myArray){
    console.log(fruit);
}
*/
//Example of For...of loop
let myArray = ['flash', 'superman', 'batman', 'wonderwoman'];
for (let hero of myArray){
    //console.log(`Hero name is: ${hero}`);
}

const aa = [1,2,3,4,5];
for (let i of aa){
    //console.log(`value is : ${i}`); 
}

const name = "Nidhi";
for (let char of name){
    //console.log(`character is : ${char}`);
}

//Maps
const newMap = new Map();
newMap.set(1, 'one');
newMap.set(2, 'two');
newMap.set(3, 'three');
for (let [key, value] of newMap){
    //console.log(`Key is: ${key}, Value is: ${value}`);
}

const map = new Map();
map.set('a', 'apple');
map.set('b', 'banana');
map.set('c', 'cherry');
for (let [key,value]of map){
    //console.log(`key is : ${key}, value is : ${value}`);
}

const obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}
for (let [key,value] of Object.entries(obj)){
    //console.log(`key is: ${key}, value is : ${value}`)
}

//For...in loop
/*
For...in loop ka use objects ke enumerable properties par iterate karne ke liye hota hai.
Iska syntax kuch is tarah hota hai:
for (variable in object){
    //code to be executed
}
Yahan, variable har iteration me object ke current property key ko represent karta hai.
Example:
let myObject = {a: 1, b: 2, c: 3};
for (let key in myObject){
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
}
*/
//Example of For...in loop
let myObject = {
    name: 'John',
    age: 25,
    city: 'New York'
};
for (let key in myObject){
    //console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

const programmer = ['html', 'css', 'js', 'react'];
for (const key in programmer){
    //console.log(`Index is ${key} and value is ${programmer[key]}`);
}