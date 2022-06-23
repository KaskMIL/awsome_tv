import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import retriveAllData from './module/dom-utils.js';
import setPopup from './modules/popUp_element.js';
import {displayComments} from './modules/data_interaction.js';

const main = document.querySelector('.main');

window.onload = () => retriveAllData();
setPopup(main);

displayComments(1)