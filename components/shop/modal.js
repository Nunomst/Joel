import { addToCart } from '../../services/localStorage.js';
import { updateCartQuantity } from '../../services/localStorage.js';

// Function to create the modal with the product information
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
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <div class="rating-box">
          <div class="stars" id="rating-stars">
            ${getStarIcons(product.rating)}       
            <p>Rating: ${product.rating}</p>
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

  const addButton = modal.querySelectorAll('.product-add-cart');

  addButton[0].addEventListener('click',() =>{
    addToCart(product);
    updateCartQuantity();
  });
    return modal;
  }

// Function to create rating stars with number from API
function getStarIcons(rating) {
  const filledStars = Math.round(rating);
  const maxStars    = 5;
  let starIcons     = '';

  for (let i = 1; i <= maxStars; i++) {
    starIcons += i <= filledStars ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-solid fa-star-stroke"></i>';
  }
  return starIcons;
}

// Function to show the modal
export function showModal() {
  const modal = document.getElementById('modalSelector');
  modal.style.display = 'flex';
}
  
// Function that hides the modal
export function hideModal() {
  const modal = document.getElementById('modalSelector');
  if (modal) {
    modal.style.display = 'none';
  }
}