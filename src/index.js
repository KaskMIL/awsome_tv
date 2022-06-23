import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import retriveAllData from './modules/dom-utils.js';
import setPopup from './modules/popUp_element.js';
import { getData, getComments, setComment } from './modules/data_interaction.js';

const main = document.querySelector('.main');

window.onload = () => retriveAllData();
setPopup(main);

//console.log(setComment(1, 'Tom', 'fantastic!'));
console.log(getComments(1))