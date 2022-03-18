import React, { useEffect, useState, useRef } from "react";
import { getComment } from "../Api/CommentsApi";
import Comment from './Comment';

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const comoponentMount = useRef(true);
////   console.log(comments);
  useEffect(async () => {
    setLoading(true);
    if (comoponentMount.current) {
      let a = await getComment();
      setComments(a);
    }
    setLoading(false);
    return () => {
      comoponentMount.current = false;
    };
  }, []);

    return (
      <div>
            {comments.length!=0 && comments.map(el => { 
                return <Comment key={el.id} comment={el} />
            })}
      </div>
    );
}

export default Comments;
