import './style/cart.css';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import {footer} from './components/footer/footer.js';
import { handleScroll } from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';
import {cartContainer} from './components/cart/cartContainer.js';
import {checkout} from './components/cart/checkout.js';
import { incrementCartQuantity } from './logic/cartButtonsLogic';
import { decrementCartQuantity } from './logic/cartButtonsLogic';
import { postCoupon } from './services/postCoupon';
import {postCheckout} from './services/postCheckout.js';


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


let couponInput = document.querySelector(".couponLbl");
let couponStatus = document.querySelector(".coupon-status");
let applyCouponButton = document.querySelector(".btn-apply-coupon");
let totalCartPrice = document.querySelector(".total-price-value");
let cart = JSON.parse(localStorage.getItem('cart'));
let discountPrice = document.querySelector(".discount-price-value");



applyCouponButton.addEventListener("click", async () => {
  let coupon = couponInput.value;
  try {
    let response = await postCoupon(coupon);
    console.log(response);
    if (response.success) {
      couponStatus.innerHTML = response.message;
      console.log('Discount:', response.discount);
      discountPrice.innerHTML = `-${response.discount}%`;
    } else {
      console.log(response.error);
      couponStatus.innerHTML = "Invalid coupon";
    }
  } catch (error) {
    console.error('Error:', error);
    couponStatus.innerHTML = "Error occurred while applying the coupon";
  }
  calculateFinalPrice();
});





function updateTotalCartPrice() {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let inputQuantity = document.querySelectorAll(".product-quantity")[i];
    let itemTotalPrice = document.querySelectorAll(".item-total-price")[i];

    let quantity = parseInt(inputQuantity.value);
    let price = item.price;
    let total = quantity * price;
    itemTotalPrice.innerHTML = `${total.toFixed(2)}€`;

    totalPrice += total;
  }

  totalCartPrice.innerHTML = `${totalPrice.toFixed(2)}€`;
  calculateFinalPrice()
}




for (let i = 0; i < cart.length; i++) {


  let item = cart[i];
  let inputQuantity = document.querySelectorAll(".product-quantity")[i];
  
  inputQuantity.addEventListener("change", () => {
    if (inputQuantity.value < 1) {
      inputQuantity.value = 1;
    }
    if (inputQuantity.value > item.quantity) {
      inputQuantity.value = item.quantity;
    }
    updateFinalPrice();
    calculateFinalPrice()
  });



  let minusButton = document.querySelectorAll(".btn-minus")[i];

  minusButton.addEventListener("click", () => {
    decrementCartQuantity(inputQuantity, updateTotalCartPrice);
  });

  let plusButton = document.querySelectorAll(".btn-plus")[i];

  plusButton.addEventListener("click", () => {
    incrementCartQuantity(inputQuantity, item, updateTotalCartPrice);
  });

}



function calculateFinalPrice() {
  let finalPrice = 0; 
  let discountPercentage = document.querySelector(".discount-price-value"); 
  let totalCartPrice = document.querySelector(".total-price-value");  
 
  totalCartPrice = parseFloat(totalCartPrice.innerHTML); 
  discountPercentage = parseFloat(discountPercentage.innerHTML.replace("-" , "")); //remove - sign from discount percentage value because it was fucking up the math

  finalPrice = totalCartPrice - (totalCartPrice * (discountPercentage / 100)); //calculate final price
  document.querySelector(".final-price-value").innerHTML = `${finalPrice.toFixed(2)}€`;
}


calculateFinalPrice()
updateTotalCartPrice();

handleScroll();
highlightNavItem();


let makePurchaseButton = document.querySelector(".purchase-button button");

makePurchaseButton.addEventListener("click", async () => {
  let checkoutBody = {
    products: [],
    coupon: null,
  };


  try {
    let response = await postCheckout(checkoutBody);
    console.log(response);
    if (response.success) {
      alert("Purchase successful");
      localStorage.removeItem("cart");
      location.href = "/";
    } else {
      alert("Purchase failed");
    }
  } catch (error) {
    console.error('Error:', error);
    alert("Purchase failed");
  }
});


