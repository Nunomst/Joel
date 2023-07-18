
// this function creates the modal with the product information

export function createModal(img, name, price, description) {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div id="modalSelector" class="modal">
      <div class="modal-container">
        <div class="modal-image">
          <img src="${img}" alt="foto">
        </div>
        <div class="modal-products-container">
          <div class="product-name">
            <h2>${name}</h2>
          </div>
          <div class="product-type">
            <p>Colars</p>
          </div>
          <div class="product-description">
            <p>${description}</p>
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
            <p>${price}€</p>
            <div class="product-add-cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>`

    return modal;
  }
  
  // this function shows the modal

  export function showModal() {
    const modal = document.getElementById('modalSelector');
    modal.style.display = 'flex';
  }
  
  //this function hides the modal

  export function hideModal() {
    const modal = document.getElementById('modalSelector');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  