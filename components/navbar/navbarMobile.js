import '../../style/navbar.css';
export function navbarMobile() {
  let navbarMobile = document.createElement('div');
  navbarMobile.innerHTML = `    <section>
  
  <div class="bottom-bar">
    <a href="index.html"><ion-icon name="pricetags-outline" class="icon" onclick="change(this)"></ion-icon></a>
    <a href="aboutus.html"><ion-icon name="reader-outline" class="icon" onclick="change(this)"></ion-icon></a>
    <a href="contactus.html"><ion-icon name="mail-outline" class="icon" onclick="change(this)"></ion-icon></a>
    <a href="cart.html"><ion-icon name="cart-outline" class="icon" onclick="change(this)"></ion-icon></a>
  </div>
</section>`;

return navbarMobile;
}