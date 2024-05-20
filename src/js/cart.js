import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

quantityAdd.addEventListener("click", cart.addQuantity());
quantityRemove.addEventListener("click", cart.removeQuantity());