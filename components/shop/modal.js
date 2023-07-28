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
          <div class="product-description">
            <p>${product.description}</p>
          </div>
          <div class="rating-box">
            <div class="stars" id="rating-stars">
              ${getStarIcons(product.rating)}       
              <p>Classificação: ${product.rating}</p>
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


    return modal;
  }

  function getStarIcons(rating) {
    const filledStars = Math.round(rating); // Arredonda para o número inteiro mais próximo
    const maxStars = 5;
    let starIcons = '';
  
    for (let i = 1; i <= maxStars; i++) {
      if (i <= filledStars) {
        starIcons += '<i class="fa-solid fa-star"></i>'; // Ícone de estrela preenchida
      } else {
        starIcons += '<i class="fa-solid fa-star-stroke"></i>'; // Ícone de estrela vazia
      }
    }
  
    return starIcons;
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
