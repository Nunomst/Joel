import { getCoupon, totalPrice, finalPrice, processCheckout, clearCartLocalStorage, getCartFromLocalStorage } from '../../services/localStorage.js';

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
          <td>Final price:</td>
          <td class="final-price"></td>
        </tr>
      </table>
      <div class="purchase-button">
        <button class="btn-purchase">Make Purchase</button>
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
  const checkoutBtn = checkout.querySelector('.btn-purchase');
  const cart = getCartFromLocalStorage();


  // Logic to validate coupon
  applyButton.addEventListener('click', async () => {
    const couponCode = couponInput.value.trim();
    const validCoupon = await getCoupon(couponCode);

    if(validCoupon != null)
    {
      localStorage.setItem('coupon', couponCode);
    }
    else
    {
      localStorage.removeItem('coupon');
    }
    getCoupon(couponCode)
  });

  checkoutBtn.addEventListener('click', async () => {
    processCheckout(couponInput.value);
    clearCartLocalStorage();
    couponInput.value = "";
    localStorage.removeItem('coupon');
  });

  window.addEventListener('cartUpdated', () => {
    totalPrice();
    finalPrice(totalPrice());

  });

  document.addEventListener('DOMContentLoaded', () => {
    totalPrice();
    finalPrice(totalPrice());
    
    const savedCoupon = localStorage.getItem('coupon');

    if(savedCoupon)
    {
      couponInput.value = savedCoupon;
    }

    if(!cart || cart.length === 0)
    {
      checkoutBtn.setAttribute('disabled', '')
      checkoutBtn.classList.add("btn-purchase-disabled");
    }
  
  });

  return checkout;
}