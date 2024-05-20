import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
     <picture>
      <source media="(max-width: 120px)" srcset="${item.Images.PrimarySmall}">
      <img src="${item.Images.PrimaryMedium}" alt="${item.NameWithoutBrand}">
     </picture>
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="quantityRemove">-</button>
  <button class="quantityAdd">+</button>
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
            let parentSelector = document.querySelector(this.parentSelector);
            parentSelector.innerHTML = htmlItems.join("");
            let total = this.totalItems(cartItems);
            let divTotal = document.createElement('div');
            divTotal.classList.add('cart-footer');
            // divTotal.classList.add('hide');
            let pTotal = document.createElement('p');
            pTotal.classList.add('cart-total');
            pTotal.textContent = `Total: $${total}`;
            divTotal.appendChild(pTotal);
            let buttonShopping = document.createElement('a');
            buttonShopping.classList.add('btn-shopping');
            buttonShopping.innerHTML = 'Pay';
            buttonShopping.href = '../checkout/';
            divTotal.appendChild(buttonShopping);
            parentSelector.appendChild(divTotal);
        }
  }
  totalItems(cartItems){
      let totalTemp = 0;
      cartItems.forEach((item) => {

      totalTemp += item.FinalPrice;
    }
   );
     return Math.round(totalTemp*100)/100;
  }
  addQuantity(){
    const item = document.getElementsByClassName("card__name").textContent;
    const cartItems = getLocalStorage(this.key);
    cartItems.append(item);
    setLocalStorage(this.key, cartItems);
    const li = document.querySelectorAll(li);
    li.remove();
    this.renderCartContents();
  }
  removeQuanity(){
    const item = document.getElementsByClassName("card__name").textContent;
    const cartItems = getLocalStorage(this.key);
    const index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
    setLocalStorage(this.key, cartItems);
    this.renderCartContents();
  }
}
