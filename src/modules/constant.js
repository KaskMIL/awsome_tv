const API_URL = 'https://api.tvmaze.com/shows';

const APP_ID = 'zX9lc5HNiZeTfJrwouGw';

const INV_LIKE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;
const tvWrapper = document.getElementById('tv-container');

const INV_COMMENT_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;

export {
  tvWrapper, API_URL, INV_LIKE_URL, INV_COMMENT_URL,
};