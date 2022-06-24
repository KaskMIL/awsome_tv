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

const comments = [
  {
    id: 1,
    comments: [
      {
        comment: 'Something to say', name: 'Tom',
      },
      {
        comment: 'Another thing to say', name: 'Worash',
      },
      {
        comment: 'Fabulous!', name: 'Mary',
      },
    ],
  },
  {
    id: 2,
    comments: [
      {
        comment: 'Something to say', name: 'Tom',
      },
    ],
  },
  {
    id: 3,
    comments: [],
  },
];

const getComments = (id, arrComment) => {
  for (let i = 0; i < arrComment.length; i += 1) {
    if (arrComment[i].id === id) {
      return arrComment[i];
    }
  }
  return 0;
};

const commentsCount = (id, arrComment) => {
  const comm = getComments(id, arrComment);
  return comm.comments.length;
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
  showList, getShowById, getShowCount, getShowLikes, addLike, commentsCount, comments,
};