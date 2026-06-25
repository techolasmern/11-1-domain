// OBJECTS, MATH & DATE

// Object -> collection of key-value pairs.

// let name = "amal";
// const age = 20;
// const address = "sfsdf"

// name = "aswin";

// console.log(name);

// [10, 20, ]
const obj = {
    name: "Ajith",
    age: 25
}

const students = [{ name: "Ajith" }, { name: "Rahul", age: 20 }, { name: "Aswin" }];

console.log(students[0].name);

const object = {
    name: "Jinu",
    age: 21,
    address: {
        town: "Palazhi",
        city: "Kozhikode",
        state: "Keralam"
    },
    skills: ["HTML", "CSS", "REACT", "PYTHON", "NODE"]
}

object.address.city = "Thrissur";

// const key = "city";
// console.log(object.address[key]);
// const st = object["address"]["state"];
// console.log(st);

console.log(object);

console.log(object.address.city);
console.log(object.skills);

// Object Methods

// Object.keys(), Object.values(), Object.entries(), Object.freeze(), Object.seal(), Object.hasOwn()

const user = {
    first_name: "Rathul",
    last_name: "Dev",
    age: 25,
    address: {
        city: "Kozhikode",
        state: "Keralam"
    }
}


console.log(Object.hasOwn(user.address, "state"));

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user)); // [ [key, value], [key, value], [key, value] ];

// Object.freeze(user); // Can't add or modify fields.
Object.seal(user); // Can't add fields but can modify

user.skjhkdf = 90;
user.age = 30;

console.log(user);

// Date

// const current_time = Date.now(); // in milliseconds

const date = new Date();

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.getMonth() + 1);
console.log(date.getTime());
console.log(date.toLocaleString("en-IN", {
    // dateStyle: "medium"
    day: "2-digit",
    month: "long",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}))

// // Math

console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.LOG10E);
console.log(Math.abs(-10));
console.log(Math.random())
console.log(Math.round(7.49));

console.log(Math.ceil(7.01));
console.log(Math.floor(7.99));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.min(10, 39, 40, 1, 2));
console.log(Math.max(10, 39, 40, 1, 2));