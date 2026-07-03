const apiCall = async (api) => {
    try {
        const response = await fetch(api);
        return await response.json();
    } catch (err) {
        return null;
    }
}

const productContainer = document.getElementById("product-container");

const getProducts = async () => {
    try {
        const response = await apiCall("https://dummyjson.com/products?limit=10&skip=10");
        const products = response.products;
        console.log(products);
        products.forEach(product => {
            const div = document.createElement("div");
            div.innerHTML = product.title;
            div.style.textAlign = "center";
            div.style.display = "flex";
            div.style.flexDirection = "column";
            const img = document.createElement("img");
            img.src = product.thumbnail;
            img.style.width = "400px";
            img.style.height = "400px";
            img.alt = product.title;
            div.appendChild(img);
            productContainer.appendChild(div);
        })
    } catch (err) {
        console.log(err);
    }
}

getProducts()