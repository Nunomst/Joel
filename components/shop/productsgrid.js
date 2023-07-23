import { createModal, showModal, hideModal} from "./modal.js";
import { addToCart } from '../../services/localStorage.js';
import { limitString } from "../../logic/limitString.js";
import { updateCartQuantity } from '../../services/localStorage.js';
// import { updateCartQuantity } from '../../shop.js';

// This is the component that will be appended to the div with id="app" from index.html that creates the grid of products
export function productsGrid() {
  let productsGrid = document.createElement('div');
  productsGrid.innerHTML = `<div class="products-grid-container">
  </div>`;
  return productsGrid;
}

// This is the function that creates the product card inside the grid
export function createProductCard(product) {
  let products = document.createElement('div');
  products.innerHTML += `<div class="products-grid-item">
    <div class="item-img">
      <img src="${product.image}" alt="joia">
    </div>
    <div class="item-description-container">
      <div class="img-description">
      <p>${limitString(product.name, 14)}</p>
      </div>
      <div class="price-item">
        ${product.price}€
      </div>
    </div>
    <div class="type-container">
      <p class="type-item">Rings</p>
      </div>
      <div class="more-details-container">
      <p class="more-details-item">More details</p>
      <ion-icon class="cart-grid-item" name="cart-outline"></ion-icon>
    </div>
  </div>`;

// Add to cart logic
const cartButton = products.querySelectorAll('.cart-grid-item');

    cartButton[0].addEventListener('click',() =>{
    addToCart(product);
    updateCartQuantity();
  });


// This is the function that creates the modal when the user clicks on the "More        details" button
const modalActivators = products.querySelectorAll('.more-details-item');

  modalActivators.forEach((modalActivator) => {
    modalActivator.addEventListener('click', () => {
      const modal = createModal(product);
      document.body.appendChild(modal);
      showModal();
      addModalCloseEvent();
    });
  });

  return products;
}

// This is the function that closes the modal when the user clicks outside of it
export function addModalCloseEvent() {
const modal = document.getElementById('modalSelector');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
      modal.remove();
    }
  });
}