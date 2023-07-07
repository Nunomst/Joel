import './style/style.css';
import {navbarDesktop} from './components/navbars/NavbarDesktop.js';
import {navbarMobile} from './components/navbars/NavbarMobile.js';
import { handleScroll } from './logic/navbar/scrollLogic';
import {highlightNavItem} from './logic/navbar/highlightNavItem';
import { cartTable } from './components/cart/cartTable';
import {footer} from './components/footer/footer.js';
import { checkout } from './components/checkout/checkout';



let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(cartTable());
appDiv.appendChild(checkout());
appDiv.appendChild(footer());


handleScroll();
highlightNavItem();


