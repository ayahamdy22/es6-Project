let cart = JSON.parse(localStorage.getItem("cart")) || []
let cartContent = document.querySelector(".card-items")
 let totalPrice = document.querySelector(".total-price")
   

//  document.addEventListener("DOMContentLoaded", function () {
//     update(); // تحديث السلة عند تحميل الصفحة
// });
     function update (){
        let total = 0;
        cartContent.innerHTML =""

        cart.forEach((element,index) => {
            let price = parseFloat(element.price.replace("$", ""))
    
            if(element.quantity === undefined)  element.quantity =1
           
            total += price * element.quantity
    
            let productHtml = `
            <div class="product">
            <img src="${element.img}" alt="" class="img-fluid">
    
             <p class="">${element.price}</p>
           
            <div class="controls">
                <button class="increase" data-index = "${index}">+</button>
                 <span class="quantity">${element.quantity}</span>
                <button class="decrease" data-index = "${index}">-</button>
            </div>
    
            </div>
            `
          
            cartContent.innerHTML += productHtml
        });

          totalPrice.innerHTML = `Total: $${total.toFixed(2)}`
          localStorage.setItem("cart", JSON.stringify(cart))
     }
   
    update ()
  


    document.addEventListener("click", function(event) {
        
            let index = parseInt(event.target.dataset.index )
            if (!isNaN(index)) {
            if (event.target.classList.contains("increase")) cart[index].quantity ++

            else if (event.target.classList.contains("decrease")) {

                if(cart[index].quantity > 1) cart[index].quantity --
                else cart.splice(index,1)
            }
            
            update ()
        }
    })


// ============================================
let buy = document.getElementById("buy")
buy.addEventListener("click", function () {
    let isLoggedIn = localStorage.getItem("loggedIn")
    if (cart.length === 0) {
        alert("Cart is Empty")
        return;

    } 
    if (!isLoggedIn || isLoggedIn !== "true") { 
        alert("You are not logged in! Please log in first.");
        window.location.href = "../login/login.html"; 
        return;
    }
    
    else {
        let confirmB = confirm("Are you sure you want to purchase the products?")
        if (confirmB) {
           alert ("Order Shipped")
            cart.length = 0
            localStorage.removeItem("cart")
           update ()
       }
    }
   
})