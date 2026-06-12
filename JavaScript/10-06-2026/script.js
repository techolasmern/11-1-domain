// function -> set of instruction; block of code;

// function <funName>() {

// }

// arguments -> parameters,

// function sampleFunction(a, b, c, d) {
//     console.log("Function Invoked! " + a + " " + b + " " + c + " " + d);
// }

// sampleFunction(10, 20, 30, 40);

function sum(first_number, second_number) {
    const s = first_number + second_number;
    console.log(s);
}

sum(10, 50);
sum(10, 80);
sum(100, 100);

// ----------------
// function invoke -> result
// rest

// area
// volume

function getArea(l, b) {
    const area = l * b;  
    return area; 
}

function getVolume(area, h) {
    const v = area * h;
    return v;
}

const area = getArea(20, 40);
console.log(area);
const vol = getVolume(area, 20);
console.log(vol);
// console.log(area * 60);
// const ar = getArea(100, 200);
// console.log(ar);

// even or odd

// data types -> number, string, boolean, object, undefined,
// 

function isOdd(n){
    const r = n % 2;
    return Boolean(r);
}

const res = isOdd(16);
console.log(res);

// sum of n number

// (n * (n + 1))/2

function sumOfNNumbers(n) {
    const s = (n * (n + 1)) / 2;
    console.log(s)
}

sumOfNNumbers(100);

// calculator

function add(a, b) {
    const s = a + b;
    return s;
}

//  p/n * 100 -> find % of a number

