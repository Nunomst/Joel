import './style/style.css';
import {navbarDesktop} from './components/navbars/NavbarDesktop.js';
import {navbarMobile} from './components/navbars/NavbarMobile.js';
import { handleScroll } from './logic/navbar/scrollLogic';
import {highlightNavItem} from './logic/navbar/highlightNavItem';


let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());




handleScroll();
highlightNavItem();


