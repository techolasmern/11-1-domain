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

