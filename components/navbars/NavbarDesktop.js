export function navbarDesktop() {
    let navbar = document.createElement('div');
    navbar.innerHTML = `    <section class="navbar-top-section">
    <div class="navbar-top">
      <nav id="navbar">
        <a href="#" class="brand">
          <span>
           <img src="public/assets/logos/colar minimal.png" alt="">
          </span>
          <span>Deki Deki</span>
        </a>
        <ul>
          <li style="--i:0;">
            <a href="#">
              <span>
                Shop
              </span>
              <span>
                <ion-icon name="pricetags-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li style="--i:1;">
            <a href="#">
              <span>
                Cart
              </span>
              <span>
                <ion-icon name="cart-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li style="--i:2;">
            <a href="#">
              <span>
                About
              </span>
              <span><ion-icon name="reader-outline"></ion-icon></span>
            </a>
          </li>
          <li style="--i:3;">
            <a href="#">
              <span>
                Contact
              </span>
              <span><ion-icon name="mail-outline"></ion-icon></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
    `
    return navbar;
}