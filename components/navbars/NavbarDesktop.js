export function navbarDesktop() {
  let navbar = document.createElement('div');
  navbar.innerHTML = ` <section class="navbar-top-section">
  <div class="navbar-top">
    <nav id="navbar">
      <ul class="menu-links">
        <li>
          <a href="#">
            <span>
              Shop
            </span>
            <span>
              <ion-icon name="pricetags-outline"></ion-icon>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              About
            </span>
            <span>
              <ion-icon name="reader-outline"></ion-icon>
            </span>
          </a>
        </li>
      </ul>
      <a href="#" class="brand">
        <span>
          <img src="/assets/images/color minimal.png" alt="">
        </span>
        <span>
          <img src="/assets/images/deki deki logo transparent gold.png" alt="">
        </span>
      </a>
      <ul class="menu-links">
        <li>
          <a href="#">
            <span>
              Contacts
            </span>
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <ion-icon name="cart-outline" class="cartNavItem"></ion-icon>
            </span>
            <span>
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <label id="lblCartCount">1</label>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>
  `
  return navbar;
}