//const tinderUser = new Object(); //singleton
const tinderUser = {}; // object literal syntax non singleton

tinderUser.id = "123abc"
tinderUser.name = "Priyansh"
tinderUser.isLoggedIn = false

//console.log(tinderUser); // {} empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Priyansh",
            lastname:"Mishra"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

