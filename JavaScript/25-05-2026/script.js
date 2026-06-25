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