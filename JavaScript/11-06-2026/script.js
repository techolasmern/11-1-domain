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

// if, else, if else -> control statements (Conditional statement)

if (10 < 5) {
    // statement
    console.log(true);
} else {
    console.log(false);
}

// 
const a = 100;
const b = 20;

if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is not less than b");
}

const c = 100;
const d = 200;
const e = 30;

if (c > d && c > e) {
    console.log("c is greater value");
} else if (d > e) {
    console.log("d is greater value");   
} else {
    console.log("e is greater value");
}



