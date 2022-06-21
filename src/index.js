import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getData } from './modules/dataTest.js';

const mainUrl = 'https://api.tvmaze.com/shows';

getData(mainUrl).then((data) => {
  data.forEach(element => {
    if(element.id == 3) {
      console.log(element.summary)
    }
  });
});