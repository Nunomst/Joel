import { getCoupon, totalPrice, finalPrice } from '../../services/localStorage.js';

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
          <td class="discount-value"></td>
        </tr>
        <tr>
          <td>Total</td>
          <td class="final-price"></td>
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

  // Select button and input
  const applyButton = checkout.querySelector('button');
  const couponInput = checkout.querySelector('input');

  // Logic to validate coupon
  applyButton.addEventListener('click', async () => {
    const couponCode = couponInput.value.trim();
    getCoupon(couponCode)
  });

  window.addEventListener('cartUpdated', () => {
    totalPrice();
    finalPrice(totalPrice());
  });

  document.addEventListener('DOMContentLoaded', () => {
    totalPrice();
    finalPrice(totalPrice());
  });

  return checkout;
}

// YNAHPEY
