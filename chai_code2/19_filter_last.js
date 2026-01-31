//Reduce Filter
const myNumbers = [1, 2, 3, 4, 5, 6];

const myNums = myNumbers.reduce(function (acc,currVal){
    //console.log(`Accumulator: ${acc} Current Value: ${currVal}`);
    return acc + currVal;
},0)

//console.log(myNums);

//Reduce by Arrow Function

const myNums2 = myNumbers.reduce( (acc,currVal)=> acc + currVal,0)

//console.log(myNums2);

const shoppingCart = [
    { iteam: 'Book', price: 200},
    { iteam: 'Pen', price: 20},
    { iteam: 'Laptop', price: 50000},
    { iteam: 'Mobile', price: 20000},
    { iteam: 'Headphones', price: 2000},
];

const printShoppingCart = shoppingCart.reduce( (acc,currVal) => acc + currVal.price,0)

console.log(printShoppingCart);