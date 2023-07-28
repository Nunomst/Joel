export function searchComponent() {
  let search = document.createElement('div');
  search.innerHTML = `
  <div class="search-container">
      <div class="search">
        <a id="search-icon"><span class="material-symbols-outlined fa-2xl">search</span></a>
      </div>
      <form action="submit">
        <input class="input-search" type="text">
      </form>
      <div class="cartGo">
          <a href="cart.html">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Go to cart</p>
        </a>
      </div>

  </div>`
  return search;
}