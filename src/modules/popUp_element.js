import { getData, getComments } from './data_interaction.js';

const createPopUp = (id) => {
  // Declare and create elements
  const popSection = document.createElement('section');
  const crossIcon = document.createElement('i');
  const img = document.createElement('img');
  const showTitle = document.createElement('h2');
  const artDetails = document.createElement('article');
  const divGenre = document.createElement('div');
  const genreUl = document.createElement('ul');
  const divLang = document.createElement('div');
  const langUl = document.createElement('ul');
  const langLi = document.createElement('li');
  const artSummary = document.createElement('art');
  const artComments = document.createElement('article');
  const commentTitle = document.createElement('h3');
  const commentContainer = document.createElement('div');
  const nameComment = document.createElement('h4');
  const dateComment = document.createElement('h5');
  const commentUser = document.createElement('p');
  const artAddComment = document.createElement('article');
  const addTitle = document.createElement('h3');
  const form = document.createElement('form');
  const addInput = document.createElement('input');
  const addText = document.createElement('textarea');
  const addButton = document.createElement('button');

  // set classes, id's and attributes
  popSection.classList.add('pop-up');
  crossIcon.classList.add('fa-solid', 'fa-xmark', 'icon');
  img.setAttribute('alt', 'Tv-show image');
  artDetails.classList.add('details');
  divGenre.classList.add('genre');
  divLang.classList.add('languages');
  artSummary.classList.add('summary');
  artComments.classList.add('comments');
  commentContainer.classList.add('commentContainer');
  artAddComment.classList.add('addComment');
  addInput.setAttribute('id', 'userInput');
  addInput.setAttribute('type', 'text');
  addInput.setAttribute('placeholder', 'name');
  addText.setAttribute('id', 'commentInput');
  addText.setAttribute('name', 'comment');
  addText.setAttribute('placeholder', 'Leave a omment!');
  addButton.setAttribute('id', 'addBtn');

  // set data from API and common data
  commentTitle.innerHTML = 'Comments';
  addTitle.innerHTML = 'Comments';
  addButton.innerHTML = 'Submit';
  getData('https://api.tvmaze.com/shows').then((data) => {
    data.forEach((element) => {
      if (element.id === id) {
        img.setAttribute('src', `${element.image.medium}`);
        showTitle.innerHTML = `${element.name}`;
        artSummary.innerHTML = `${element.summary}`;
        langLi.innerHTML = `${element.language}`;
        element.genres.forEach((genre) => {
          const li = document.createElement('li');
          li.innerHTML = genre;
          genreUl.appendChild(li);
        });
      }
    });
  });
  getComments(id).then((data) => {
    data.forEach((comment) => {
      nameComment.innerHTML = `${comment.username}`;
      dateComment.innerHTML = `${comment.creation_date}`;
      commentUser.innerHTML = `${comment.comment}`;
    });
  });

  // Append elements
  popSection.appendChild(crossIcon);
  popSection.appendChild(img);
  popSection.appendChild(showTitle);
  divGenre.appendChild(genreUl);
  langUl.appendChild(langLi);
  divLang.appendChild(langUl);
  artDetails.appendChild(divGenre);
  artDetails.appendChild(divLang);
  commentContainer.appendChild(nameComment);
  commentContainer.appendChild(dateComment);
  commentContainer.appendChild(commentUser);
  artComments.appendChild(commentTitle);
  artComments.appendChild(commentContainer);
  form.appendChild(addInput);
  form.appendChild(addText);
  form.appendChild(addButton);
  artAddComment.appendChild(addTitle);
  artAddComment.appendChild(form);
  popSection.appendChild(artDetails);
  popSection.appendChild(artSummary);
  popSection.appendChild(artComments);
  popSection.appendChild(artAddComment);
  

  // Return pop-up node
  return popSection;
};

const clearPopup = () => {
  const popup = document.querySelector('.pop-up');
  popup.remove();
};

const getCord = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
  };
};

const setCord = (parentNode, node) => {
  const coord = getCord(parentNode);
  node.style.top = `${coord.top - 90}px`;
};

const setPopup = (node) => {
  node.addEventListener('click', (e) => {
    // Create pop-up
    if (e.target.nodeName === 'BUTTON') {
      const parentId = parseInt(e.target.parentNode.id, 10);
      const popUp = createPopUp(parentId);
      setCord(e.target.parentNode, popUp);
      node.appendChild(popUp);
    }
    // Delete pop-up
    if (e.target.classList.contains('icon') || e.target.nodeName === 'path') {
      clearPopup();
    }
  });
};

export default setPopup;