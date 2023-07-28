import React from "react";

const CommentsData = [
  {
    name: "yogesh",
    comment: "lorem epusm hello yhogesh",
    replies: [
      {
        name: "yogesh",
        comment: "lorem epusm hello yhogesh",
        replies: [],
      },
      {
        name: "yogesh",
        comment: "lorem epusm hello yhogesh",
        replies: [],
      },
      {
        name: "yogesh",
        comment: "lorem epusm hello yhogesh",
        replies: [
          {
            name: "yogesh",
            comment: "lorem epusm hello yhogesh",
            replies: [
              {
                name: "yogesh",
                comment: "lorem epusm hello yhogesh",
                replies: [],
              },
              {
                name: "yogesh",
                comment: "lorem epusm hello yhogesh",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "yogesh",
        comment: "lorem epusm hello yhogesh",
        replies: [],
      },
    ],
  },
  {
    name: "yogesh",
    comment: "lorem epusm hello yhogesh",
    replies: [],
  },
  {
    name: "yogesh",
    comment: "lorem epusm hello yhogesh",
    replies: [],
  },
  {
    name: "yogesh",
    comment: "lorem epusm hello yhogesh",
    replies: [],
  },
  {
    name: "yogesh",
    comment: "lorem epusm hello yhogesh",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-200 p-2 rounded-lg my-2">
      <img
        alt="user-image"
        className="w-10 h-10"
        src="https://img.freepik.com/free-icon/black-male-user-symbol_318-60703.jpg"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <>
            <div>
              <Comment key={index} data={comment} />
            </div >
            <div key={index} className="pl-5 border border-l-black ml-5">
             <CommentsList comments={comment.replies}/>
            </div>
          </>
        );
      })}
    </div>
  );
};

const CommentsContainor = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainor;
