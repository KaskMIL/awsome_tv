import {
  setComment,
  getComments
} from './data_interaction.js';
import {
  getData
} from './api-util.js';


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
  const artSummary = document.createElement('article');
  const artComments = document.createElement('article');
  const commentTitle = document.createElement('h3');
  const artAddComment = document.createElement('article');
  const addTitle = document.createElement('h3');
  const form = document.createElement('form');
  const addInput = document.createElement('input');
  const addText = document.createElement('textarea');
  const addButton = document.createElement('button');

  // set classes, id's and attributes
  popSection.classList.add('pop-up');
  popSection.setAttribute('id', `${id}`)
  crossIcon.classList.add('fa-solid', 'fa-xmark', 'icon');
  img.setAttribute('alt', 'Tv-show image');
  artDetails.classList.add('details');
  divGenre.classList.add('genre');
  divLang.classList.add('languages');
  artSummary.classList.add('summary');
  artComments.classList.add('comments');
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
  addTitle.innerHTML = 'Add a comment!';
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
    if(data.error){
      artComments.appendChild(commentTitle);
    } else {
      artComments.appendChild(commentTitle);
      data.forEach((comment) => {
        const element = createComment(comment.username, comment.creation_date, comment.comment);
        artComments.appendChild(element);
      }) 
    }
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

const createComment = (user, date, message) => {
  // Article variables
  const commentContainer = document.createElement('div');
  const nameComment = document.createElement('h4');
  const dateComment = document.createElement('h5');
  const commentUser = document.createElement('p');
  // Variables clsses
  commentContainer.classList.add('commentContainer');
  // Set content
  nameComment.innerHTML = `${user}`;
  dateComment.innerHTML = `${date}`;
  commentUser.innerHTML = `${message}`;
  // Create element
  commentContainer.appendChild(nameComment);
  commentContainer.appendChild(dateComment);
  commentContainer.appendChild(commentUser);
  return commentContainer;
}

const clearPopup = () => {
  const popup = document.querySelector('.pop-up');
  popup.remove();
};

const updateComments = (id, nodeContainer) => {
  getComments(id).then((data) => {
    data.forEach((comment) => {
      const element = createComment(comment.username, comment.creation_date, comment.comment);
      nodeContainer.appendChild(element);
    })
  })
}

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

const setPopup = async (node) => {
  node.addEventListener('click', (e) => {
    e.preventDefault()
    const parentId = parseInt(e.target.parentNode.id, 10);
    // Create pop-up
    if (e.target.nodeName === 'BUTTON' && e.target.classList.contains('comment-btn')) {
      const popUp = createPopUp(parentId);
      setCord(e.target.parentNode, popUp);
      node.appendChild(popUp);
    }
    // Delete pop-up
    if (e.target.classList.contains('icon') || e.target.nodeName === 'path') {
      clearPopup();
    }
    // Set new comment
    if (e.target.id === 'addBtn') {
      const parentid = e.target.parentNode.parentNode.parentNode.id;
      const userName = document.getElementById('userInput');
      const userComment = document.getElementById('commentInput');
      const commentContainer = document.querySelector('.comments');
      const comments = document.querySelectorAll('.commentContainer');
      if (userName.value && userComment.value) {
        setComment(parentid, userName.value, userComment.value).then(() => {
          comments.forEach(element => {
          element.remove()
        });
        updateComments(parentid, commentContainer)
        })
        
      }
      userName.value = '';
      userComment.value = '';
    }
  });
};

export default setPopup;