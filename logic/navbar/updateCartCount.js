export function updateCartCount(count) {
    let cartCountLabel = document.getElementById('lblCartCount');
    cartCountLabel.textContent = count.toString();
  }