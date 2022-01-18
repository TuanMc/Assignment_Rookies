// import slider
import { addSlider } from "./addSlider.js";

// import product
import {addProducts} from "./addProducts.js"

let listInforProdcut = [
    {
        title: "New Products",
        type: "new"
    },
    {
        title: "Woman Products",
        type: "woman"
    },
    {
        title: "Man Products",
        type: "man"
    }
];

listInforProdcut.forEach(infor => addProducts(infor.title, infor.type));

