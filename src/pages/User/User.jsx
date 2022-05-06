import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import PostItem from "../../components/PostItem/PostItem";
import "./user.scss";
import axios from "axios";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import {  userState$}from "../../redux/selectors";
import {useSelector } from "react-redux";
const User = () => {
  const userState = useSelector(userState$)
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState(null);  
  const [visible, setVisible] = useState(true);
  const slider = useRef(null);
  const [userId, setUserId] = useState([]);
  const { username } = useParams();
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    lazyLoad: true,
  };
  const getUser = useCallback(async () => {
    const option = {
      method: "get",
      url: `/api/v1/auth/${username}`,
    };
    const response = await axios(option);
    setCurrentUser(response.data.data);
  }, [username]);
  useEffect(() => {
    if(currentUser){
      setUserId([currentUser.user._id])     
    }
  },[currentUser])
  const getPostsByUser = useCallback(async () => {
    const option = {
      method: "get",
      url: `/api/v1/posts/user/${username}`,
    };
    const response = await axios(option);
    setPosts(response.data.data);
  }, [username]);
  useEffect(() => {
    getUser();
    getPostsByUser();
  }, [getUser, getPostsByUser]);
  useEffect(() => {
    const handleScroll = () => {
      if ( window.pageYOffset  > 0) {
        setVisible(false);
      }
      else{
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handelUnFlow = useCallback( async(e) => {
    const token = localStorage.getItem("token")
    try{
      e.preventDefault();
      const option = {
        method: "put",
        url: `/api/v1/auth/update/unfollower/`,
        data: userId,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      await axios(option);
    }
    catch(err) {
    }
  },[userId])
  const handelFlow = useCallback( async(e) => {
    const token = localStorage.getItem("token")
    try{
      e.preventDefault();
      const option = {
        method: "put",
        url: `/api/v1/auth/update/follower/`,
        data: userId,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      console.log(response)
    }
    catch(err) {
    }
  },[userId])
  return (
    currentUser &&
    posts &&  (
      <div className="main">
        <div className="user">
          <div className="user__cover">
            <img src={currentUser.user.cover} alt="" />
          </div>
          <div className="user__profile" >
            <div className="user__profile-content">
              <div className="user__profile-sidebar">
                <div className="user__profile-dynamic" style={ visible ? { height:'800px', maxHeight: '50%', top: "160px"} : {height:'800px', maxHeight: '50%', top: "-200px"}}>
                  <div className="user__profile-widget">
                    <div className="user__profile-widget-body"> 
                      <div className="user__profile-widget-content">
                        <div className="user__profile-widget-avt">
                          <Link
                            to="/"
                            className="user__profile-widget-avt-link"
                          >
                            <img src={currentUser.user.avatar ?  currentUser.user.avatar : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y" } alt="" />
                          </Link>
                        </div>
                        <h1 className="user__profile-widget-disname">
                          <Link to="/">{currentUser.user.displayName}  </Link>
                        </h1>
                        <p className="user__profile-widget-username">
                          <Link to="/">@{currentUser.user.userName}</Link>
                        </p>
                        <div className="user__profile-widget-bio">
                          {currentUser.user.intro}
                        </div>
                        <div className="user__profile-widget-button">
                          {
                            userState.currentUser ? 
                            (
                              userState.currentUser.following.includes(currentUser.user._id) ? (
                                <div onClick={() => window.location.reload(false)}>
                                   <button className="user__profile-widget-button-item flow" onClick={handelUnFlow}>
                                  <span className="flow-icon">
                                    <i class='bx bxs-check-circle'></i>
                                  </span>
                                  <span className="flow-text">Đang Theo dõi</span>
                                </button>
                                </div>
                              )
                              : (
                                <div  onClick={() => window.location.reload(false)}>
                                  <button className="user__profile-widget-button-item" onClick={handelFlow}>
                                    <span>Theo dõi</span>
                                  </button>
                                </div>
                              )
                              ) : <Link to='/login'>
                                <button className="user__profile-widget-button-item">
                                  <span>Theo dõi</span>
                                </button>
                              </Link>
                          }
                          <button className="user__profile-widget-button-item">
                            <span>Nhắn tin</span>
                          </button>
                        </div>
                        <div className="user__profile-widget-stats">
                          <div>
                            <p className="label">Người theo dõi</p>
                            <p className="value">
                              {currentUser.user.followers ? currentUser.user.followers.length : "0" }
                            </p>
                          </div>
                          <div>
                            <p className="label">Đang theo dõi</p>
                            <p className="value">
                              {currentUser.user.following ? currentUser.user.following.length : "0"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16">
                    <div className="user__profile-widget">
                      <div className="user__profile-widget-head">
                        <span className="user__profile-widget-title">
                          Donate
                        </span>
                      </div>
                      <div className="user__profile-widget-body">
                        <p>
                          Nếu muốn ủng hộ tác giả, các bạn có thể làm theo hướng
                          dẫn sau.
                        </p>
                        <Link to="/" className="user__profile-widget-donate">
                          <span>Ủng hộ</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user__profile-main">
                <div className="user__profile-tabs">
                  <div className="user__profile-tabs-container">
                    <div className="user__profile-tabs-content">
                      <div className="user__profile-tabs-tab">
                        <Link className="user__profile-tabs-link" to="/">
                          <span>Bài viết</span>
                        </Link>
                      </div>
                      <Link className="user__profile-tabs-icon" to="/">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                {
                  posts.posts.length !== 0 ? (
                    <div className="user__profile-posts">
                  <div className="user__profile-posts-top">
                    <div className="user__profile-posts-head">
                      <div className="user__profile-posts-heading">
                        <span>Bài viết nổi bật</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <TrendingPosts posts={posts.posts} slice={5} slidesToShow={3}/>
                    </div>
                  </div>
                  <div className="user__profile-posts-top">
                    <div className="user__profile-posts-head">
                      <div className="user__profile-posts-heading">
                        <span>Tất cả bài viết</span>
                      </div>
                    </div>
                    <div className="user__profile-posts-all-body">
                      <div className="user__profile-posts-all-content">
                        <div className="grid">
                          {posts.posts.slice(0, 10).map((post) => (
                            <PostItem post={post} key={post._id} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  ) : (
                    <p>Không có gì để xem ở đây cả</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default User;