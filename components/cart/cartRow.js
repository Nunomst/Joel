import { updateCartQuantity, updateQuantity, removeFromCart, calculateFullPrice, getCartFromLocalStorage , updateTotalPrice, totalPrice, finalPrice} from '../../services/localStorage.js';

export function cartRow(product) {
  const cartRow = document.createElement('tr');
  cartRow.setAttribute('data-product-id', product.id);
  cartRow.innerHTML = `
    <td>
      <div class="cart-info">
        <img src="${product.image}" alt="" class="product-image">
        <div class="product-info">
          <p>${product.name}</p>
          <small>${product.price}</small>
        </div>
      </div>
    </td>
    <td>
      <div class="quantity">
        <button class="btn-minus">-</button>
        <input type="number" value="${product.totalQuantity}" class="product-quantity" disabled>
        <button class="btn-plus">+</button>
      </div>
    </td>
    <td>
      <i class="fa-regular fa-trash-can"></i>
    </td>
    <td class="total-price"></td>
  `;

  const totalPriceElement = cartRow.querySelector('.total-price');
  updateTotalPrice(totalPriceElement, product.price, product.totalQuantity);

  // Select delete button
  const btnRemove = cartRow.querySelector('.fa-trash-can');
  btnRemove.addEventListener('click', () => handleRemoveFromCart(product.id));

  // Select "-" button
  const btnMinus = cartRow.querySelector('.btn-minus');
  btnMinus.addEventListener('click', () => handleQuantityChange(product.id, -1));

  // Select "+" button
  const btnPlus = cartRow.querySelector('.btn-plus');
  btnPlus.addEventListener('click', () => handleQuantityChange(product.id, 1));

  return cartRow;
}

// Function to delete product from table
function handleRemoveFromCart(productId) {
  const cart = getCartFromLocalStorage();
  const cartRow = document.querySelector(`tr[data-product-id="${productId}"]`);
  cartRow.remove();
  removeFromCart(productId);
  updateQuantity(productId);
  updateCartQuantity();
  calculateFullPrice(cart);
  totalPrice();
  finalPrice(totalPrice()); 
}

// Function to change quantity when click on "+" or "-"
function handleQuantityChange(productId, change) {
  const cart = getCartFromLocalStorage();
  const cartRow = document.querySelector(`tr[data-product-id="${productId}"]`);
  const inputQuantity = cartRow.querySelector('.product-quantity');

  let newQuantity = parseInt(inputQuantity.value) + change;

  if (newQuantity < 0) {
    newQuantity = 0;
  }
  inputQuantity.value = newQuantity;
  
  updateQuantity(productId, newQuantity);
  updateCartQuantity();
  calculateFullPrice(cart);
  totalPrice();
  finalPrice(totalPrice());

  const productPrice = parseFloat(cartRow.querySelector('small').textContent);
  const totalPriceElement = cartRow.querySelector('.total-price');
  updateTotalPrice(totalPriceElement, productPrice, newQuantity);
}