import './style/style.css';
import {navbarDesktop} from './components/navbars/NavbarDesktop.js';
import {navbarMobile} from './components/navbars/NavbarMobile.js';
import { handleScroll } from './logic/navbar/scrollLogic';
import {highlightNavItem} from './logic/navbar/highlightNavItem';
import { searchComponent } from './components/search/SearchComponent';
import { productsGrid } from './components/productsGrid/ProductsGrid.js';
import { createProductCard } from './components/productsGrid/ProductsGrid.js';


let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(searchComponent());
appDiv.appendChild(productsGrid());
let products = appDiv.querySelector(".products-grid-container");

for (let i = 0; i < 27; i++) {
  products.appendChild(createProductCard());
}



handleScroll();
highlightNavItem();