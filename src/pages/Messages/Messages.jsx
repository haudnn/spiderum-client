import React, { useCallback, useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./messages.scss";
const Messages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const username = searchParams.get("username");
  const getUser = useCallback(async () => {
    const option = {
      method: "get",
      url: `/api/v1/auth/${username}`,
    };
    const response = await axios(option);
    setCurrentUser(response.data.data);
  }, [username]);
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="mes">
      <div className="mes__header">
        <div className="mes__header-logo">
          <Link to="/">
            <img src="https://spiderum.com/assets/icons/wideLogo.png" alt="" className="mes__header-logo-img"/>
          </Link>
        </div>
      </div>
      <div className="mes__main">
        <div className="mes__sidebar">
          <div className="mes__search">
            <input
              type="text"
              placeholder="Tìm theo tên..."
              className="mes__search-input"
            />
          </div>
          <ul className="mes__chatlist">
            <li className="mes__chatitem">
              <div className="mes__chatavt">
                <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/9ec6b140b6f011ebbd783187720a8dea.jpg" alt="" />
              </div>
              <span className="mes__time">1:49 PM</span>
              <div className="mes__content">
                <h2 className="mes__title">ReactJS</h2>
                <div className="mes__preview">
                  <span>123</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mes__box">
          <div className="mes__box-header">
            <h2 className="mes__box-username">hauhau321</h2>
          </div>
          <div className="mes__box-content">
            <div className="mes__box-time">
              <p>May 8, 2022</p>
            </div>
            <div className="mes__box-chat">
              {/* right */}
              <div className="mes__box-chat-buble">
                <div className="chat-buble right">
                  <div>
                    <Link to="/">
                      <img src="" alt="" />
                    </Link>
                  </div>
                  <div className="content right">
                    <div className="inner-content">hello</div>
                    <p className="mestime">1:42 PM</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="mes__box-chat-buble">
                <div className="chat-buble left">
                  <div className="chat-avatar-container">
                    <Link to="/" className="chat-avatar">
                      <img src="https://www.gravatar.com/avatar/b5624e8eb33903826dddfa5927074579?d=wavatar&f=y" alt="" />
                    </Link>
                  </div>
                  <div className="content left">
                    <div className="inner-content left">hello</div>
                    <p className="mestime left">1:42 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mes__box-input">
            <div className="mes__box-input-container">
                <input className="mes__box-input-text" type="text" placeholder="Viết gì đó...." />
                <div className="send">
                    <i class='bx bx-send'></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
