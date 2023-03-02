import {ProductApi} from "./model/productapi";

const productApi = new ProductApi();
console.log(productApi.findAll());
console.log(productApi.findByCategory("laptop"));
console.log(productApi.findByText("Samsung"));
console.log(productApi.findByColor("blue"));
