import { API_URL, tvWrapper } from './constant.js';
import getData from './api-util.js';

const displayAllData = (data) => {
  data.forEach((element) => {
    tvWrapper.innerHTML += `
         <div class="card" id=${element.id}> 
           
           <img src=${element.image.medium} alt ="best" class="image"/>
           <div class="show-info">
            <p class="show-name"> ${element.name}</p>
            <div class="like">
            <i class="fa fa-heart heart" aria-hidden="true"></i>
            <div class="likes-num">
               <span> ${data.length}</span> likes
            </div>
            </div>
           </div>
         </div>
         `;
  });
};

const retriveAllData = () => new Promise((resolve) => {
  getData(API_URL).then((res) => {
    displayAllData(res);
    resolve();
  });
});

export default retriveAllData;
