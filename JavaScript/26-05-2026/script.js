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
console.log(fv, sv, remaining);

// local storage & session storage

// localStorage

localStorage.setItem("theme", "dark");
localStorage.setItem("sample", "sample_value");

const res1 = localStorage.getItem("sample");
console.log(res1)

const res2 = localStorage.getItem("theme");
console.log(res2);

// localStorage.removeItem("theme");

const res = localStorage.getItem("theme");
console.log(res);

// localStorage.clear();

// session storage

sessionStorage.setItem("session_theme", "session_dark");

const res4 = sessionStorage.getItem("session_theme");
console.log(res4);

// sessionStorage.removeItem("session_theme");

const res5 = sessionStorage.getItem("session_theme");
console.log(res5);

sessionStorage.clear();

// ---------------------------------

const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];


const upperNames = employees.map(employee => employee.name.toUpperCase());
console.log(upperNames)

const total_sal = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(total_sal);

const filtered = employees.filter(employee => employee.department == "Marketing");
const total_employees = filtered.length;
const avg = filtered.reduce((total, employee) => total + employee.salary, 0) / total_employees;
console.log(avg);

const updated_emp = employees.map(employee => {
    employee.age += 5;
    return employee;
    // return { ...employee, age: employee.age + 5 };
})

console.log(updated_emp)

const res_arr = employees.map(employee => {
    const { department, salary } = employee;
    return { department, salary };
})

console.log(res_arr);

const sal = employees.map(employee => employee.salary);
const max = Math.max(...sal);
console.log(max)

const gt = employees.reduce((gtv, employee) => {
    if (employee.salary > gtv) {
        return employee.salary;
    } else {
        return gtv;
    }
}, 0);
console.log(gt);