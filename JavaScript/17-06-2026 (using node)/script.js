// arrow function - shorthand

// function sum(a, b) {
//     return a + b;
// }

// arrow functiont
const sum = (a, b) => {
    return a + b;
}
// for single statement
const sum1 = (a, b) => a + b;
// for single parameter
const sum2 = a => a;



const res = sum(10, 20);
console.log(res);

// Ternary operator (conditional operator)
// condition ? true : false;
const is_bot = true;
let is_human = is_bot ? false : true;
console.log(is_human);
// 0, "", null, undefind
// if (is_bot) {
//     is_human = false;
// } else {
//     is_human = true;
// } //

// SWITCH CASE:

const sampleSwitch = (n) => {
    switch (n) {
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        case 3:
            console.log(3);
            break;
        default:
            console.log("Default");
    }
}

sampleSwitch(5);

// Day

const printDay = n => {
    switch (n) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        default:
            return "Invalid day";
    }
}

console.log(printDay(3))

// swap
let a = 10;
let b = 20;

let t = a;
a = b;
b = t;

console.log(a, b);

// sorting
const arr = [1, 5, 3, 2, 18, 7]; // ->  < 6 - 1 

for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        const selected = arr[i];
        const numberToCheck = arr[j];
        if (numberToCheck < selected) {
            const t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}

console.log(arr);