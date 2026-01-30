//comparision operators
console.log(3 == '3')//true
console.log(3 === '3')//false
console.log(4 != 5)//true
console.log(4 !== '4')//true
console.log(5 > 3)//true
console.log(3 < 5)//true
console.log(4 >= 4)//true
console.log(3 <= 2)//false
console.log("apple" < "banana")//true
console.log("2" > "12")//true because in string "2" comes after "1"
console.log("2" > 12)//false because "2" is converted to number 2
//reason being number 2 is less than 12

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
//output will be false true true
//because while comparing null with 0
//null is converted to number 0
//so 0 > 0 => false
//0 == 0 => true
//0 >= 0 => true

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
//output will be false false false
//because while comparing undefined with 0
//undefined is converted to NaN
//so NaN > 0 => false
//NaN == 0 => false
//NaN >= 0 => false

// === operator is called strict equality operator
// it checks for value as well as datatype
// == operator is called loose equality operator
// it checks for only value not datatype
