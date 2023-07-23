import './style/cart.css';
import {navbarDesktop}      from './components/navbar/navbarDesktop.js';
import {navbarMobile}       from './components/navbar/navbarMobile.js';
import {footer}             from './components/footer/footer.js';
import {handleScroll}       from './logic/scrollLogic';
import {highlightNavItem}   from './logic/highlightNavItem';
import {cartContainer}      from './components/cart/cartContainer.js';
import {checkout}           from './components/cart/checkout.js';
import {updateCartQuantity} from './services/localStorage.js';


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
updateCartQuantity();