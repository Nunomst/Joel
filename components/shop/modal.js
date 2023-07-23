import { addToCart } from '../../services/localStorage.js';
import { updateCartQuantity } from '../../services/localStorage.js';

// this function creates the modal with the product information

export function createModal(product) {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div id="modalSelector" class="modal">
      <div class="modal-container">
        <div class="modal-image">
          <img src="${product.image}" alt="foto">
        </div>
        <div class="modal-products-container">
          <div class="product-name">
            <h2>${product.name}</h2>
          </div>
          <div class="product-type">
            <p>Colars</p>
          </div>
          <div class="product-description">
            <p>${product.description}</p>
          </div>
          <div class="rating-box">
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div class="product-price">
            <p>${product.price}€</p>
            <div class="product-add-cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>`

  // Add products button to cart

  const addButton = modal.querySelectorAll('.product-add-cart');

  addButton[0].addEventListener('click',() =>{
    addToCart(product);
    updateCartQuantity();
  })

    return modal;
  }

  
  // this function shows the modal

  export function showModal() {
    const modal = document.getElementById('modalSelector');
    if(modal) {
      modal.style.display = 'flex';
    }
  }
  
  //this function hides the modal

  export function hideModal() {
    const modal = document.getElementById('modalSelector');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  