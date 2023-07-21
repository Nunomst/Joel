export function updateTotalCartPrice(cart) {
    let totalPrice = 0;
  
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let inputQuantity = document.querySelectorAll(".product-quantity")[i];
      let itemTotalPrice = document.querySelectorAll(".item-total-price")[i];
  
      let quantity = parseInt(inputQuantity.value);
      let price = item.price;
      let total = quantity * price;
      itemTotalPrice.innerHTML = `€ ${total.toFixed(2)}`;
  
      totalPrice += total;
    }
  
    totalCartPrice.innerHTML = `€ ${totalPrice.toFixed(2)}`;
  }