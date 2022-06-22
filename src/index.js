import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getData, setLike } from './modules/dataTest.js';

const mainUrl = 'https://api.tvmaze.com/shows';
const appUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/lgCIHcqWzTyEZ0MPUBMA/likes/';
const endPoints = ['apps/','likes/','comments/'];

const appId = 'YdXgSyeK6d2I6qrCBe1g/';

const like = async() => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: "1"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await result.json();
  return response;
}

const comments = async() => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments/', {
    method:'POST',
    body: JSON.stringify({
      item_id: '1',
      username: 'tomi',
      comment: 'commentarioskldasd',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await result.json();
  return response;
}

const getComments = async() => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments?item_id=1', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const response = result.json();
    return response;
}

const getLikes = async() => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/likes/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await result.json();
  return response;
}

//like()
console.log(getLikes());
console.log(getComments())