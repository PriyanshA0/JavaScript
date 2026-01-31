const myNumbers = [1, 2, 3, 4, 5, 6];

//Map for adding 10 in each element of array
//Bin (_) mein hum new array return karte hain
//Agar hum curly braces use karte hain to hume return statement use karna padta hai
const newNumber = myNumbers.map( (num) => num + 10 );
//console.log(newNumber);
const newNums = myNumbers.map((num)=>{return num + 10});
//console.log(newNums);

//Filter for getting elements based on condition
const filterNumbers = myNumbers.filter( (num) => num > 4 );
//console.log(filterNumbers);

//Chaining of map and filter
const newValues = myNumbers
    .map( (num) => num * 10)
    .map((num) => num + 1)
    .filter( (num) => num > 30);
console.log(newValues);