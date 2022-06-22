import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import retriveAllData from './module/dom-utils.js';
import { createPopUp, clearPopup } from './modules/popUp_element.js';

const main = document.querySelector('.main');

window.onload = () => retriveAllData();

// Event to create and delete pop-up
main.addEventListener('click', (e) => {
  // Create pop-up
  if (e.target.nodeName === 'BUTTON'){
    const parentId = parseInt(e.target.parentNode.id);
    main.appendChild(createPopUp(parentId));
  }
  // Delete pop-up
  if (e.target.classList.contains('icon') || e.target.nodeName === 'path'){
    clearPopup();
  }
})
