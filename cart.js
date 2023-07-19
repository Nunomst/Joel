import './style/cart.css';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import {footer} from './components/footer/footer.js';
import { handleScroll } from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';
import {cartContainer} from './components/cart/cartContainer.js';
import {checkout} from './components/cart/checkout.js';

//components
let appDiv = document.getElementById('app');
let main = document.createElement('main');
let cartCheckoutContainer = document.createElement('div');
cartCheckoutContainer.classList.add('cart-checkout-container');
appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
cartCheckoutContainer.appendChild(cartContainer());
cartCheckoutContainer.appendChild(checkout());
appDiv.appendChild(main);
main.appendChild(cartCheckoutContainer);   
appDiv.appendChild(footer());

let totalCartPrice = document.querySelector(".total-price-value");
let cart = JSON.parse(localStorage.getItem('cart'));

function updateTotalCartPrice() {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let inputQuantity = document.querySelectorAll(".product-quantity")[i];
    let itemTotalPrice = document.querySelectorAll(".item-total-price")[i];

    let quantity = parseInt(inputQuantity.value);
    let price = item.price;
    let total = quantity * price;
    itemTotalPrice.innerHTML = `€ ${total.toFixed(2)}`;

    totalPrice += total;
  }

  totalCartPrice.innerHTML = `€ ${totalPrice.toFixed(2)}`;
}



for (let i = 0; i < cart.length; i++) {
  let item = cart[i];
  let inputQuantity = document.querySelectorAll(".product-quantity")[i];
  let itemTotalPrice = document.querySelectorAll(".item-total-price")[i];

  inputQuantity.addEventListener("change", () => {
    if (inputQuantity.value < 1) {
      inputQuantity.value = 1;
    }
    if (inputQuantity.value > item.quantity) {
      inputQuantity.value = item.quantity;
    }
    updateTotalCartPrice();
  });

  let minusButton = document.querySelectorAll(".minusQtd")[i];
  minusButton.addEventListener("click", () => {
    if (inputQuantity.value > 1) {
      inputQuantity.value--;
      updateTotalCartPrice();
    }
  });

  let plusButton = document.querySelectorAll(".plusQtd")[i];
  plusButton.addEventListener("click", () => {
    if (inputQuantity.value < item.quantity) {
      inputQuantity.value++;
      updateTotalCartPrice();
    }
  });
}

updateTotalCartPrice();


handleScroll();
highlightNavItem();


