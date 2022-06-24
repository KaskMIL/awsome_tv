const showList = () => {
  const shows = [
    {
      id: 1,
      name: 'Homeland',
      image: ' HOme land url',
      likes: 0,

    },
    {
      id: 2,
      name: 'Glee',
      image: ' Glee thumbnail url',
      likes: 0,

    },
    {
      id: 3,
      name: 'Revenge',
      image: ' Revenge url',
      likes: 10,

    },
    {
      id: 4,
      name: 'Grimm',
      image: ' Grimm url',
      likes: 5,

    },
    {
      id: 5,
      name: 'Gotham',
      image: ' Gotham url',
      likes: 0,

    },
    {
      id: 6,
      name: 'Lost Girl',
      image: ' Lost Girl url',
      likes: 20,

    },
    {
      id: 7,
      name: 'The Flash',
      image: 'The Flash url',
      likes: 0,

    },
    {
      id: 8,
      name: 'Continuum',
      image: ' HOme land url',
      likes: 0,

    },
    {
      id: 9,
      name: 'Constantine',
      image: ' HOme land url',
      likes: 0,

    },
    {
      id: 10,
      name: 'Penny Dreadful',
      image: ' HOme land url',
      likes: 0,

    },

  ];

  return shows;
};

const getShowById = (id) => {
  const show = showList().find((sh) => sh.id === id);
  return show;
};

const getShowLikes = (id) => {
  const show = showList().find((sh) => sh.id === id);

  return show.likes;
};

const getShowCount = () => {
  const showsCount = showList().length;
  return showsCount;
};

const addLike = (id) => {
  const shows = showList();
  const show = shows.find((sh) => sh.id === id);
  show.likes += 1;
  shows.forEach((sh, i) => {
    if (sh.id === show.id) {
      shows[i] = show;
    }
  });
  return show.likes;
};

export {
  showList, getShowById, getShowCount, getShowLikes, addLike,
};