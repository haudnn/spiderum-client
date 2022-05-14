import React, {useState , useEffect} from "react";
import "./postitem.scss";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
const PostItem = ({ post }) => {
  let date = new Date(post.createdAt)
  return (
    <div className="row mb">
      <div className="col l-4 c-12">
        <div className="filter__content-img">
          <Link to={`/post/${post.slug}`} className="filter__content-img">
            <img
              src={
                post.attachment
                  ? post.attachment
                  : "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
              }
              alt="Ảnh của bài viết"
              className="filter__content-img-item"
            />
          </Link>
        </div>
      </div>
      <div className="col l-8 c-12">
        <div className="filter__content-container">
          <div className="filter__content-heading">
            <div>
              <Link to={`/category/${post.category.slug}`}>
                <span className="title-category">{post.category.name}</span>
              </Link>
              <span className="time-read">4 phút đọc</span>
            </div>
            <div className="">
              <svg
                _ngcontent-serverApp-c41=""
                id="Layer_1"
                data-name="Layer 1"
                fill="#969696"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                height="25"
                width="25"
              >
                <path
                  _ngcontent-serverApp-c41=""
                  d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Zm0,31.25H328.13a36.23,36.23,0,0,1,36.45,36.46v282L259.13,325.87a15.61,15.61,0,0,0-18.26,0L135.42,401.79v-282A36.23,36.23,0,0,1,171.88,83.33Z"
                  class="cls-1"
                ></path>
              </svg>
            </div>
          </div>
          <div className="filter__content-main">
            <Link to={`/post/${post.slug}`}>
              <h3 className="title-post">{post.title}</h3>
            </Link>
            <div className="">
              <p className="text-intro">{post.description}</p>
            </div>
          </div>
          <div className="filter__content-author">
            <div className="filter__content-author-user">
              <div className="post-avt">
                <Link to={`/user/${post.author.userName}`} >
                  <img
                    className="post-avt"
                    src={ post.author.avatar ? post.author.avatar :"https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"}
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link to={`/user/${post.author.userName}`}>
                  <p className="post-username">{post.author.displayName ? post.author.displayName : post.author.userName}</p>
                </Link>
                <span className="time-read">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</span>
              </div>
            </div>
            <div className="filter__content-interactive">
              <div className="filter__content-interactive-container">
                <i class="post-icon bx bx-up-arrow"></i>
                <span className="post-icon">{post.voteCount.length ? post.voteCount.length :"0"}</span>
              </div>
              <div className="filter__content-interactive-container">
                <svg
                  fill="#969696"
                  _ngcontent-serverApp-c41=""
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    _ngcontent-serverApp-c41=""
                    d="M10.125 3.3125C9.73828 3.34766 9.35156 3.38281 9 3.48828C9.17578 3.76953 9.24609 4.12109 9.28125 4.4375C9.28125 5.52734 8.36719 6.40625 7.3125 6.40625C6.96094 6.40625 6.60938 6.33594 6.36328 6.16016C6.25781 6.51172 6.1875 6.86328 6.1875 7.25C6.1875 9.42969 7.94531 11.1875 10.125 11.1875C12.3047 11.1875 14.0625 9.42969 14.0625 7.25C14.0625 5.10547 12.3047 3.34766 10.125 3.34766V3.3125ZM20.1094 6.75781C18.2109 3.03125 14.4141 0.5 10.125 0.5C5.80078 0.5 2.00391 3.03125 0.105469 6.75781C0.0351562 6.89844 0 7.07422 0 7.25C0 7.46094 0.0351562 7.63672 0.105469 7.77734C2.00391 11.5039 5.80078 14 10.125 14C14.4141 14 18.2109 11.5039 20.1094 7.77734C20.1797 7.63672 20.2148 7.46094 20.2148 7.28516C20.2148 7.07422 20.1797 6.89844 20.1094 6.75781ZM10.125 12.3125C6.64453 12.3125 3.44531 10.3789 1.75781 7.25C3.44531 4.12109 6.64453 2.1875 10.125 2.1875C13.5703 2.1875 16.7695 4.12109 18.457 7.25C16.7695 10.3789 13.5703 12.3125 10.125 12.3125Z"
                    className=" cls-1"
                  ></path>
                </svg>
                <span className="post-icon">{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
