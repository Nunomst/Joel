export function checkout() {
    let checkout = document.createElement('div');
    checkout.innerHTML = `   
    <div class="checkout">
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
           <td>$200.00</td>
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
    </div>
   </div>

   </main> `;

    return checkout;
}