// Geting data
const getData = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const setLike = async(itemId) => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await result.json();
  return response;
}

const setComment = async(itemId, userName, userComment) => {
  const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments/', {
    method:'POST',
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
}

const getComments = async(itemId) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lgCIHcqWzTyEZ0MPUBMA/comments?item_id=${itemId}`, {
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

export { getData, setLike, getLikes, setComment, getComments };