export function searchComponent() {
    let search = document.createElement('div');
    search.innerHTML = `
    <div class="search-container">
        <div class="search">
          <a id="search-icon" href="#"><span class="material-symbols-outlined fa-2xl">search</span></a>
        </div>
        <form action="submit">
          <input class="input-search" type="text">
        </form>
        <div class="cartGo">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Ir para o carrinho</p>
          </div>
          <label id="lblCartCount">1</label>
    </div>`
    return search;
}