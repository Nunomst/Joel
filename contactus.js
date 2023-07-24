import './style/contactus.css';
import {navbarDesktop}          from './components/navbar/navbarDesktop.js';
import {navbarMobile}           from './components/navbar/navbarMobile.js';
import {footer}                 from './components/footer/footer.js';
import {handleScroll}           from './logic/scrollLogic';
import {highlightNavItem}       from './logic/highlightNavItem';
import { updateCartQuantity }   from './services/localStorage.js';
import { getPerson }            from './services/getPerson.js';
import { carousel }             from './logic/carouselLogic.js';
import { carouselHTML }         from './components/contactus/carousel.js';
import { info }                 from './components/contactus/info.js';
import { staff }                from './components/contactus/staff.js';
import { staffIntro }           from './components/contactus/staff.js';


let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());
appDiv.appendChild(carouselHTML());
appDiv.appendChild(info());
appDiv.appendChild(staffIntro());
appDiv.appendChild(footer());

const personInfo = await getPerson();

const staffDiv = appDiv.querySelector(".staff-container");

for(let i= 0; i < 2; i++)
{
    const person = personInfo[i];
    staffDiv.appendChild(staff(person.picture, person.firstName, person.lastName));
}

handleScroll();
highlightNavItem();
carousel();
getPerson();
updateCartQuantity();