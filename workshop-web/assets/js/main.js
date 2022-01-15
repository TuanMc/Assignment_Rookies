// create sample data 
const products = [
    {
        id : 0,
        name: "Product 01",
        url: "./assets/img/produc-1.png",
        description: "This is description of product 01",
        type: "woman",
        new: false
    },
    {
        id : 1,
        name: "Product 02",
        url: "./assets/img/produc-2.png",
        description: "This is description of product 02",
        type: "woman",
        new: false
    },
    {
        id : 2,
       
        name: "Product 03",
        url: "./assets/img/produc-3.png",
        description: "This is description of product 03",
        type: "woman",
        new: false
    }
    ,{
        id : 3,
        name: "Product 04",
        url: "./assets/img/produc-4.png",
        description: "This is description of product 04",
        type: "man",
        new: false
    }
    ,
    {
        id : 4,
        name: "Product 05",
        url: "./assets/img/produc-5.png",
        description: "This is description of product 05",
        type: "man",
        new: false
    },
    {
        id : 5,
        name: "Product 06",
        url: "./assets/img/produc-6.png",
        description: "This is description of product 06",
        type: "man",
        new: false
    },
    {
        id : 6,
        name: "Product 07",
        url: "./assets/img/produc-7.png",
        description: "This is description of product 07",
        type: "",
        new: true
    },
    {
        id : 7,
        name: "Product 08",
        url: "./assets/img/produc-8.png",
        description: "This is description of product 08",
        type: "",
        new: true
    },
    {
        id : 8,
        name: "Product 09",
        url: "./assets/img/produc-9.png",
        description: "This is description of product 09",
        type: "",
        new: true
    }
];

// get div-woman-products elements 
var womanProductsElements = document.querySelector("#content .side-products .woman-products");
const typeProduct = "Woman Products";
// get woman product from API
var womanProducts = products.filter(item => item.type === "woman");

// render to html

var htmlProducts = womanProducts.map( item => {
    return `
    <div class="col-md-4">
        <div class="card">
            <img src="${item.url}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-dark">Add to cart</a>
            </div>
        </div>
    </div>
    `
}).join('');

console.log(htmlProducts)

womanProductsElements.innerHTML += `
    <h4>${typeProduct}</h4>
     <hr>
    <div class="container">
        <div class="row">
            ${htmlProducts}
        </div>
    </div>
`

