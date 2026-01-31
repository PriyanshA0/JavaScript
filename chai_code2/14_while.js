//While loop and Do...While loop
/*
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
//Example of While Loop
let i = 0;
while(i<5){
    //console.log(`while loop iteration: ${i}`);
    i++;
}

//Example of Do...While Loop
let j = 3;
do{
    //console.log(`do...While loop itreation: ${j}`);
    j++;
} while(j > 5);

//Array iteration using While Loop
let myArray= ['flash', 'superman', 'batman', 'wonderwoman'];
i = 2;
while(i <myArray.length){
    //console.log(`Element at index ${i} is ${myArray[i]}`);
    i++;
}