import { updateCartQuantity, updateQuantity, removeFromCart, calculateFullPrice, getCartFromLocalStorage , updateTotalPrice, totalPrice, finalPrice} from '../../services/localStorage.js';
import { limitString } from '../../logic/limitString.js';

export function cartRow(product) {
  const cartRow = document.createElement('tr');
  cartRow.classList.add('cart-row')
  cartRow.setAttribute('data-product-id', product.id);
  cartRow.innerHTML = `
    <td>
      <div class="cart-info">
        <img src="${product.image}" alt="" class="product-image">
        <div class="product-info">
        <p>${limitString(product.name, 51)}</p>
          <small>${product.price}€</small>
        </div>
      </div>
    </td>
    <td>
      <div class="quantity">
        <button class="btn-minus">-</button>
        <input type="text" value="${product.totalQuantity}" class="product-quantity" disabled>
        <button class="btn-plus">+</button>
      </div>
    </td>
    <td class="trash-container">
      <i class="fa-regular fa-trash-can"></i>
    </td>
    <td class="total-price">
    </td>
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
  handleHrExeptions();
}

// Function to change quantity when click on "+" or "-"
function handleQuantityChange(productId, change) {
  const cart = getCartFromLocalStorage();
  const cartRow = document.querySelector(`tr[data-product-id="${productId}"]`);
  const inputQuantity = cartRow.querySelector('.product-quantity');

  let newQuantity = parseInt(inputQuantity.value) + change;
  
  if (newQuantity <= 0) {
    newQuantity = 1;
  }

  const capInputQuantityToStock = () => {
    const product = cart.find(product => product.id === productId);
    if (newQuantity > product.quantity) {
      newQuantity = product.quantity;
    }
  }

  capInputQuantityToStock()
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

// 
function handleHrExeptions() {
  let cartRows = document.querySelectorAll('tr[data-product-id]');
  let hrElements = document.querySelectorAll('.hr-row');

  if (cartRows.length === 1) {
    hrElements.forEach(hr => hr.remove());
  }

  if (cartRows.length === 0) {
    let table = document.querySelector('table');
    let emptyCartRow = document.createElement('tr');
    let emptyCartData = document.createElement('td');
    emptyCartData.colSpan = 4;
    emptyCartData.textContent = 'Your cart is empty.';
    emptyCartRow.appendChild(emptyCartData);
    table.appendChild(emptyCartRow);
  }
} 
