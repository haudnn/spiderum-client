import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const [visible, setVisible] = useState(true) 
  const [showCategory, setShowCategory] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset
      if(moving > 100) {
        setVisible(false);
      }else {
        setVisible(true);
      }
   };
   window.addEventListener("scroll", handleScroll);
   return(() => {
      window.removeEventListener("scroll", handleScroll);
   })
  }, []);
  const cls = visible ? "visible" : "hide";

  const handleShow = (e) => setShowCategory(!showCategory);
  return (
    <header className={`header ${visible ? "header" : "header-height"}`} >
        <div className={`header__container ${cls} `}>
          <div className="header__top" >
            <div>
              <img
                src="https://spiderum.com/assets/icons/wideLogo.png"
                alt=""
                width="180px"
              />
            </div>
            <div>
              <ul className="header__menu-top">
                <div className="">
                  <div className="header__icon-top-wrapper">
                    <i class="header__icon header__icon-top  bx bx-search-alt-2"></i>
                  </div>
                </div>
                <div className="">
                  <Link to="/">
                    <div className="header__icon-top-wrapper">
                      <i class="header__icon bx bx-envelope"></i>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <i class=" header__icon bx bx-bell"></i>
                </div>
                <li>
                  <img alt="" />
                </li>
                <div className="">
                  <button className="header__button ">Viết bài</button>
                </div>
              </ul>
            </div>
          </div>
          <div className="header__menu">
            <div className="header__cate" onClick={handleShow}>
              <span className="header__title">ĐANG THEO DÕI</span>
              <i className="header__icon bx bx-chevron-down"></i>
              {showCategory && (
                <div className="header__cate-menu">
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">
                          CHUYỆN TRÒ - TÂM SỰ
                        </span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">
                          DU LỊCH - ẨM THỰC
                        </span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">KỸ NĂNG</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">SÁCH</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">PHIM</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">KỸ NĂNG</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">SÁNG TÁC</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">THỂ THAO</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">GAME</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">ENGLISH ZONE</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">KỸ NĂNG</span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="header__cate-list">
                    <Link to="/">
                      <div className="header__cate-link">
                        <img
                          className="header__cate-img"
                          src="https://spiderum.com/assets/images/categories/conversation-min.jpg"
                          alt=""
                        />
                        <span className="header__cate-text">
                          TRUYỀN CẢM HỨNG
                        </span>
                        <i className="header__cate-icon bx bx-x"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="header__member">
              <Link to="/" className="header__title">
                THÀNH VIÊN NỔI BẬT{" "}
              </Link>
            </div>
            <div className="header__menu-category">
              <ul className="header__menu-list">
                <i className=" header__icon bx bx-chevron-left"></i>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    TẤT CẢ
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    QUAN ĐIỂM TRANH LUẬN
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    TRUYỀN CẢM HỨNG
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    KHOA HỌC - CÔNG NGHỆ
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    THỂ THAO
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    TẤT CẢ
                  </Link>
                </li>
                <i className="header__icon bx bx-chevron-right"></i>
              </ul>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
