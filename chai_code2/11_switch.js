//Switch Condition
/*
Switch statement ek control flow statement hai jo ek expression ke value ke basis par multiple possible execution paths me se ek ko choose karta hai.
Iska syntax kuch is tarah hota hai:
switch(expression) {
    case value1:
        //code to be executed if expression === value1
        break;
    case value2:
        //code to be executed if expression === value2
        break;
    ...
    default:
        //code to be executed if expression doesn't match any case
}
Yahan, expression evaluate hota hai aur uski value ko case values ke sath compare kiya jata hai.
Jab match milta hai, to us case ke andar ka code execute hota hai.
Break statement ka use karke hum switch statement se bahar nikal sakte hain, taaki baaki cases execute na ho.
Agar koi match nahi milta, to default case ka code execute hota hai (agar defined ho).
*/
const month = 3;  //If yeh string hota toh "Fab"
switch(month){
    case 1: // case "Jan"
        console.log("January");
        break;
    case 2: // case "Fab"
        console.log("Fabruary");
        break;
    case 3: // case "March"
        console.log("March");
        break;
    default:
        console.log("Abhi March ke baad")
        break;
}