import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  return location.pathname !== "/post/create/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/category" &&
    location.pathname !== "/search" &&
    location.pathname !== `/tao-tai-khoan` &&
    location.pathname !== `/messages` &&
    location.pathname !== `/post/update/${path}` ? (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <div className="footer__about-logo">
            <img src="https://spiderum.com/assets/icons/wideLogo.png" alt="" />
          </div>
          <div className="footer__about-menu">
            <ul className="footer__about-list">
              <li className="footer__about-item">
                <Link to="/">
                  <span className="footer__about-text">VỀ SPIDERUM</span>
                </Link>
              </li>
              <li className="footer__about-item">
                <Link to="/">
                  <span className="footer__about-text">CHUYÊN MỤC</span>
                </Link>
              </li>
              <li className="footer__about-item">
                <Link to="/">
                  <span className="footer__about-text">ĐIỀU KHOẢN SỬ DỤNG</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    ""
  );
};

export default Footer;
