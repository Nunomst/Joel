import { createModal, showModal, hideModal } from "../modal/Modal.js";

export function productsGrid() {
  let productsGrid = document.createElement('div');
  productsGrid.innerHTML = `<div class="products-grid-container">
  </div>`;
  return productsGrid;
}

export function createProductCard() {
  let products = document.createElement('div');

  products.innerHTML += `<div class="products-grid-item">
    <div class="item-img">
      <img src="./assets/images/images.jpeg" alt="joia">
    </div>
    <div class="item-description-container">
      <p class="img-description">Colar de Diamante</p>
      <p class="price-item">9999€</p>
    </div>
    <div class="type-container">
      <p class="type-item">Rings</p>
      </div>
      <div class="more-details-container">
      <p class="more-details-item">More details</p>
      <ion-icon class="cart-grid-item" name="cart-outline"></ion-icon>
    </div>
  </div>`;

  const modalActivators = products.querySelectorAll('.more-details-item');

  modalActivators.forEach((modalActivator) => {
    modalActivator.addEventListener('click', () => {
      console.log('clicado');
      const modal = createModal();
      document.body.appendChild(modal);
      showModal();
      addModalCloseEvent();
    });
  });

  return products;
}

export function addModalCloseEvent() {
  const modal = document.getElementById('modalSelector');

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
      modal.remove();
    }
  });
}