let prName = document.querySelector(".prName")
let img = document.querySelector("img")
let price = document.querySelector(".price")
let categ = document.querySelector(".categ")
let desc = document.querySelector(".desc")

async function fetchProduct() {
    let url = window.location.search; 
    let productId = url.split("=")[1];

    try {
        let response = await fetch("../json/product.json")
        let products = await response.json()


        let product = products.find(item => item.id == productId)

        if (!product) return console.error("not found");

      prName.textContent = product.name;
       img.src = product.image;
    price.textContent = `$${product.price}`;
   categ.textContent = ` Category: ${product.category}`;
   desc.textContent = product.description;

    }
     catch (error){
        console.error("Error loading product:", error);
        }
}

fetchProduct()
