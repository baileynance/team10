import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
     <picture>
      <source media="(max-width: 120px)" srcset="${product.Images.PrimarySmall}">
      <img src="${product.Images.PrimaryMedium}" alt="${product.NameWithoutBrand}">
     </picture>
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    if(cartItems)
        {
            const htmlItems = cartItems.map((item) => cartItemTemplate(item));
            document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
        }
  }
}