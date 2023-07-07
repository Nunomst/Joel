export function createModal() {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div id="modalSelector" class="modal">
      <div class="modal-container">
        <div class="modal-image">
          <img src="./assets/images/images.jpeg" alt="foto">
        </div>
        <div class="modal-products-container">
          <div class="product-name">
            <h2>Product name</h2>
          </div>
          <div class="product-type">
            <p>Colars</p>
          </div>
          <div class="product-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi modi soluta saepe. Laborum veritatis adipisci minus repellendus dolor non et inventore ea ipsam odit!</p>
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
            <p>999€</p>
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
  
  export function showModal() {
    const modal = document.getElementById('modalSelector');
    modal.style.display = 'flex';
  }
  
  export function hideModal() {
    const modal = document.getElementById('modalSelector');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  