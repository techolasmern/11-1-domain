// async, await

// promise ->

// const myPromise1 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("hi");
//     }, 5000);
// })

// const myPromise2 = () => new Promise((resolve) => {
//     resolve("helo");
// })
// myPromise1().then(res => {
//     // statement
//     myPromise2().then(res => {
//         //
//         myPromise2().then(res => {
//             //
//         })
//     })
// })


// async, await

// async function name(params) {
    
// }

const myPromise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hi");
    }, 5000);
})

const handleAsync = async () => {
    try {
        const successRes = await myPromise1();
        console.log(successRes);
    } catch (err) {
        console.log("Error: ",err)
    } finally {
        console.log("Completed")
    }
}

handleAsync();


// fetch -> get content from an api.

const getApiData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const res = await response.json();
        console.log(res);
    } catch (e) {
        console.log(e.message);
    }
}

getApiData();

// status code -> 100, 200, 300, 400, 500
// 200, 400, 500 ->
// 200 => OK
// 201 => Created

// 400 => Bad Request
// 401 => Unauthorized
// 404 => Not Found!
// 409 => Conflict

// 500 => Internal Server Error

// object ->
// JSON -> 
// JSON -> JAVASCRIPT OBJECT NOTATION
const obj = '{ "name": "amal", "age": 30 }';
