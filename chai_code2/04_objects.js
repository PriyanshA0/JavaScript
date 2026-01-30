//Way of creating object using Object constructor
//const tinderuser = new Object()

//Way of creating object using object literal
const tinderuser = {}

tinderuser.id = 'abc123'
tinderuser.name = 'Priyanshu'
tinderuser.isLoggedIn = false


//console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Priyanshu",
            lastnamw: "Mishra"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//Diffrence is ? 
//console.log(regularUser.fullname?.userfullname.lastnamw)

const obj1 = {1: "a", 2:"b"}
const obj2 = {2: "c", 3:"e"}

// What is this ? object.assign()
//It is used to copy the values of all enumerable own properties from one or more source objects to a target object.
//It will return the target object
//syntax: Object.assign(target, ...sources)
//const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2} //spread operator


const users = [
    {
        id:1,
        name: "Priyanshu",
    },
    {
        id:2,
        name:"nidhi"
    },
    {

    },
    {

    },
]
//This is how we access name of second user
users[1].name

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));//true
console.log(tinderuser.hasOwnProperty('age'));//false


//Destructuring objects
const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Priyanshu Mishra"
}
//This is normal way of accessing object properties
//course.coursename
//This is how we destructure objects

//iska matlab hai ki coursename, price aur courseInstructor variable ban jayenge jisme respective values assign ho jayengi
const {coursename, price, courseInstructor} = course

//console.log(coursename);

const navbar = ({comapny}) => {

}

navbar(comapny = "Mishra Priyanshu")
//json  - javascriptobjectnotation
{
    // name: "Priyanshu",
    // age: 21,
    // isLoggedIn: false
};


//correct json formate
// {
//     "name":"Mishra Priyanshu",
//      "age":"23"
// }


//Array formate of API 
[
    {},
    {},
    {}
]
