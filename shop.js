import './style/shop.css';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import {footer} from './components/footer/footer.js';


import { handleScroll } from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';


import { searchComponent } from './components/shop/search.js';

import { productsGrid } from './components/shop/productsgrid.js';
import { createProductCard } from './components/shop/productsgrid.js';


let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(searchComponent());
appDiv.appendChild(productsGrid());
appDiv.appendChild(footer());


let products = appDiv.querySelector(".products-grid-container");

for (let i = 0; i < 12; i++) {
  products.appendChild(createProductCard());
}



handleScroll();
highlightNavItem();