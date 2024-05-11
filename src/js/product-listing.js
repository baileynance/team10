import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();







// import ProductData from './ProductData.mjs';
// import ProductListing from './ProductList.mjs';
// import { loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();

// let category = 'tents';
// let listElement = document.querySelector('.product-list');

// const dataSource = new ProductData('tents');

// const productListing = new ProductListing(category, dataSource, listElement);

// productListing.init();
