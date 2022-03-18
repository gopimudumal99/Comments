//!: this is a comment api 

export const getComment = (async() => {
  return [
    {
      id: "001",
      author: "albert",
      body: "Whats the status?",
      timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
      points: "2",
      replies: [
        {
          id: "003",
          author: "haren",
          body: "Wrote the test suites, waiting for approval?",
          timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
          points: "3",
          replies: [
            {
              id: "004",
              author: "albert",
              body: "Thanks for the update!",
              timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
              points: "8",
            },
          ],
        },
        {
          id: "002",
          author: "Nrupul",
          body: "looking forward for the demo!",
          timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
          points: "2",
        },
      ],
    },
  ];
});

export const createComment = (text,time,el) => { 
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    author: el.author,
    timestamp: time,
    points:Math.floor(Math.random()*20)
  };
}