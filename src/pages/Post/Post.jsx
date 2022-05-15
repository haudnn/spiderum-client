import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate,useSearchParams } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import "./post.scss";
import axios from "axios";
import { Config } from "./tools";
import { userState$, postState$ } from "../../redux/selectors";
import { useSelector } from "react-redux";
import Comment from "../../components/Comment/Comment";
const Post = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const notiId = searchParams.get('notiId')
  const post = useSelector(postState$);
  const inputCmtRef = useRef(null)
  const toast = useRef(null);
  const [voteCount, setVoteCount] = useState(null);
  const [voteCountUpdate, setVoteCountUpdate] = useState([]);
  const [isSuccess, setIsSuccess] = useState(null);
  const currentUser = useSelector(userState$);
  const location = useLocation();
  const [isUser, setIsUser] = useState(false);
  const [visiable, setVisiable] = useState(false);
  const [dataPost, setDataPost] = useState({});
  const [categoryPost, setCategoryPost] = useState({});
  const [authPost, setAuthPost] = useState({});
  const [content, setContent] = useState("");
  const [active, setActive] = useState();
  const [activeCate, setActiveCate] = useState(false);
  const [response, setResponse] = useState(null);
  const [dataComment, setDataComment] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  useEffect(() => {
    if (post.post) {
      if (post.post.data) {
        setIsSuccess(post.post.data.status);
      }
    }
  }, [post]);
  const path = location.pathname.split("/")[2];
  const handleVote = useCallback(
    async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const option = {
        method: "post",
        url: `/api/v1/posts/vote`,
        data: {
          "postId" : dataPost._id,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }; 
      const res = await axios(option);
      setVoteCountUpdate(res.data.data.voteCount)
    },
    [dataPost._id]
  );
  useEffect(() => {
    if(voteCountUpdate){
      setVoteCount(voteCountUpdate.length)
    }
  },[voteCountUpdate])
  const getPost = useCallback(async () => {
    const res = await axios.get(`/api/v1/posts/${path}`);
    setDataPost(res.data.post);
    setAuthPost(res.data.post.author);
    setCategoryPost(res.data.post.category);
  }, [path]);
  useEffect(() => {
    if(dataPost.voteCount) {
      setVoteCount(dataPost.voteCount.length)
    }
  },[dataPost.voteCount])
  useEffect(() => {
    getPost();
  }, [getPost]);
  useEffect(() => {
    if (dataPost.content) {
      dataPost.content.map((e) => setContent(e));
    }
  }, [dataPost]);
  useEffect(() => {
    if (content) {
      const editor = new EditorJS({
        holder: "editorjs",
        readOnly: true,
        tools: Config,
        data: content,
      });
    }
  }, [dataPost, content]);
  useEffect(() => {
    if (currentUser.currentUser) {
      if (authPost._id === currentUser.currentUser._id) {
        setIsUser(true);
      }
    }
  }, [authPost, currentUser]);
  const handleClickDelete = () => setVisiable(!visiable);
  const handleDelete = useCallback(
    async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const option = {
        method: "delete",
        url: `/api/v1/posts/${dataPost._id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios(option);
      setResponse(res.data);
    },
    [dataPost._id]
  );
  useEffect(() => {
    if (response) {
      if (response.message) {
        window.location.href = "http://localhost:3000/";
      }
    }
  }, [navigate, response]);
  const handleUnFlow = useCallback(
    async (e) => {
      const token = localStorage.getItem("token");
      try {
        e.preventDefault();
        const option = {
          method: "put",
          url: `/api/v1/auth/update/unfollower/`,
          data:[authPost._id],
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        await axios(option);
        setActive(false)
      } catch (err) {}
    },
    [authPost._id]
  );
  const handleFlow = useCallback(
    async (e) => {
      const token = localStorage.getItem("token");
      try {
        e.preventDefault();
        const option = {
          method: "put",
          url: `/api/v1/auth/update/follower/`,
          data: [authPost._id],
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        await axios(option);
        setActive(true)
      } catch (err) {}
    },
    [authPost._id]
  );
  const handleFlowCategory = useCallback(
    async (e) => {
      const token = localStorage.getItem("token");
      try {
        e.preventDefault();
        const option = {
          method: "put",
          url: `/api/v1/auth/create/category`,
          data:[categoryPost._id],
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        await axios(option);
        setActiveCate(true)
      } catch (err) {}
    },
    [categoryPost._id]
  );
  const handleUnFlowCategory = useCallback(
    async (e) => {
      const token = localStorage.getItem("token");
      try {
        e.preventDefault();
        const option = {
          method: "put",
          url: `/api/v1/auth/delete/category`,
          data:[categoryPost._id],
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        await axios(option);
        setActiveCate(false)
      } catch (err) {}
    },
    [categoryPost._id]
  );
  const handleSubmitComment = useCallback( async(e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try{
      const option = {
        method: "post",
        url: `/api/v1/comment/create`,
        data:{
          content : dataComment.content,
          "postId" : dataPost._id
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const res = await axios(option);
      setNewComment(res.data.data)
      setDataComment({content:""})
    }
    catch(err){}
  },[dataComment,dataPost])
  const getAllComments = useCallback( async() => {
    if(dataPost._id){
      try{
        const option = {
          method: "get",
          url: `/api/v1/comment/${dataPost._id}`,
        };
        const res = await axios(option);
        setComments(res.data.data.comments)
      }
      catch(err){
        
      }
    }
  },[dataPost._id])
  useEffect(() => {
    getAllComments()
    if(newComment) {
      getAllComments()
    }
  },[getAllComments,newComment])
  useEffect(() => {
    if(currentUser.currentUser){
      if(currentUser.currentUser.following.includes(authPost._id)){
        setActive(true)
      }
      else{
        setActive(false)
      }
    }
  },[authPost,currentUser])
  useEffect(() => {
    if(currentUser.currentUser){
      if(currentUser.currentUser.category.find((e) => e._id === categoryPost._id)){
          setActiveCate(true)
      }
      else{
          setActiveCate(false)
      }
    }
  },[categoryPost,currentUser])
  const updateView = useCallback(async (e) => {
    if(dataPost._id) {
      const token = localStorage.getItem("token");
      const option = {
        method: "post",
        url: `/api/v1/posts/views`,
        data: {
          "postId" : dataPost._id,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }; 
      await axios(option);
    }
    },[dataPost._id]);
  useEffect(() => {
    updateView()
  },[updateView])
  const updateNoti = useCallback(async (e) => {
    if(notiId) {
      const token = localStorage.getItem("token");
      const option = {
        method: "put",
        url: `/api/v1/notifications/read`,
        data: {
          "notificationID" :notiId,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }; 
      await axios(option);
    }
    },[notiId]);
  useEffect(() => {
    updateNoti()
  },[updateNoti])
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.current.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    return () => clearTimeout(timer);
  }, [isSuccess]);
  useEffect(() => {
     if(dataPost){
      document.title = dataPost.title
     }
  }, [dataPost]);
  return (
    <div className="mt-80">
      <div className="post__details-container">
        {isSuccess ? (
          <div class="toast-mess-container">
            <button  ref={toast} class={`alert-toast-message success`}>{isSuccess}</button>
          </div>
        ) : (
          ""
        )}
        <div className="post__details-auth">
          <div className="post__details-category">
            <Link to={`/category/${categoryPost.slug}`}>
              <span className="post__details-category-name">
                {categoryPost.name}
              </span>
            </Link>
          </div>
          <div className="post__details-title">
            <h1>{dataPost.title}</h1>
          </div>
          <div className="post__details-desc">
            <p>{dataPost.description}</p>
          </div>
          <div className="post__details mt-20 flex-box">
            <div className="flex-align-gap-10">
              <div className="post-avt-div">
                <Link to={`/user/${authPost.userName}`}>
                  <img
                    src={
                      authPost.avatar
                        ? authPost.avatar
                        : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link to={`/user/${authPost.userName}`}>
                  <p className="post-username">
                    {authPost.displayName
                      ? authPost.displayName
                      : authPost.userName}
                  </p>
                </Link>
              </div>
            </div>
            {isUser ? (
              <div className="flex-align-gap-10">
                <Link to={`/post/update/${path}`}>
                  <span className="button-data edit">Sửa</span>
                </Link>
                <button className="btn-delete" onClick={handleClickDelete}>
                  <span className="button-data delete">Xóa</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="post__details-content">
          <div className="post__details-content-container">
            <div id="editorjs" />
          </div>
          <div className="sticky-bar"></div>
        </div>
        <div className="post__tool-bar">
          <div className="pull-left">
            <div className="vote">
              <div className="upvote" onClick={handleVote}>
                <div className={`vote-icon`} >
                  <i class='bx bxs-up-arrow'></i>
                </div>
              </div>
              <span className="value">{voteCount}</span>
            </div>
            <div className="view-count">{dataPost.views} lượt xem</div>
          </div>
          <div className="pull-right">
            <div className="right-tools">
              <Link to="/" className="tool">
                <i class="bx bxl-facebook-circle"></i>
              </Link>
              <div className="bookmark">
                <Link to="/" title="Click để lưu bài viết">
                  <i class="bx bx-bookmarks"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="post__subscription">
          <div className="post__author">
            <div className="post__author-container">
              <div className="post__author-infos">
                <div className="post__author-avt">
                  <Link to={`/user/${authPost.userName}`}>
                  <img
                    src={
                      authPost.avatar
                        ? authPost.avatar
                        : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"
                    }
                    alt=""
                  />
                  </Link>
                </div>
                <div className="name">
                  <Link  to={`/user/${authPost.userName}`} className="name-main">
                  {authPost.displayName
                      ? authPost.displayName
                      : authPost.userName}
                  </Link>
                  <p>@{authPost.userName}</p>
                </div>
              </div>
              <div className="sub-container">
                {
                  active ? (
                    <button className="btn-fl followed" onClick={handleUnFlow}>Following</button>
                   
                  ) : (
                    <button className="btn-fl follow" onClick={handleFlow}>Follow</button>  
                  )
                }
              </div>
            </div>
            <div className="user-desc">{authPost.intro}</div>
          </div>
          <div className="category__item">
            <div className="catergory__info">
              <Link className="name-main" to={`/category/${categoryPost.slug}`}>
                <span>{categoryPost.name}</span>
              </Link>
              <p>/{categoryPost.slug}</p>
            </div>
              {
                  activeCate ? (
                    <button className="btn-fl followed" onClick={handleUnFlowCategory}>Following</button>                  
                  ) : (
                    <button className="btn-fl follow" onClick={handleFlowCategory}>Follow</button>  
                  )
                }
          </div>
        </div>
        <div className="comment__container">
          <section className="comment__section">
            <div>
              <div className="comment__form-container">
                <form  className="comment__form"  ref={inputCmtRef}>
                  <input
                    className="comment__form-data"
                    ref={inputCmtRef}     
                    placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"
                    value={dataComment.content}
                    onChange={(e) => setDataComment({ ...dataComment, content: e.target.value })}
                  ></input>
                  <div className="comment__form-actions" onClick={handleSubmitComment}>
                    <div className="comment__form-actions-submit" >Gửi</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="comment__nav-tab">
              <div className="separator"></div>
              <ul className="comment__nav-list">
                <li className="comment__nav-item active">
                  <Link to="/">Hot nhất</Link>
                </li>
                <li className="comment__nav-item">
                  <Link to="/">Mới nhất</Link>
                </li>
              </ul>
            </div>
            <div className="comment__tree-view">
              <div className="comments">
                <div className="comments__node">
                  {comments.length > 0  ? (
                    comments.map((comment) => (
                      <Comment comment={comment} key={comment._id} />
                    ))
                  ) : ""}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {visiable ? (
        <div className="modal__delete">
          <div className="modal__delete-container">
            <div className="modal__delete-main">
              <header className="modal__delete-header">Xóa</header>
              <main className="modal__delete-content">
                Sẽ không có cách nào hoàn tác lại hành động này. Bạn có chắc
                chắn muốn xóa bài viết?
              </main>
              <footer className="modal__delete-footer">
                <button
                  onClick={handleDelete}
                  className="modal__delete-button delete"
                >
                  XÓA
                </button>
                <button
                  onClick={handleClickDelete}
                  className="modal__delete-button cancle"
                >
                  Hủy
                </button>
              </footer>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
