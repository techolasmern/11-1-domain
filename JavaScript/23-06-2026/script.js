// forEach, filter, map, reduce

// forEach

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

// filter

// const newArray = arr.filter((element, index, array) => {
//     // if (element % 2 == 1) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return element % 2 == 1;
// });

// const newArray = arr.filter((element, index, array) => element % 2 == 0);
// const newArray = arr.filter((element) => element % 2 == 0);
const newArray = arr.filter(element => element % 2 == 0);
console.log(newArray);

// map -> array manipulation / change array element

// const resArr = arr.map((element) => {
//     return element % 5 == 0 ? element * 10 : element;
// });
const resArr = arr.map(element => element % 5 == 0 ? element * 10 : element);
console.log(resArr);

// some, every, find, reduce

const res = arr.some(num => num % 10 == 0);
console.log(res);

const res2 = arr.every(num => num % 1 == 0);
console.log(res2);

const res3 = arr.find(num => num % 5 == 0);
console.log(res3);

// returns a single value

let sum = 0;
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

const result = arr.reduce((prev, num) => {
    return prev * num;
}, 1);

console.log(result);

// 1 => prev: 0 => 0 + 1 = 1
// 2 => prev: 1 => 1 + 2 = 3
// 3 => prev => 3 => 3 + 3 = 6
// 4 - 10, 15, 21, 45, 55

const strArr = ["Amal", "Aswin", "Rahul", "AMaya"];

const names = strArr.filter(name => name.toLowerCase().startsWith("am"));
console.log(names);

const updatedNames = strArr.map(name => name.toUpperCase());
console.log(updatedNames);

