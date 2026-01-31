//For...each Loop
/*
For...each loop ka use arrays, strings, maps, aur objects ke elements par iterate karne ke liye hota hai.
Iska syntax kuch is tarah hota hai:
iterable.forEach(function(currentValue, index, array){
    //code to be executed
});
Yahan, currentValue har iteration me iterable ke current element ko represent karta hai, index us element ka index hota hai, aur array poora iterable hota hai.
Example:
let myArray = ['apple', 'banana', 'cherry'];
myArray.forEach(function(fruit, index){
    console.log(`Element at index ${index} is ${fruit}`);
});
*/
//Example of For...each loop
let myArray = ['flash', 'superman', 'batman', 'wonderwoman'];
myArray.forEach(function(hero, index){
    //console.log(`Element at index ${index} is ${hero}`);
});

const numbers = [1,2,3,4,5];
numbers.forEach(function(i){
    //console.log(`value is : ${i}`);
})
numbers.forEach((i)=>{
    //console.log(`value is : ${i}`);
})

function printMe(iteam){
    //console.log(`value is : ${iteam}`);
}

//numbers.forEach(printMe);

const codding = [
    {language: 'JavaScript', difficulty: 'Medium'},
    {language: 'Python', difficulty: 'Easy'},
    {language: 'C++', difficulty: 'Hard'}
]
codding.forEach((iteam)=>{
    console.log(`Language: ${iteam.language}, Difficulty: ${iteam.difficulty}`);
})