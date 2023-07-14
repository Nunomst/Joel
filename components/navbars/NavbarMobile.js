import { highlightNavItem } from "../../logic/navbar/highlightNavItem";

export function navbarMobile() {
    let navbar = document.createElement('div');
    navbar.innerHTML = `  <section>
    
    <div class="bottom-bar">
      <ion-icon name="pricetags-outline" class="icon" onclick="change(this)"></ion-icon>
      <ion-icon name="reader-outline" class="icon" onclick="change(this)"></ion-icon>
      <ion-icon name="mail-outline" class="icon" onclick="change(this)"></ion-icon>
      <ion-icon name="cart-outline" class="icon" onclick="change(this)"></ion-icon>
    </div>
  </section>`;

return navbar;
}