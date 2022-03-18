import React,{ useState } from "react";

function Comment({ comment }) {
////   console.log(comment);
    const [show, setShow] = useState(false)
    
    const clickPlus = () => { 
        setShow(()=>!show)
    }
    return (
      <div >
        <div className="comment-body">
          <h4>
            {comment.author} {comment.points} points 23 minutes ago
          </h4>
          {comment.replies && <span className="span" onClick={clickPlus}>+</span>}
          <div className="title">
            <h3>{comment.body}</h3>
          </div>
          <div className="comment-options">
            <ul>
              <li>Reply</li>
              <li>Give Award</li>
              <li>Share</li>
              <li>Report</li>
              <li>Save</li>
            </ul>
          </div>
        </div>
        {show && comment.replies && comment.replies.map((el) => {
            return (
              <div key={el.id} style={{ marginLeft: "30px" }}>
                <Comment comment={el} />
              </div>
            );
          })}
      </div>
    );
}

export default Comment;
