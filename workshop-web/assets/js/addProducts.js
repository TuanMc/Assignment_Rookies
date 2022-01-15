// create sample data 
const products = [
    {
        id : 0,
        name: "Product 01",
        price: 100000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-1.png?raw=true",
        description: "This is description of product 01",
        type: "woman",
        new: false
    },
    {
        id : 1,
        name: "Product 02",
        price: 200000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-2.png?raw=true",
        description: "This is description of product 02",
        type: "woman",
        new: false
    },
    {
        id : 2,
       
        name: "Product 03",
        price: 300000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-3.png?raw=true",
        description: "This is description of product 03",
        type: "woman",
        new: false
    }
    ,{
        id : 3,
        name: "Product 04",
        price: 300000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-4.png?raw=true",
        description: "This is description of product 04",
        type: "man",
        new: false
    }
    ,
    {
        id : 4,
        name: "Product 05",
        price: 200000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-5.png?raw=true",
        description: "This is description of product 05",
        type: "man",
        new: false
    },
    {
        id : 5,
        name: "Product 06",
        price: 100000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-6.png?raw=true",
        description: "This is description of product 06",
        type: "man",
        new: false
    },
    {
        id : 6,
        name: "Product 07",
        price: 500000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-7.png?raw=true",
        description: "This is description of product 07",
        type: "new",
        new: true
    },
    {
        id : 7,
        name: "Product 08",
        price: 500000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-8.png?raw=true",
        description: "This is description of product 08",
        type: "new",
        new: true
    },
    {
        id : 8,
        name: "Product 09",
        price: 500000,
        url: "https://github.com/Hoangthang017/Assignment_Rookies/blob/main/workshop-web/assets/img/product-9.png?raw=true",
        description: "This is description of product 09",
        type: "new",
        new: true
    }
];

// function add new row product 
export function addProducts(title, type) {
    // add hr tag for
    let hrAddElements = document.querySelector("#content .side-products .list-products:last-child");
    if (hrAddElements != null){
        hrAddElements.innerHTML += `<hr class = "w-50 mx-auto my-5">`;
    }

    // get side-products elements 
    let productsElements = document.querySelector("#content .side-products");

    // get specific product from API
    let specificProducts = products.filter(item => item.type === type);

    // render to html
    let htmlProducts = specificProducts.map( item => {
        return `
        <div class="col-md  -4">
            <div class="card border-0 mx-3">
                <img src="${item.url}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="card-text">
                        <span>${item.description}</span>
                        <p class = "price">
                            <span class="fw-bold">${item.price}</span> VND
                        </p>
                    </div>
                    <a href="#" class="btn btn-dark w-100">ADD TO CART</a>
                </div>
            </div>
        </div>
        `
    }).join('');

    // add to html
    productsElements.innerHTML += `
        <div class = "list-products ${title.toLowerCase().replace(" ","-")}">
            <h4>${title}</h4>
            <div class="container">
                <div class="row">
                    ${htmlProducts}
                </div>
            </div>
        </div>
    `
}