import { API_URL, tvWrapper, INV_LIKE_URL } from './constant.js';
import { getData, postData } from './api-util.js';
import setPopup from './popUp_element.js';

export const countShows = () => {
  const counterSpan = document.getElementById('show-counter');
  getData(API_URL).then((res) => {
    counterSpan.textContent = `(${res.length})`;
  });
};

export const displayAllData = (shows) => {
  shows.forEach((show) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id = show.id;
    const showImg = document.createElement('img');
    showImg.src = show.image.original;
    showImg.alt = 'show image';
    showImg.className = 'image';
    cardDiv.appendChild(showImg);

    const showInfDiv = document.createElement('div');
    showInfDiv.className = 'show-info';
    cardDiv.appendChild(showInfDiv);
    const showName = document.createElement('p');

    showName.className = 'show-name';
    showName.textContent = show.name;

    showInfDiv.appendChild(showName);
    const likeDiv = document.createElement('div');
    likeDiv.className = 'like';

    const likeP = document.createElement('p');
    likeP.className = 'heart';
    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa', 'fa-heart');
    likeP.appendChild(likeIcon);
    likeP.addEventListener('click', (e) => {
      e.target.classList.toggle('active');

      const value = e.target.parentElement.parentElement.nextSibling.textContent;
      e.target.parentElement.parentElement.nextSibling.textContent = parseInt(value, 10) + 1;
      postData(INV_LIKE_URL, { item_id: show.id });
    });
    likeDiv.appendChild(likeP);

    const liketext = document.createElement('p');
    liketext.className = 'likes-num';

    getData(INV_LIKE_URL).then((res) => {
      const likes = res.filter((item) => item.item_id === show.id);
      liketext.textContent = likes.length > 0 ? likes[0].likes : 0;
    });

    likeDiv.appendChild(liketext);

    showInfDiv.appendChild(likeDiv);
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment-btn';
    commentBtn.textContent = 'Comments';
    commentBtn.setAttribute('type', 'button');
    commentBtn.addEventListener('click', () => {
      setPopup(commentBtn);
    });
    cardDiv.appendChild(commentBtn);
    tvWrapper.appendChild(cardDiv);
  });
};

export const retriveAllData = () => new Promise((resolve) => {
  getData(API_URL).then((res) => {
    displayAllData(res);
    resolve();
  });
});
