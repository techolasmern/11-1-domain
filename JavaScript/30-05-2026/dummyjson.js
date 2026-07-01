
// const a = undefined ?? "skdhjfsdf";
// console.log(a);

const BASE_URL = "https://dummyjson.com";

// GET, POST, PATCH, PUT, DELETE

const request = async (api, config) => {
    try {
        const response = await fetch(api, config);
        const res = await response.json();
        return res;
    } catch (e) {
        return { error: e.message ?? "Request failed!" }
    }
}

const getAllProducts = async () => {
    try {
        const response = await request(BASE_URL + "/products")
        return response;
    } catch (e) {
        return e
    }
}

const addProduct = async (product) => {
    try {
        const response = await request(BASE_URL + "/products/add", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        return response;
    } catch (e) {
        return e;
    }
}

addProduct({title: "sample "})