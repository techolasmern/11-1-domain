

// Loop -> repeat a code block until a condition is false;

// for loop

// for (init; condn; in /de/update;) {
//     // statements
// }

for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log("first")

// sum of n number

let sum = 0;
for (let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

// exact 2 factors
// 1, itself
2, 1 
7
// 2-3.5 7/3.5 = 2 

function is_prime(n) {
    if (n == 0 || n == 1) return "is not prime";
    for (let k = 2; k <= n / 2; k++){
        if (n % k == 0) {
            return "is not prime";
        }
    }
    return "is prime";
}

console.log(is_prime(81))

// ----------------------------------------------------------------------

// 0*  *  *  *  * -> 5
// 1*  *  *  *  * - 5
// 2*  *  *  *  * 5
// 3*  *  *  *  * 5
// 4*  *  *  *  * 5

function printSquare(n) {
    let pattern = "";
    for (let row = 0; row < n; row++){
        for (let col = 0; col < n; col++){
            pattern += " * "
        }
        pattern += "\n";
    }
    console.log(pattern);
}

printSquare(4);

// 0*  *  *  *  * - 5
// 1*           * 2
// 2*           * 2
// 3*           * 2
// 4*  *  *  *  * 5

function printSquare2(n) {
    let pattern = "";
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
                pattern += " * "
            } else {
                pattern += "   "
            }
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(printSquare2(5))

// 0*  1*  2*  3*  4*
// 1*   *       *   *
// 2*       *       *
// 3*   *       *   *
// 4*   *   *   *   *

function printSquare3(n) {
    let pattern = "";
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row == 0 || row == n - 1 || col == 0 || col == n - 1 || row == col || row + col == n - 1) {
                pattern += " * "
            } else {
                pattern += "   "
            }
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(printSquare3(5))

// 0*              -> 1
// 1*  *           -> 2
// 2*  *  *        -> 3
// 3*  *  *  *     -> 4
// 4*  *  *  *  *  -> 5

function printStar(n) {
    let pattern = "";
    for (let i = 0; i < n; i++){
        for (let j = 0; j < i + 1; j++){
            pattern += " * "
        }
        pattern += "\n"
    }
    return pattern;
}

console.log(printStar(10));

// 0* -- 1
// 1*  *  *  -- 3
// 2*  *  *  *  *  -- 5
// 3*  *  *  *  *  *  *  -- 7
// 4*  *  *  *  *  *  *  *  *  -- 9

function printStar2(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 2*i + 1; j++) {
            pattern += " * "
        }
        pattern += "\n"
    }
    return pattern;
}

console.log(printStar2(5));

//              *
//           *  *
//        *  *  *
//     *  *  *  *
//  *  *  *  *  *


//        *
//      *   *
//    *   *   *
//  *   *   *   *
//*   *   *   *   *


const pRoof = (n) =>{
    let pattern = "";
    for (let i = 0; i < n; i++){
        for (let j = n - i - 1; j > 0; j--){
            pattern += " "
        }
        for (let k = 0; k < i + 1; k++){
            pattern += "* "
        }
        pattern += "\n"
    }
    console.log(pattern);
}

pRoof(5)