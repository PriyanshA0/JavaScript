//Loops(iterative Statements)
/*
Loops ka use hum tab karte hain jab hume koi code block baar baar execute karna hota hai, jab tak ki koi specific condition true rahe.
JavaScript me 3 main types ke loops hote hain:
1. For Loop
2. While Loop
3. Do...While Loop
1. For Loop:
For loop ka use tab hota hai jab hume pata hota hai ki hume kitni baar loop chalana hai.
Iska syntax kuch is tarah hota hai:
for(initialization; condition; increment/decrement){
    //code to be executed
}
Yahan, initialization me loop variable ko initialize kiya jata hai, condition me loop chalane ki condition di jati hai, aur increment/decrement me loop variable ko update kiya jata hai.
Example:
for(let i = 0; i < 5; i++){
    console.log(i);
}
2. While Loop:
While loop ka use tab hota hai jab hume pata nahi hota ki loop kitni baar chalega, lekin hume ek condition ke basis par loop chalana hota hai.
Iska syntax kuch is tarah hota hai:
while(condition){
    //code to be executed
}
Yahan, condition me loop chalane ki condition di jati hai.
Example:
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
3. Do...While Loop:
Do...While loop bhi while loop ki tarah hi hota hai, lekin isme code block kam se kam ek baar execute hota hai, chahe condition false hi kyu na ho.
Iska syntax kuch is tarah hota hai:
do{
    //code to be executed
} while(condition);
Yahan, code block pehle execute hota hai, aur phir condition check ki jati hai.
Example:
let i = 0;
do{
    console.log(i);
    i++;
} while(i < 5);
*/
//Example of For Loop
for (let i = 0 ; i < 5; i++){
    //console.log("For loop itreation:", i);
}

//Nested For Loop
for (let i = 1; i <= 3; i++){
    console.log(`Outer Loop iteration: ${i}`);
    for (let j = 1; j <= 2; j++){
        //console.log(`Outer Loop iteration: ${i}, Inner Loop iteration: ${j}`);
        console.log(`Inner Loop iteration: ${j}`);
    }
    console.log("------------");
}

let myArray = [10, 20, 30, 40, 50];
//Example of For Loop to iterate array
for (let i = 0; i < myArray.length; i++){
    console.log(`Element at index ${i} is ${myArray[i]}`);
}

//Break and Continue keywords
/*
Break:
Break keyword ka use loop ya switch statement ko prematurely terminate karne ke liye hota hai.
Jab break statement execute hota hai, to control loop ya switch statement se bahar nikal jata hai.
Example:
for (let i = 0; i < 10; i++){
    if (i === 5){
        break; // Loop yahan terminate ho jayega jab i ki value 5 hogi
    }
    console.log(i);
}
Continue:
Continue keyword ka use loop ke current iteration ko skip karne ke liye hota hai aur next iteration par jump karne ke liye hota hai.
Jab continue statement execute hota hai, to control loop ke next iteration par chala jata hai, bina current iteration ke baaki code ko execute kiye.
Example:
for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
        continue; // Agar i even hai, to current iteration skip kar do
    }
    console.log(i); // Sirf odd numbers print honge
}
*/
for (let i = 0; i < 10; i++){
    if (i === 5){
        break; // Loop yahan terminate ho jayega jab i ki value 5 hogi
    }
    //console.log("Break Example - Value of i:", i);
}
for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
        continue; // Agar i even hai, to current iteration skip kar do
    }
    console.log(i); // Sirf odd numbers print honge
}