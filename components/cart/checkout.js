

export function checkout()
{   
    let checkout = document.createElement('div');
    checkout.classList.add('checkout');
    checkout.innerHTML = ` <div class="coupon-code">
    <p>Have a coupon?</p>
    <input type="text" placeholder="Coupon code" class="couponLbl">
    <button class="btn-apply-coupon">Apply</button>
    <p class="coupon-status"></p>
  </div>
  <div class="total-price">
   <table>
      <tr>
        <td>Total price:</td>
        <td class="total-price-value">0.00€</td>
      </tr>
      <tr>
        <td>Discount:</td>
        <td class="discount-price-value">-0%</td>
      </tr>
      <tr>
        <td>Final Price</td>
        <td class="final-price-value">0.00€</td>
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
  </div>`

    return checkout;

    
}