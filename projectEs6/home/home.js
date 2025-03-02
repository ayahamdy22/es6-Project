
let navLinks = document.getElementById("navLinks");
let navPerson = document.getElementById("navPerson");
let menuToggle = document.getElementById("menuToggle");
let ulNavPerson = document.getElementById("ulNavPerson");


// responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  
    menuToggle.addEventListener("click", function () {
        navPerson.classList.toggle("d-none");
        navPerson.classList.toggle("d-flex");
    });

    updateNavbar();
});



// update navbar
function updateNavbar () {
    let accountName = localStorage.getItem("username")
    let isLoggedIn = localStorage.getItem("loggedIn")

    if (accountName && isLoggedIn === "true") {
        ulNavPerson.innerHTML = `
             <li>
                <a href="#"><i class="bi bi-person fs-4"></i><span class="ps-2">${accountName}</span></a>
            </li>
            <li>
                <a href=""><i class="bi bi-heart fs-4"></i><span class="ps-2">Favorite</span></a>
            </li>
            <li>
                <a href="../cart/cart.html"><i class="bi bi-cart fs-4"></i><span class="ps-2">Shopping Cart</span></a>
            </li>
            <li>
                <button id="logoutBtn" class="btn btn-dark btn-sm">Logout</button>
            </li>`

    }

    logButton()
}


function logButton () {
    let logoutBtn = document.getElementById("logoutBtn")

    logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn")
        window.location.reload();
    }) 
}



// slider ===============================


document.addEventListener("DOMContentLoaded", function () {
let clickLeft = document.getElementById("clickLeft");
let clickRight = document.getElementById("clickRight");
let sliderImg = document.getElementById("sliderImg");

    let images = [
        "../imgs/slider/7.jpeg",
        "../imgs/slider/8.jpeg",
        "../imgs/slider/9.jpeg",
        "../imgs/slider/10.jpeg",
        "../imgs/slider/11.jpeg",
        "../imgs/slider/12.jpeg"
    ];
    let index = 0;

    function clickPrevious() {
        index--;
        if (index < 0) index = images.length - 1;
        sliderImg.setAttribute("src", images[index]);
    }

    function clickNext() {
        index++;
        if (index >= images.length) index = 0;
        sliderImg.setAttribute("src", images[index]);
    }

    clickLeft.addEventListener("click", clickPrevious);
    clickRight.addEventListener("click", clickNext);

    let myInterval = setInterval(function () {
        clickNext();
    }, 1000);

    sliderImg.addEventListener("click", function () {
        clearInterval(myInterval);
    });
});


// =========================  Sections =========================
document.addEventListener("DOMContentLoaded", function(){
    let btnSection = document.querySelectorAll(".btnSection")
    let sectionForYou = document.getElementsByClassName("sectionForYou")[0]
   let sections = document.querySelectorAll("section")

   console.log(sections);
   
    // when load page    
   sections.forEach(element => element.style.display = "none");
   sectionForYou.style.display = "flex"

   // when onclick btn 
   btnSection.forEach(btn => {
    btn.addEventListener("click", function() {
        sections.forEach(element => element.style.display = "none")

        let sectionClass = ""
        switch(this.textContent.trim () ) {
            case "For You": 
            sectionClass = ".sectionForYou"
            break;

            case "Women" : 
            sectionClass = ".sectionWomen"
            break;

            case "Men":
            sectionClass = ".sectionMen"
            break;

            case "Kids" :
            sectionClass = ".sectionKids"
            break

            case "Home" :
            sectionClass = ".sectionHome"
            break
        
        }

        if (sectionClass) {
            document.querySelector(sectionClass).style.display = "flex"
        }

    })
   } )


})

// ============================ add to cart ========================
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse (localStorage.getItem("cart")) || [];

    let plus = document.querySelectorAll(".bi-plus")

    plus.forEach (ele =>  {
        ele.addEventListener("click" , function() {
            let product = this.closest(".card");
            let productImg = product.querySelector("img").src
            let productPrice = product.querySelector(".card-text").textContent

         
            if (!Array.isArray(cart)) {
                console.error("Cart is not an array:", cart);
                cart = []; 
            }

            let existingProduct = cart.find(item => item.img === productImg);

            if(existingProduct) {
                existingProduct.quantity ++
            }else {

            let productData = {
                img : productImg,
                price: productPrice,
                quantity: 1
            }
            cart.push(productData)
        }
            
        
            localStorage.setItem("cart", JSON.stringify(cart))

            alert("Product added to cart!")

        })
    })
}) 


// ==================== view details
let details = document.querySelectorAll(".card-title")
details.forEach(button => {
    button.addEventListener("click", function () {
        let productId  = this.getAttribute("data-id")
        window.location.href = `../details/details.html?id=${productId}`

    }) 
})




