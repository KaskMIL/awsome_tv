import { getData } from './data_interaction.js'

const createPopUp = (id) => {

  // Declare and create elements
  const popSection = document.createElement('section');
  const crossIcon = document.createElement('i');
  const img = document.createElement('img');
  const showTitle = document.createElement('h2');
  const artDetails = document.createElement('article');
  const divGenre = document.createElement('div');
  const genreTitle = document.createElement('h3');
  const genreUl = document.createElement('ul');
  const divLang = document.createElement('div');
  const langTitle = document.createElement('h3');
  const langUl = document.createElement('ul');
  const langLi = document.createElement('li');
  const artSummary = document.createElement('art');
  
  // set classes, id's and attributes
  popSection.classList.add('pop-up');
  crossIcon.classList.add('fa-solid', 'fa-xmark', 'icon');
  img.setAttribute('alt', 'Tv-show image');
  artDetails.classList.add('details');
  divGenre.classList.add('genre');
  divLang.classList.add('languages');
  artSummary.classList.add('summary');

  // set data from API and common data
  genreTitle.innerHTML = 'Genres:';
  langTitle.innerHTML = 'Languages:';
  getData(`https://api.tvmaze.com/shows`).then((data) => {
    data.forEach(element => {
      if(element.id === id) {
        img.setAttribute('src', `${element.image.medium}`);
        showTitle.innerHTML = `${element.name}`;
        artSummary.innerHTML = `${element.summary}`;
        langLi.innerHTML = `${element.language}`;
        element.genres.forEach(genre => {
          const li = document.createElement('li');
          li.innerHTML = genre;
          genreUl.appendChild(li);
        })
      }
    });
  });

  // Append elements
  popSection.appendChild(crossIcon);
  popSection.appendChild(img);
  popSection.appendChild(showTitle);
  divGenre.appendChild(genreTitle);
  divGenre.appendChild(genreUl);
  divLang.appendChild(langTitle);
  langUl.appendChild(langLi);
  divLang.appendChild(langUl);
  artDetails.appendChild(divGenre);
  artDetails.appendChild(divLang);
  popSection.appendChild(artDetails);
  popSection.appendChild(artSummary);

  // Return pop-up node
  return popSection;

}

const clearPopup = () => {
  const popup = document.querySelector('.pop-up');
  popup.remove();
}

export { createPopUp, clearPopup };