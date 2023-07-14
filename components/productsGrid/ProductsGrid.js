import { createModal, showModal, hideModal } from "../modal/Modal.js";

// this is the component that will be appended to the div with id="app" from index.html that creates the grid of products

export function productsGrid() {
  let productsGrid = document.createElement('div');
  productsGrid.innerHTML = `<div class="products-grid-container">
  </div>`;
  return productsGrid;
}

// this is the function that creates the product card inside the grid

export function createProductCard(img, name, price, description) {
  let products = document.createElement('div');
  products.innerHTML += `<div class="products-grid-item">
    <div class="item-img">
      <img src="${img}" alt="joia">
    </div>
    <div class="item-description-container">
      <div class="img-description">
      <p>${name}</p>
      </div>
      <div class="price-item">
        ${price}€
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

  // this is the function that creates the modal when the user clicks on the "More details" button
  const modalActivators = products.querySelectorAll('.more-details-item');

  modalActivators.forEach((modalActivator) => {
    modalActivator.addEventListener('click', () => {
      const modal = createModal(img, name, price, description);
      document.body.appendChild(modal);
      showModal();
      addModalCloseEvent();
    });
  });

  return products;
}

// this is the function that closes the modal when the user clicks outside of it

export function addModalCloseEvent() {
  const modal = document.getElementById('modalSelector');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
      modal.remove();
    }
  });
}