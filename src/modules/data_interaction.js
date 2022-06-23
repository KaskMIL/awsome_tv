const appId = 'zX9lc5HNiZeTfJrwouGw';

// Geting data
const getData = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

// Function to set comment
const setComment = async (itemId, userName, userComment) => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zX9lc5HNiZeTfJrwouGw/comments/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: `${userName}`,
      comment: `${userComment}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await result.text();
  return response;
};

// Function to get comment
const getComments = async (itemId) => {
  try {
    let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zX9lc5HNiZeTfJrwouGw/comments?item_id=${itemId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let result = await response.json();
    return await result;
  } catch (error) {
    console.error(error.json());
  };
};

export {
  getData,
  setComment,
  getComments
};