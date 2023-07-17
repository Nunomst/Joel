import './style/contactus.css';
import {navbarDesktop} from './components/navbar/navbarDesktop.js';
import {navbarMobile} from './components/navbar/navbarMobile.js';
import {footer} from './components/footer/footer.js';

import {handleScroll} from './logic/scrollLogic';
import {highlightNavItem} from './logic/highlightNavItem';


import { getPerson } from './logic/getPerson.js';
import { carousel } from './logic/carouselLogic.js';
import { carouselHTML } from './components/contactus/carousel.js';
import { info } from './components/contactus/info.js';
import { staff } from './components/contactus/staff.js';

let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(carouselHTML());
appDiv.appendChild(info());
appDiv.appendChild(staff());
appDiv.appendChild(footer());


handleScroll();
highlightNavItem();
carousel();
getPerson();

