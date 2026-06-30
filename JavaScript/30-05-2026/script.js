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