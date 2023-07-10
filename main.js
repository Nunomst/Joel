import './style/style.css';
import {navbarDesktop} from './components/navbars/NavbarDesktop.js';
import {navbarMobile} from './components/navbars/NavbarMobile.js';
import { handleScroll } from './logic/navbar/scrollLogic';
import {highlightNavItem} from './logic/navbar/highlightNavItem';
import {footer} from './components/footer/footer.js';
import { cartContainer } from './components/cart/cartContainer';
import { checkout } from './components/checkout/checkout';

let appDiv = document.getElementById('app');
let main = document.createElement('main');
let cartCheckoutContainer = document.createElement('div');
cartCheckoutContainer.classList.add('cart-checkout-container');


appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
cartCheckoutContainer.appendChild(cartContainer());
cartCheckoutContainer.appendChild(checkout());
appDiv.appendChild(main);
main.appendChild(cartCheckoutContainer);   

appDiv.appendChild(footer());


handleScroll();
highlightNavItem();


