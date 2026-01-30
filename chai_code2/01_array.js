//Array
const myArr = [1, 2, 3, 4, 5];

//Push method - adds an element to the end of the array
myArr.push(6);
console.log(myArr); // [1, 2, 3, 4, 5, 6]

//Pop method - removes the last element from the array
const lastElement = myArr.pop();
console.log(lastElement); // 6
console.log(myArr); // [1, 2, 3, 4, 5]

//Unshift method - adds an element to the beginning of the array
myArr.unshift(0);
console.log(myArr); // [0, 1, 2, 3, 4, 5]

//Shift method - removes the first element from the array
const firstElement = myArr.shift();
console.log(firstElement); // 0
console.log(myArr); // [1, 2, 3, 4, 5]

//INCLUDES method - checks if an element is present in the array
console.log(myArr.includes(3)); // true
console.log(myArr.includes(6)); // false

//Slice Method
const newArr = myArr.slice(1, 4); // extracts elements from index 1 to 3
console.log(newArr); // [2, 3, 4]

//Splice Method - modifies the array by removing or replacing elements
myArr.splice(2, 1, 10, 11); // removes 1 element at index 2 and adds 10 and 11
console.log(myArr); // [1, 2, 10, 11, 4, 5]