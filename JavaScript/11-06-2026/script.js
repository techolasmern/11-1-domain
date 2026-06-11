// logical operators

// AND, OR, NOT
// &&, ||, !

// console.log(true && false && true); // => true
// console.log(false || true || false); // => true
// console.log(!undefined); // => true

console.log(10 == 10 && 3 < 7); // => true && true => true;
console.log(78 < 100 && 4 == 5); // => true && false => false;

console.log(1 < 10 || 3 == 5); // => true || false => true;
console.log(1 < -1 || 7 <= 3); // => false || false => false;

console.log(!null); 
// false value -> undefind, null, 0, ""

// if, else, if 
// -> control statements (Conditional statement)

if (10 < 5) {
    // statement
    console.log(true);
} 
{
    console.log(false);
}

// 
const a = 100;
const b = 20;

if (a < b) {
    console.log("a is less than b");
} 
{
    console.log("a is not less than b");
}

const c = 100;
const d = 200;
const e = 30;

if (c > d && c > e) {
    console.log("c is greater value");
} 
if (d > e) {
    console.log("d is greater value");   
} 
{
    console.log("e is greater value");
}

// SUN - SAT
// 1 - 7

// function getDay(n) {
//     if (n == 1) {
//         return "Sunday";
//     } 
//     if (n == 2) {
//         return "Monday"
//     } 
//     if (n == 3) {
//         return "Tuesday";
//     } 
//     if (n == 4) {
//         return "Wednesday"
//     } 
//     if (n == 5) {
//         return "Thursday";
//     } 
//     if (n == 6) {
//         return "Friday";
//     } 
//     if (n == 7) {
//         return "Saturday";
//     } 
//     return "Invalid input";
// }

function getDay(n) {
    if (n == 1) {
        return "Sunday";
    } else if (n == 2) {
        return "Monday"
    } else if (n == 3) {
        return "Tuesday";
    } else if (n == 4) {
        return "Wednesday"
    } else if (n == 5) {
        return "Thursday";
    } else if (n == 6) {
        return "Friday";
    } else if (n == 7) {
        return "Saturday";
    } else {
        return "Invalid input";
    }
}

const res = getDay(8);
console.log(res)

// calculator

function calc(fn, op, sn) {
    if (op == "+") {
        return fn + sn;
    }
    if (op == "/") {
        return fn / sn;
    }
    // complete the program
}

const s = calc(10, "/", 30);
console.log(s);