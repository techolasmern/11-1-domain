// callback function - A function passed as an argument to another function.
// () => {

// }

// function () {
    
// }

// IIFE // immediatly invoked function exp.

// (() => {
//     console.log("first sdfsdf")
// })();

// sync -> line by line
// async.

const anotherFunction = () => {
    console.log("Sample Function");
};

const display1 = (func) => {
    func();
}

console.log("hey");
display1(anotherFunction);

// sum + display
// area + volume

const display = (result) => {
    console.log("Result is:", result);
}

const findSum = (a, b, callback) => {
    const sum = a + b;
    callback(sum); // 30
}

findSum(10, 20, display);

// --------------------------------------------------

const displayVolume = (value) => {
    console.log(value);
}

const getValume = (area, h, callback) => {
    const v = area * h;
    callback(v);
}

const getArea = (l, b, callback1, callback2) => {
    const area = l * b;
    callback1(area, 20, callback2);
}

getArea(10, 20, getValume, displayVolume);

// ---------------------------------------------------------


// for of
// const runLoop = (array=[], callback) => {
//     // for (const element of array) {
//     //     const idx = array.indexOf(element);
//     //     callback(element, idx, array);
//     // }
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i] /* element */, i /* index */, array /* Same array */);
//     }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// runLoop(arr, (element, index, array) => {
//     console.log(element, index, array);
// });

// forEach, map, filter, find, findIndex, reduce

// remove middle element of an array - pop, push

const removed = [];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const upto = array.length / 2; // 2.5
for (let i = 0; i <= upto; i++){
    removed.push(array.pop());
}

for (let k = 0; k <= array.length % 2; k++){
    removed.pop();
}

for (let j = 0; removed.length > 0; j++){
    array.push(removed.pop());
}

console.log(removed, array);

const ar = [1, 9, 3, 6, 7, 2, 4, 8, 9, 3];
           [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// index == 2
// indexOf() -> 2

// i = 0, index: 0
// i = 1, index: 1
// i = 8, index: 