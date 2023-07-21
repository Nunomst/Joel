import './style/shop.css';
import { cartWork} from './logic/toCartCount.js';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import { handleScroll } from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';
import { searchComponent } from './components/shop/search.js';
import { productsGrid } from './components/shop/productsgrid';
import { createProductCard } from './components/shop/productsgrid';
import { getProducts } from './services/getProducts';
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
  products.appendChild(createProductCard(product));
}

cartWork(productsData);
// #endregion


handleScroll();
highlightNavItem();


const searchInput = document.getElementsByClassName("input-search")[0];

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchProducts(query);
});