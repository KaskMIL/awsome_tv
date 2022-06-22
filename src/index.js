import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getData, setLike, getLikes, setComment, getComments, displayComments } from './modules/data_interaction.js';
import { createPopUp } from './modules/popUp_element.js';

const mainUrl = 'https://api.tvmaze.com/shows/1';

const appId = 'YdXgSyeK6d2I6qrCBe1g/';

const genrecont = document.getElementById('genreContainer');
const sumContainer = document.querySelector('.summary');
const main = document.querySelector('.main');

main.appendChild(createPopUp(5))


