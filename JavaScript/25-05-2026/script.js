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