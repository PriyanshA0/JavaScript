const mar_hero = ["thor", "ironman", "hulk"];
const dc_hero = ["batman", "superman", "flash"];

mar_hero.push(dc_hero)//this will add the entire dc_hero array as a single element at the end of mar_hero

//console.log(mar_hero); // ["thor", "ironman", "hulk", ["batman", "superman", "flash"]]



// To merge two arrays instead of nesting, use the spread operator
const all_heroes = [...mar_hero, ...dc_hero];
//console.log(all_heroes); // ["thor", "ironman", "hulk", "batman", "superman", "flash"]
// Alternatively, you can use the concat method to merge arrays
const combined_heroes = mar_hero.concat(dc_hero);
//console.log(combined_heroes); // ["thor", "ironman", "hulk", "batman", "superman", "flash"]


const another_array = [1,2,3,[4,5,6],7,[4,5]];

const new_array = another_array.flat(); // This will flatten the array by one level
console.log(new_array); // [1, 2, 3, 4, 5, 6, 7, 4, 5]
// If you have deeper nested arrays, you can specify the depth as an argument to flat()

console.log(Array.isArray("Priyanshu")); // false
console.log(Array.from("Priyanshu")); // ['P', 'r', 'i', 'y', 'a', 'n', 's', 'h', 'u']

console.log(Array.from({name: "Priyanshu"})); // []
// Array.from() creates an array from an array-like or iterable object.

let score = 100
let score2 = 200
console.log(Array.of(score, score2)); // [100, 200]
// Array.of() creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

