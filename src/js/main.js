import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';

let category = 'tents';
let listElement = document.querySelector('.product-list');

const dataSource = new ProductData('tents');

const productListing = new ProductListing(category, dataSource, listElement);

productListing.init();

