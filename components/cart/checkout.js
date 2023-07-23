import { getCartFromLocalStorage, calculateFullPrice } from '../../services/localStorage.js';

// Function to update the total price in the checkout page
function updateTotalPrice() {
  const totalCartElement = document.getElementById('total-cart');
  
  const cart = getCartFromLocalStorage();
  const totalPrice = calculateFullPrice(cart);
  
  console.log(cart)
  
  
  totalCartElement.textContent = `${totalPrice.toFixed(2)}€`;
}

export function checkout() {
  let checkout = document.createElement('div');
  checkout.classList.add('checkout');
  checkout.innerHTML = ` 
    <div class="coupon-code">
      <p>Have a coupon?</p>
      <input type="text" placeholder="Coupon code">
      <button>Apply</button>
      <p class="coupon-status"></p>
    </div>
    <div class="total-price">
      <table>
        <tr>
          <td>Total price:</td>
          <td id="total-cart"></td>
        </tr>
        <tr>
          <td>Discount:</td>
          <td>-$20.00</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$180.00</td>
        </tr>
      </table>
      <div class="purchase-button">
        <button>Make Purchase</button>
      </div>
      <div class="payment-options">
        <ul>
          <li><a href=""> <i class="fa-brands fa-cc-mastercard"></i></a></li>
          <li><a href=""><i class="fa-brands fa-cc-paypal"></i></a></li>
          <li>
            <a href=""><i class="fa-brands fa-cc-visa"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-cc-amazon-pay"></i></a>
          </li>
        </ul>
      </div>
    </div>
  `;

   window.addEventListener('cartUpdated', () => {
    updateTotalPrice();
});

document.addEventListener('DOMContentLoaded', () => {
  updateTotalPrice();
});

  return checkout;
}
