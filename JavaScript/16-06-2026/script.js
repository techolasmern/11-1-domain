// loop

// for loop
// while, do while, for in, for of
// Array -> collection of elements
const arr = [1, 2, 3, 4, 5];

// Entry controlled loop
let val = 0; // init
while (val < 10) { // condn
    console.log(val); // statement
    val++ // updation
}

// Exit controlled loop
let i = 0; // init
do {
    console.log(i); // statement
    i++; // updation
} while (i < 0);

function is_palindrome(number) {
    let temp = number;
    // temp = 123
    let rev = 0;
    while (temp > 0) { // 0 > 0
        // reminder
        const rem = temp % 10; // 1%10=1
        rev = rev * 10 + rem; // 32*10+1=321
        temp = parseInt(temp / 10); // 1/10=0;
    }
    return rev == number;
}

console.log(is_palindrome(123))