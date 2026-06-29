// async. -> parallel execution of code

// call stack
// event loop ->
// callback queue
// microtask queue

// setTimeout, setInterval
// const timeoutHandler = () => {
//     console.log("Executed after 2 seconds");
// }

// setTimeout(timeoutHandler, 2000); // time in ms

// const handleInterval = () => {
//     console.log(new Date().toLocaleTimeString());
// }

// setInterval(handleInterval, 1000);

// promise -> A way to handle asynchronous operations.
// promise states -> 3 states -> pending, resolve/fullfilled, rejected

const asyncPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hi");
        // reject("Hi");
    }, 5000)
}); // object
// .then, .catch .finally

// handle promise
asyncPromise().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log("Error:", error);
}).finally(() => {
    console.log("Completed")
});

// Promise -> all, race, any

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: "first promise rejected"});
    }, 500);
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "second promise" });
    }, 3000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: "third promise" });
    }, 1000);
})

// Promise.all()

// p1.then(res => {
//     console.log(res)
// })
// p2.then(res => {
//     console.log(res)
// })
// p3.then(res => {
//     console.log(res)
// })

Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// Promise.any()

Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
})

// Promise.race()

Promise.race([p1, p2, p3]).then(res => {
    console.log(res)
})

// 