import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import {gallery} from './components/gallery/gallery.js';
import {aboutus} from './components/aboutus/aboutus.js';
import {footer} from './components/footer/footer.js';
import {handleScroll} from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';

let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(gallery());
appDiv.appendChild(aboutus());
appDiv.appendChild(footer());

handleScroll();
highlightNavItem();
