// Function
const setComment = async (itemId, userName, userComment) => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments/', {
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
  const response = await result.json();
  return response;
};

const getComments = async (itemId) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments?item_id=${itemId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result.json();
};

const displayComments = (itemId) => {
  const data = getComments(itemId);
  data.then((element) => {
    element.forEach((info) => info);
  });
};

export {
  setComment, getComments, displayComments,
};