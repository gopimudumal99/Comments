import React from 'react'
import { createComment } from '../Api/CommentsApi';
import { useState } from 'react';
import Comment from "./Comment";
function CommentForm({ c }) {
    const [text, setText] = useState("")

  const submitClick = (e) => {
     e.preventDefault();
      let d = new Date()
      let a = createComment(text, d, c);
      if (c.replies == undefined) {
          c.replies = []
          c.replies.push(a)
      } else { 
          c.replies.push(a)
      }

    //   console.log(a)
    {c.replies.map((el) => {
        return (
          <div className="" key={el.id} style={{ marginLeft: "30px" }}>
            <Comment comment={el} />
          </div>
        );
      });
      }
    };
    

  return (
    <div>
      <form action="" onSubmit={(e) => submitClick(e)}>
        <input type="text" onChange={(e)=>setText(e.target.value)}  />
        <button type="submit">done</button>
      </form>
    </div>
  );
}

export default CommentForm