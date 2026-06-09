console.log("Hi")

// Operator

// Assignment Operator (=)

const pi = 3.14;
console.log(pi);

// Arithmetic Operator (+, -, *, /, %, **)

// + -> addition
// - -> subtraction
// * -> multiplication
// / -> division
// % -> modulus (remainder)
// ** -> exponentiation (power)

console.log(1 + 1);
console.log("Hello" + " " + "World");
console.log(1 + "1"); // number + string -> string
console.log("1" + 1); // string + number -> string
console.log(1 + +"1"); // number + number -> number
console.log("1" + +"1"); // string + number -> string
console.log("1" + +1); // string + number -> string

console.log(2 - 1);
console.log("2" - 1); // string - number -> number
console.log(2 - "1"); // number - string -> number
// do rest of the operators

console.log(2 * 2);

console.log(2 / 2);

console.log(6473 % 10);
console.log(6473 / 100);

console.log(2 ** 2);
console.log(2 ** 3);

// Comparison Operator (==, ===, !=, !==, <, >, <=, >=);

console.log(1 == "2"); // number == string => true
console.log(1 === "1"); // value + type 
console.log(1 != 10);
console.log(1 !== "1");

console.log(1 < -1);
console.log(1 > 1);
console.log(1 <= 1);
console.log(1 >= 1);

let a = 10;
const b = 20;

const c = a + b;
console.log(c);

// a = a + b; // a += b;
a += b; // a = a + b;
a -= b; // a = a - b;
a *= b; // a = a * b;
a /= b; // a = a / b;

console.log(a);

let num1 = 10;
let num2 = 20;

// unary increment & decrement operator (++, --)
num1++;
console.log(num1);
num1--;
console.log(num1);

// pre-increment & pre-decrement operator (++num --num)
// post-increment & post-decrement operator (num++, num--)

let n1 = 1;
let n2 = 1;

let n3 = ++n1;
console.log(n3, n1);
let n4 = n2++;
console.log(n4, n2);

let n5 = --n1;
console.log(n5, n1);
let n6 = n2--;
console.log(n6, n2);

const number1 = prompt("Please enter your first number?");
const number2 = prompt("Please enter your second number?");
const sum = Number(number1) + Number(number2);
console.log(sum);

// cube, volume, area

// calculate

