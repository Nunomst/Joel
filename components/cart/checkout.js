import { getCartFromLocalStorage, calculateFullPrice } from '../../services/localStorage.js';
import { postCoupon } from '../../services/postCoupon.js';

export function checkout() {
  let totalPrice = 0;
  let response;
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

    if (couponCode !== '') {
      try {
        const response = await postCoupon(couponCode);
        console.log(response)
        const discountValue = parseFloat(response.discount)
        console.log(discountValue)

        // Select coupon status
        const couponStatus = checkout.querySelector('.coupon-status');
        couponStatus.textContent = 'Coupon applied successfully!';

        // Select discount class
        const discountClass = checkout.querySelector('.discount-value');
        discountClass.textContent = `-${discountValue}%`
        // finalPrice = totalCartPrice - (totalPrice * (discountValue / 100)); 
        // Select final price class and logic
        const finalPrice = checkout.querySelector('.final-price');
        let finalCartPrice = totalPrice - (totalPrice * (discountValue / 100)); 
        finalPrice.textContent = `${finalCartPrice.toFixed(2)}€`
        
      } 
      catch (error) {
      console.error('Error applying coupon:', error);

      // Select coupon status
      const couponStatus = checkout.querySelector('.coupon-status');
      couponStatus.textContent = 'Invalid coupon code. Please try again.';
      }
    }
  });

  // Function to update the total price in the checkout page
  function updateTotalPrice() {
    const totalCartElement = document.getElementById('total-cart');
    
    const cart = getCartFromLocalStorage();
    totalPrice = calculateFullPrice(cart);
    
    totalCartElement.textContent = `${totalPrice.toFixed(2)}€`;
  }

  window.addEventListener('cartUpdated', () => {
    updateTotalPrice();
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice();
  });

  return checkout;
}



        // YNAHPEY
