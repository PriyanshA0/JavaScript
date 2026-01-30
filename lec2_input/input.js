const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("hello hunter");
console.log("Here we are learning about Data type");
console.log("first Data type is int");
console.log("int is a data type which is used to store integer values");
console.log("Eg: int = 5 ,int = 10");

rl.question("Enter a number: ", function(num1) {
  let intInput = parseInt(num1);
  console.log("intInput is", intInput);
  rl.close();
});
