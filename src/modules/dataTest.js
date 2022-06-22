// Geting data
const getData = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const setLike = async (url,id) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({item_id: id})
  });
  const response = await result.json();
  return response;
}

export { getData, setLike };