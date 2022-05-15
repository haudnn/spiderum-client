import React, { useState} from "react";
import { Link } from "react-router-dom";
const Notifications = ({ notification}) => {
  let date = new Date(notification.createdAt);
  console.log(notification)
  return( 
    notification.post ? (
      <li className={`header__notify-item ${notification.isRead ? "" : "active"}`}>
      <Link to={`/post/${notification.post.slug}?notiId=${notification._id}`} className={`header__notify-link`}> 
        <div className="header__notify-menu">
          <Link to={`/user/${notification.parentId.userName}`} >
            <img
              src={
                notification.parentId.avatar
                  ? notification.parentId.avatar
                  : "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
              }
              alt=""
              className="header__notify-img"
            />
          </Link>
          <div className="header__notify-info">
            <span className="header__notify-strong">
              <b>
                {notification.parentId.displayName
                  ? notification.parentId.displayName
                  : notification.parentId.userName}{" "}
              </b>
            </span>
            <span>vừa đăng một bài viết mới: </span>
            <q class="header__notify-strong header__notify-content">
              <b className="">{notification.post.title}</b>
            </q>
          </div>
          <i class=" header__notify-icon bx bx-dots-horizontal-rounded"></i>
        </div>
        <div className="header__notify-time">
          <i class="bx bxs-conversation"></i>
          <span className="time">{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</span>
        </div>
      </Link>
    </li>
    ) : ""
  );
};

export default Notifications;