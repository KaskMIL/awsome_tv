const getData = (url) => fetch(url).then((res) => res.json());

const postData = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data),
});

export { getData, postData };