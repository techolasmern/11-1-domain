// Spread operator
//  Rest parameter
//  LocalStorage
//  SessionStorage

// array, object

// pass by value, pass by reference
const array = [1, 2, 3, 4];
// const newArray = array;
// newArray.push(5);
// array.push(6);
// console.log(array);
// console.log(newArray);

const obj = { name: "Ajmal", age: 20 };
// const newObj = obj;
// newObj.age = 20;
// newObj.name = "skdfh"
// console.log(obj);
// console.log(newObj);

// assign

// spread operator - create a copy
const newArr = [...array];
newArr.push(5);
console.log(array, newArr);

const newObjt = { ...obj };
obj.name = "skdjhfiwuehfklsd"
console.log(obj, newObjt)