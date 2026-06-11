// logical operators

// AND, OR, NOT
// &&, ||, !

// console.log(true && false && true); // -> true
// console.log(false || true || false);
// console.log(!undefined); // null, 0, ""

console.log(10 == 10 && 3 < 7); // => true && true => true;
console.log(78 < 100 && 4 == 5); // => true && false => false;

console.log(1 < 10 || 3 == 5); // => true || false => true;
console.log(1 < -1 || 7 <= 3); // => false || false => false;

console.log(!null); 
// false value -> undefind, null, 0, ""