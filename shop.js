import './style/shop.css';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import { handleScroll } from './logic/navbar/scrollLogic';
import {highlightNavItem} from './logic/navbar/highlightNavItem';
import { searchComponent } from './components/search/SearchComponent';
import { productsGrid } from './components/productsGrid/ProductsGrid.js';
import { searchProducts } from './logic/searchLogic';
import { createProductCard } from './components/productsGrid/ProductsGrid.js';
import { getProducts } from './services/getProducts';
import { getPerson } from './logic/getPerson';
import { staff } from './components/contactus/staff';


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

// #endregion

const personInfo = await getPerson();

const staffDiv = appDiv.querySelector(".staff-container");
staffDiv.appendChild(staff(personInfo[0].picture, personInfo[0].firstName, personInfo[0].lastName));


handleScroll();
highlightNavItem();

const searchInput = document.getElementsByClassName("input-search")[0];

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  searchProducts(query);
});