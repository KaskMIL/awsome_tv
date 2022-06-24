import { INV_COMMENT_URL } from './constant.js';
import { postData } from './api-util.js';

// Function to set comment
const setComment = async (itemId, userName, userComment) => {
  const comment = { item_id: itemId, username: `${userName}`, comment: `${userComment}` };
  await postData(INV_COMMENT_URL, comment);
};

// Function to get comment
const getComments = async (itemId) => {
  const response = await fetch(`${INV_COMMENT_URL}?item_id=${itemId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result;
};

export {
  setComment,
  getComments,
};