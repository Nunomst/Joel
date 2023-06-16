import './style/style.css';
import {navbarDesktop} from './components/navbars/NavbarDesktop.js';
import {navbarMobile} from './components/navbars/NavbarMobile.js';


let appDiv = document.getElementById('app');

appDiv.appendChild(navbarDesktop());
appDiv.appendChild(navbarMobile());

// navbar change upon scroll 
let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
       navbar.classList.add('icon');
    } else {
      navbar.classList.remove('icon');
    }
    lastScrollTop = scrollTop;
})

//hihglights the navbar selected item on click
function highlightNavItem(item){
  const buttons = document.querySelectorAll('ion-icon');
  buttons.forEach(function(obj){
      obj.classList.remove("active");
  });
  item.classList.add("active");
}