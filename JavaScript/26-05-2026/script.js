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

// Spread Operator - create a copy of array / object.
const newArr = [...array];
newArr.push(5);
console.log(array, newArr);

const newObjt = { ...obj };
obj.name = "Midhun";
console.log(obj, newObjt);

// destructure, Rest Operator -> to get remaining array elements or key-value (object) pairs.

const student = { name: "Amal", age: 18, city: "Kozhikode", state: "Keralam", course: "CS" };

const { state, age, ...remainingObj } = student;
console.log(state, age);
console.log(remainingObj);

const arr = [1, 6, 3, 5];
const [fv, sv, ...remaining] = arr;
console.log(fv, sv, remaining)