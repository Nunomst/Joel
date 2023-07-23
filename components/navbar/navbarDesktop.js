import '../../style/navbar.css';
// import { getCartFromLocalStorage } from '../../services/localStorage.js';

// // Function to calculate the total quantity
// function calculateTotalQuantity(cart){
//   let totalCart = 0;

//   if (cart) {
//     for (const item of cart) {
//       totalCart += item.totalQuantity;
//     }
//   }

//   return totalCart;
// }

// // Function to update the quantity in navbar
// export function updateCartQuantity() {
//   const cart = getCartFromLocalStorage();
//   const cartTotal = calculateTotalQuantity(cart); 
//   const cartQuantityElement = document.querySelector('#lblCartCount');
//   cartQuantityElement.textContent = cartTotal;
// }

// console.log(totalQuantity)

export function navbarDesktop() {
  let navbarDesktop = document.createElement('div');
  navbarDesktop.innerHTML = ` 
  <div class="logo-mobile">
    <a href="index.html" class="brand">
      <img src="assets/deki deki logo transparent gold.png" alt="">
    </a>
  </div>
  <section class="navbar-top-section">
  <div class="navbar-top">
    <nav id="navbar">
      <ul class="menu-links-left">
        <li>
          <a href="index.html">
            <span>
              Shop
            </span>
            <span>
              <ion-icon name="pricetags-outline"></ion-icon>
            </span>
          </a>
        </li>
        <li>
          <a href="aboutus.html">
            <span>
              About
            </span>
            <span>
              <ion-icon name="reader-outline"></ion-icon>
            </span>
          </a>
        </li>
      </ul>
      <a href="index.html" class="brand">
        <span>
          <img src="/assets/color minimal.png" alt="">
        </span>
        <span>
          <img src="/assets/deki deki logo transparent gold.png" alt="">
        </span>
      </a>
      <ul class="menu-links-right">
        <li>
          <a href="contactus.html">
            <span>
              Contacts
            </span>
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="icon-remove-hover" href="cart.html">
            <span>
              <ion-icon name="cart-outline" class="cartNavItem"></ion-icon>
            </span>
            <span>
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <label id="lblCartCount"></label>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>
  `
  return navbarDesktop;
}

// ${calculateTotalQuantity(getCartFromLocalStorage())}