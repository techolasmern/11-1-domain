
const arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length / 2; i++){
    const leftIdx = i;
    const rightIdx = arr.length - 1 - i;
    const t = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = t;
}

console.log(arr);

// String & Array Methods

const str = "     Hello World!      ";

console.log(str[0]);
console.log(str.at(0));
console.log(str.indexOf("ol", 5));
console.log(str.includes("els"));
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.startsWith("Hello"))
console.log(str.endsWith(""))
console.log(str.lastIndexOf("l", 8));

console.log(str.slice(0, 5))
console.log(str.slice(-2));
console.log(str.slice(0, -2));

console.log(str.trim())
console.log(str.trim().split("!"))


// Array Methods

const array = [1, 2, 3, 4, 5];

// add value - last
array.push(6, 7, 8, 9, 10);
const removedValue = array.pop()
console.log(removedValue);

array.unshift(-3, -2, -1, 0);
const val = array.shift();
console.log(val);
console.log(array);

// splice();
array.splice(2, 0, 100, 200, 300, 400, 500);
console.log(array);

const numbers = [1, 2, 3, 4, 5, 1];

numbers[5] = 6

console.log(numbers);

console.log(numbers[0]);
console.log(numbers.at(0));
console.log(numbers.indexOf(3, 4));
console.log(numbers.includes(40));
console.log(numbers.lastIndexOf(1));

console.log(numbers.slice(0, 2));
console.log(numbers.slice(-2));

console.log(numbers.join("-"));
