export function productsGrid() {
    let productsGrid = document.createElement('div');
    productsGrid.innerHTML = `<div class="products-grid-container">
  </div>`
  return productsGrid;
}


export function createProductCard() {
  let products = document.createElement('div');

  products.innerHTML += `<div class="products-grid-item">
  <div class="item-img">
    <img src="./assets/images/images.jpeg" alt="joia">
  </div>
  Lorem ipsum dolor sit amet.
</div>`

return products;
}