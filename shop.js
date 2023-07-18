import './style/shop.css';

import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import { handleScroll } from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';
import { searchComponent } from './components/shop/search.js';
import { productsGrid } from './components/shop/productsgrid';
import { createProductCard } from './components/shop/productsgrid';
import { getProducts } from './services/getProducts';
import { updateCartCount } from './logic/updateCartCount';
import { searchProducts } from './logic/searchLogic';

// #region shopPage logic



// get the div with id="app" from index.html and append the components to it
let appDiv = document.getElementById('app');

// the components
appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(searchComponent());
appDiv.appendChild(productsGrid());
let products = appDiv.querySelector(".products-grid-container");

// get products from server with the function getProducts() from services/getProducts.js
const productsData = await getProducts();

// create product cards with the function createProductCard() from components/productsGrid/ProductsGrid.js
for(let i = 0; i < productsData.length; i++) {
  const product = productsData[i];
  products.appendChild(createProductCard(product.image, product.name, product.price, product.description));
}

let cart = [];

if(localStorage.getItem('cart') !== null) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

function addToCart(product) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].name === product.name) {
      alert("This product is already in your cart!");
      return;
    }
  }
  cart.push(product);
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));

}

  const addToCartButton = document.querySelectorAll(".cart-grid-item");

  addToCartButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = productsData[index];
      addToCart(product);
      updateCartCount(cart.length);
    });
  });


// #endregion


handleScroll();
highlightNavItem();

const searchInput = document.getElementsByClassName("input-search")[0];

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchProducts(query);
});