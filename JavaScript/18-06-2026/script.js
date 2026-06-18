
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
console.log(str.trim().split(""))





