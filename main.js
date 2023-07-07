import { getPerson } from './logic/getPerson.js';
import { carousel } from './logic/carousel.js';
import { carouselHTML } from './components/carousel/carouselHTML.js';
import { info } from './components/info/info.js';
import { staff } from './components/staff/staff.js';

let appDiv = document.getElementById('app');

appDiv.appendChild(carouselHTML());
appDiv.appendChild(info());
appDiv.appendChild(staff());

carousel();
getPerson();