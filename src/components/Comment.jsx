import React,{ useState } from "react";
// import { TiPlusOutline } from "@react-icons/all-files/fa/FaBeer";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import CommentForm from "./CommentForm";

function Comment({ comment }) {
  const [show, setShow] = useState(false)
  const [replay, setReply] = useState(false)

  const clickPlus = () => { 
    setShow(()=>!show)
  }

  
    return (
      <div className="bodytag">
        <div className="comment-body">
          <h4>
            {comment.author} {comment.points} points{" "}
            {Number(new Date().getMinutes()) -
              Number(new Date(comment.timestamp).getMinutes())}
            minutes ago
          </h4>
          {comment.replies && (
            <span className="span" onClick={clickPlus}>
              {show ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
            </span>
          )}
          <div className="title">
            <h3>{comment.body}</h3>
          </div>
          <div className="comment-options">
            <ul>
              <li onClick={() => setReply(!replay)}>Reply</li>
              <li>Give Award</li>
              <li>Share</li>
              <li>Report</li>
              <li>Save</li>
            </ul>
            {replay && <CommentForm c={ comment}/>}
          </div>
        </div>
        {show &&
          comment.replies &&
          comment.replies.map((el) => {
            return (
              <div className="" key={el.id} style={{ marginLeft: "30px" }}>
                <Comment comment={el} />
              </div>
            );
          })}
      </div>
    );
}

export default Comment;
