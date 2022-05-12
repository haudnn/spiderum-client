import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./comment.scss";
import axios from "axios";
const Comment = ({ comment }) => {
  const [voteCount, setVoteCount] = useState(null);
  const [newReply, setNewReply] = useState(null);
  const [reply, setReply] = useState({});
  const [replies, setReplies] = useState([]);
  const [activeReply, setActiveReply] = useState(false);
  const [voteCountUpdate, setVoteCountUpdate] = useState([]);
  let date = new Date(comment.createdAt);
  const handleVote = useCallback(
    async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const option = {
        method: "post",
        url: `/api/v1/comment/vote/`,
        data: {
          commentId: comment._id,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios(option);
      setVoteCountUpdate(res.data.data.voteCount);
    },
    [comment._id]
  );
  const getAllComments = useCallback(async () => {
    if (comment._id) {
      try {
        const option = {
          method: "get",
          url: `/api/v1/reply/${comment._id}`,
        };
        const res = await axios(option);
        setReplies(res.data.data.reply);
      } catch (err) {}
    }
  }, [comment._id]);
  useEffect(() => {
    getAllComments();
    if (newReply) {
      getAllComments();
    }
  }, [getAllComments, newReply]);
  useEffect(() => {
    if (voteCountUpdate) {
      setVoteCount(voteCountUpdate.length);
    }
  }, [voteCountUpdate]);
  useEffect(() => {
    if (comment.voteCount) {
      setVoteCount(comment.voteCount.length);
    }
  }, [comment.voteCount]);
  const handelVisible = () => setActiveReply(!activeReply);
  const handleSumit = useCallback((e) => {
    e.preventDefault();
  }, []);
  const handleSubmitReply = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const option = {
          method: "post",
          url: `/api/v1/reply/${comment._id}`,
          data: reply,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const res = await axios(option);
        setNewReply(res.data.data.reply);
        setActiveReply(false)
        setReply({})
      } catch (err) {}
    },
    [comment._id, reply]
  );
  return (
    <div className="comment__child">
      <div className="comment__child-avt">
        <Link to={`/user/${comment.author.userName}`}>
          <img
            src={
              comment.author.avatar
                ? comment.author.avatar
                : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"
            }
            alt=""
          />
        </Link>
      </div>
      <div className="comment__child-body">
        <div className="creator-info">
          <Link to={`/user/${comment.author.userName}`}>
            <span className="name-main">
              {comment.author.displayName
                ? comment.author.displayName
                : comment.author.userName}
            </span>
          </Link>
          <div className="metadata">
            <span className="date">{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</span>
          </div>
          <div className="comment__child-content">{comment.content}</div>
          <div className="comment__child-actions">
            <div className="vote">
              <div className="upvote" onClick={handleVote}>
                <div className="vote-icon">
                  <i class="bx bxs-up-arrow"></i>
                </div>
              </div>
              <div></div>
              <span className="value">{voteCount}</span>
            </div>
            <p onClick={handelVisible}>Trả lời</p>
          </div>
        </div>
      </div>
      {activeReply ? (
        <div className="action-reply">
          <div className="reply-comment">
            <div className="reply-comment-form">
              <form action="" className="comment__form" onSubmit={handleSumit}>
                <input
                  className="comment__form-data"
                  placeholder="Cảm nghĩ của bạn về comment này"
                  value={reply.content}
                  onChange={(e) =>
                    setReply({ ...reply, content: e.target.value })
                  }
                ></input>
                <div
                  className="comment__form-actions"
                  onClick={handleSubmitReply}
                >
                  <div className="comment__form-actions-submit">Trả lời</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="comments-reply">
        {replies.map((reply) => (
          <div className="comment-node">
            <div className="comment__child-avt">
              <Link to={`/user/${reply.author.userName}`}>
                <img
                  src={
                    reply.author.avatar
                      ? reply.author.avatar
                      : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="comment__child-body">
              <div className="creator-info">
                <Link to={`/user/${reply.author.userName}`}>
                  <span className="name-main">
                    {reply.author.displayName
                      ? reply.author.displayName
                      : reply.author.userName}
                  </span>
                </Link>
                <div className="metadata">
                  <span className="date">{`${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`}</span>
                </div>
                <div className="comment__child-content">{reply.content}</div>
                <div className="comment__child-actions">
                  <div className="vote">
                    <div className="upvote" onClick={handleVote}>
                      <div className="vote-icon">
                        <i class="bx bxs-up-arrow"></i>
                      </div>
                    </div>
                    <div></div>
                    <span className="value">{voteCount}</span>
                  </div>
                  <p onClick={handelVisible}>Trả lời</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;