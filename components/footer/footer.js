export function footer () {
    let footer = document.createElement('div');
    footer.innerHTML = `   <footer>
    <div class="footer-content">
      <div class="footer-quick-links">
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div class="footer-logo-message-container">
        <div class="footer-logo">
          <img src="assets/letterless logo footer.png" alt="">
        </div>
          <p>© 2023 DekiDeki Jewelry. All rights reserved.</p>
    </div>
    <div class="footer-social-links">
      <ul>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      </ul>
    </div>
    </div>
  </footer>`;
    return footer;
}