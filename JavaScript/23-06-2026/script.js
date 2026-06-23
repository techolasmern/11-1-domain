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


