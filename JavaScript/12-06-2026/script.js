// String, Array, for loop

// STRING => Collection of char.

const str = "Hello World";
// index starting from 0

const val = str[6];
console.log(str.length); // 11 -> lastIndex - 10

// Array => Collection of elements or data;

const data = 10;
const numbers = [10, "hello", true];

const value = numbers[1];

console.log(value);

// loop -> loop is used for repeating the same code block until the condition is false;

// for loop, while, do while, for in, for of

// for loop;

// for (init; condn; update;) {
//     // code
// }

// Sync - line by line execution of code.
// Async - Parallel execution at a time.

// 1 - 10 print
for (let k = 1; k <= 10; k++){
    console.log(k);
}
console.log("first");


// sum of N Numbers;

function sumOfNNumbers(n) {
    let sum = 0;
    for (let j = 1; j <= n; j++){
        sum = sum + j;
        // Value of j is 1, then the sum = 0 + 1 (sum will be updated to 1)
        // Value of j is 2, then the sum = 1 + 2 (sum will be updated to 3)
        // Value of j is 3, then the sum = 3 + 3 (sum will be updated to 6)
        // Value of j is 4, then the sum = 6 + 4 (sum will be updated to 10)
        // Value of j is 5, then the sum = 10 + 5 (sum will be updated to 15)
        // Value of j is 6, then the sum = 15 + 6 (sum will be updated to 21)
        // Value of j is 7, then the sum = 21 + 7 (sum will be updated to 28)
        // Value of j is 8, then the sum = 28 + 8 (sum will be updated to 36)
        // Value of j is 9, then the sum = 36 + 9 (sum will be updated to 45)
        // Value of j is 10, then the sum = 45 + 10 (sum will be updated to 55)
    }
    return sum;
}

// 12321 - 12321, 1535 - 1^4 + 5^4 + 3^4 + 5^4 == 1535

const res = sumOfNNumbers(100);
console.log(res);

// Number prime

// 7 -> 2,3.5

function findPrime(n) {
    for (let k = 2; k <= n / 2; k++){
        if (n % k == 0) {
            return "not prime"
        }
    }
    return "is prime";
}

console.log(findPrime(33));

// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
// *  *  *  *  *
let row = "";
for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        row += " * ";
    }
    row += "\n"
}
console.log(row);

// *  *  *  *  *
// *           *
// *           *
// *           *
// *  *  *  *  *