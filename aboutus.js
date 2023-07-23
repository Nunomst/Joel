import './style/navbar.css';


import { updateCartQuantity } from './services/localStorage.js';
import { navbarDesktop } from './components/navbar/navbarDesktop';
import { navbarMobile } from './components/navbar/navbarMobile';
import {gallery} from './components/aboutus/gallery';
import {aboutus} from './components/aboutus/aboutusContent';
import {footer} from './components/footer/footer';
import {handleScroll} from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';



let appDiv = document.getElementById('app');


window.addEventListener('load', () => {
    appDiv.appendChild(navbarDesktop());
    appDiv.appendChild(navbarMobile());
    appDiv.appendChild(gallery());
    appDiv.appendChild(aboutus());
    appDiv.appendChild(footer());
    handleScroll();
    highlightNavItem();
    updateCartQuantity();
});

