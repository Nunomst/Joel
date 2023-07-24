import './style/shop.css';

import { updateCartQuantity } from './services/localStorage.js';
import {navbarDesktop}        from './components/navbar/navbarDesktop.js';
import { navbarMobile }       from './components/navbar/navbarMobile.js';
import { handleScroll }       from './logic/scrollLogic';
import { highlightNavItem }   from './logic/highlightNavItem';
import { searchComponent }    from './components/shop/search.js';
import { productsGrid }       from './components/shop/productsgrid';
import { createProductCard }  from './components/shop/productsgrid';
import { getProducts }        from './services/getProducts';
import { searchProducts }     from './logic/searchLogic';


// Get the div with id="app" from index.html and append the components to it
let appDiv = document.getElementById('app');

// Components
appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(searchComponent());
appDiv.appendChild(productsGrid());
let products = appDiv.querySelector(".products-grid-container");

// Get products from server with the function getProducts() from services/getProducts.js
const productsData = await getProducts();

// Create product cards with the function createProductCard() from components/productsGrid/ProductsGrid.js
for(let i = 0; i < productsData.length; i++) {
  const product = productsData[i];
  products.appendChild(createProductCard(product));
}

handleScroll();
highlightNavItem();
updateCartQuantity();

// Search bar logic
const searchInput = document.getElementsByClassName("input-search")[0];
searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchProducts(query);
});