import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getData } from './modules/dataTest';

const mainUrl = 'https://api.tvmaze.com/shows';



getData(mainUrl).then((data) => {
  console.log(data.length)
})