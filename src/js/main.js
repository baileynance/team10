import { ProductData } from "./ProductData.mjs";
const dataSource = new ProductData("tents");

import ProductList from "./ProductList.mjs";
// Assuming you have an element with id 'product-list' in your HTML
//const listElement = document.getElementById('product-list');
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);
listing.init();
