import { postCoupon }   from '../services/postCoupon.js';
import {postCheckout}   from '../services/postCheckout.js'
import {snackbar}       from '../components/cart/snackbar.js'

let discountValue = 0;

// Function gets the cart from local storage
export function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart'));
}

// Function to save the cart in local storage
export function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new CustomEvent('cartUpdated', { detail: cart });
    window.dispatchEvent(event);
}

// Function to add product to cart
export function addToCart(product) {
    let cart = getCartFromLocalStorage();

    if(!cart){
        cart = [];
    }

    const productInCart = cart.find(item => item.id === product.id);
    if(productInCart)
    {
        if(productInCart.totalQuantity < productInCart.quantity)
        {
            productInCart.totalQuantity++;
        }
        if(productInCart.totalQuantity > productInCart.quantity)
        {
            productInCart.totalQuantity = productInCart.quantity;
        }
    }
    else
    {
        if(product.quantity === 0){
            snackbar("Out of stock!", false)
            return;
        }
        cart.push({...product, totalQuantity: 1});
    }

    saveCartToLocalStorage(cart);
} 

// Function to remove product from cart
export function removeFromCart(productId) {
    const cart = getCartFromLocalStorage();

    const updateCart = cart.filter(item => item.id !== productId);

    saveCartToLocalStorage(updateCart)
}

// Function to update the quantity of products in cart
export function updateQuantity(productId, newQuantity) {
    const cart = getCartFromLocalStorage();

    const updateCart = cart.map(item => {
        if (item.id === productId) {
            return {...item, totalQuantity: newQuantity};
        }
        return item;
    });

    saveCartToLocalStorage(updateCart);
}

// This next two functions are about the cart info in navbar

// Function to calculate the total quantity
function calculateTotalQuantity(cart){
    let totalCart = 0;
  
    if (cart) {
      for (const item of cart) {
        totalCart += item.totalQuantity;
        if(item.totalQuantity > item.quantity)
        {
            item.totalQuantity = item.quantity;
        }
      }
    }

    return totalCart;
  } 
  
// Function to update the quantity in navbar
export function updateCartQuantity() {
    let cart = getCartFromLocalStorage();
    let cartTotal = calculateTotalQuantity(cart);
    let cartQuantityElement = document.getElementById('lblCartCount');

    if (cartQuantityElement) {
        cartQuantityElement.textContent = cartTotal.toString();
    }
}
updateCartQuantity();
//////////////////////////////////////////////////////////////

// Function to update the total price of the product in the cart row
export function updateTotalPrice(totalPriceElement, productPrice, productQuantity) {
    const totalPrice = (productPrice * productQuantity).toFixed(2);
    totalPriceElement.textContent = `${totalPrice}€`;
}

// Function to calculate the full price cart
export function calculateFullPrice(cart) {
    let total = 0;

    for (const product of cart) {
        total += product.price * product.totalQuantity;
    }

    return total;
}

// Function to get the coupon -> from checkout.js
export async function getCoupon(couponCode) {
    
    if (couponCode !== '') {
        try {
          const response = await postCoupon(couponCode);
          discountValue = parseFloat(response.discount)
    
          // Select coupon status
          const couponStatus = document.querySelector('.coupon-status');
          couponStatus.textContent = 'Coupon applied successfully!';
    
          // Select discount class
          const discountClass = document.querySelector('.discount-value');
          discountClass.textContent = `-${discountValue}%`
    
          // Select final price class and logic
          let finalPricee = document.querySelector('.final-price');
          finalPricee.textContent = `${finalPrice(totalPrice())}`;
          
        } 
        catch (error) {
        console.error('Error applying coupon:', error);
    
        // Select coupon status
        const couponStatus = document.querySelector('.coupon-status');
        couponStatus.textContent = 'Invalid coupon code. Please try again.';
        }
      }
}

// Function to calculate the final price without discount
export function totalPrice() {
  const cart = getCartFromLocalStorage();

  let totalPrice = calculateFullPrice(cart);

      const totalCartElement = document.getElementById('total-cart');
      totalCartElement.textContent = `${totalPrice.toFixed(2)}€`;

  return totalPrice;
}

// Function to calculate the final price with discount
export function finalPrice(totalPrice) {
    
    let finalCartPrice = totalPrice - (totalPrice * (discountValue / 100)); 
    let finalPrice = `${finalCartPrice.toFixed(2)}€`

        const finalPricee = document.querySelector('.final-price');
        finalPricee.textContent = `${finalCartPrice.toFixed(2)}€`;

    return finalPrice;
}

// Function to send checkout to api
export async function processCheckout(couponCode){
    const cart = getCartFromLocalStorage();

    const product = cart.map(item => ({
        id: item.id,
        quantity: item.totalQuantity,
        })
    );
    const response = couponCode

    const checkoutBody = {
        products: product,
        coupon: response,
    }
    console.log(checkoutBody);

    try {

        let checkoutReponse = await postCheckout(checkoutBody)
        console.log(checkoutReponse)
        if(cart.length === 0){
            snackbar("ERROR! Invalid Purchase!", false)
        }
        else{
            clearCartLocalStorage();
            snackbar("Purchase Successful!", true)
        }
    } 
    catch (error) {
        console.log('Error', error)
        snackbar("ERROR! Invalid Purchase!", false)
    }
}

// Function to clear LocalStorage
export function clearCartLocalStorage() {
    let cart = getCartFromLocalStorage();
    const cena = document.querySelector('.cart-table');
    const updateCart = [];

    saveCartToLocalStorage(updateCart);
    updateCartQuantity();
    
    cena.innerHTML = 'Your cart is empty.';

    console.log(cart);
}
