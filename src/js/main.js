import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs"

const productData = new ProductData("tents");
const element = document.querySelector(".product-list");

const productList = new ProductListing("Tents", productData, element);

productList.init();