import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { retriveAllData } from './modules/dom-utils.js';
import setPopup from './modules/popUp_element.js';

const main = document.querySelector('.main');

window.onload = () => retriveAllData();
setPopup(main);