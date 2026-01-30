//Number Type
const score = 400

const Balance = new Number(100)

//console.log(Balance)
//Output: [Number: 100]

// console.log(Balance.toString()) //100
// console.log(Balance.toFixed(2)) //100.00

const othernumber = 123.4567
// console.log(othernumber.toPrecision(4)) //123.5
// console.log(othernumber.toPrecision(3)) //123

const hundred = 1000
// console.log(hundred.toLocaleString('en-IN')) //1,000
// console.log(hundred.toLocaleString('de-DE')) //1.000

//Maths 
console.log(Math.PI) //3.141592653589793
console.log(Math.E) //2.718281828459045
console.log(Math.round(4.6)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.ceil(4.1)) //5
console.log(Math.min(1,2,3,4,5,-10,0)) //-10
console.log(Math.max(1,2,3,4,5,-10,0)) //5
console.log(Math.random()) //random number between 0 and 1
console.log(Math.random()*100) //random number between 0 and 100
console.log(Math.floor(Math.random()*100)) //random integer between 0 and 99    
console.log(Math.abs(-50)) //50
console.log(Math.sqrt(64)) //8
console.log(Math.pow(2,5)) //32
console.log(Math.log(1)) //0


//Rondom number between min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //random integer between 10 and 20 inclusive