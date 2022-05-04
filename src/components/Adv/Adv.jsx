import React from "react";
import { Link } from "react-router-dom";
import './adv.scss'
const Adv = () => {
  return (
      <div className="adv">
        <div className="adv__donate box-shadow ">
          <p className="adv__donate-content">
            Bạn yêu thích cộng đồng và muốn nó trở nên lớn mạnh hơn?
          </p>
          <Link to="/" className="adv__donate-link">
            <button className="adv__donate-button">
              <i class='bx bx-donate-heart  adv__donate-icon'></i>
              Donate
            </button>
          </Link>
        </div>
        <div className="adv__widget box-shadow ">
          <p className="adv__widget-title">CÓ THỂ BẠN QUAN TÂM</p>
          <div className="adv__widget-content">
            <div className="adv__widget-content-details">
              <div className="adv__widget-avt">
                <Link to="/">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/fe994cf02c8a11eab71043b339168a6e.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="adv__widget-user">
                <p className="post-title">
                Bao lâu rồi bạn không sáng tác?
                </p>
                <Link to="/">
                  <span className="username">Hex </span>
                </Link>
                <span className="time-read"> - 18 tháng 8 2019</span>
              </div>
            </div>
            <div className="adv__widget-content-details">
              <div className="adv__widget-avt">
                <Link to="/">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/fe994cf02c8a11eab71043b339168a6e.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
              <div className="adv__widget-user">
                <p className="post-title">
                Bao lâu rồi bạn không sáng tác?
                </p>
                <Link to="/">
                  <span className="username">Hex </span>
                </Link>
                <span className="time-read"> - 18 tháng 8 2019</span>
              </div>
            </div>
            <div className="adv__widget-content-details">
              <div className="adv__widget-avt">
                <Link to="/">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/fe994cf02c8a11eab71043b339168a6e.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
              <div className="adv__widget-user">
                <p className="post-title">
                Bao lâu rồi bạn không sáng tác?
                </p>
                <Link to="/">
                  <span className="username">Hex </span>
                </Link>
                <span className="time-read"> - 18 tháng 8 2019</span>
              </div>
            </div>
            <div className="adv__widget-content-details">
              <div className="adv__widget-avt">
                <Link to="/">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/fe994cf02c8a11eab71043b339168a6e.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
              <div className="adv__widget-user">
                <p className="post-title">
                Bao lâu rồi bạn không sáng tác?
                </p>
                <Link to="/">
                  <span className="username">Hex </span>
                </Link>
                <span className="time-read"> - 18 tháng 8 2019</span>
              </div>
            </div>
            <div className="adv__widget-content-details">
              <div className="adv__widget-avt">
                <Link to="/">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/fe994cf02c8a11eab71043b339168a6e.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
              <div className="adv__widget-user">
                <p className="post-title">
                Bao lâu rồi bạn không sáng tác?
                </p>
                <Link to="/">
                  <span className="username">Hex </span>
                </Link>
                <span className="time-read"> - 18 tháng 8 2019</span>
              </div>
            </div>
          </div>       
        </div>
        <div className="adv__contact box-shadow ">
          <p className="adv__contact-heading">LIÊN KẾT</p>
          <div className="adv__contact-social">
            <ul className="adv__contact-social-list">
              <li className="adv__contact-social-item"></li>
              <Link to="/" className="adv__contact-social-link">
                <i class="adv__contact-social-icon fb bx bxl-facebook-square"></i>
                <span className="adv__contact-social-text">
                  Fanpage Spiderum
                </span>
              </Link>
              <li className="adv__contact-item">
                <Link to="/" className="adv__contact-social-link">
                  <i class=" adv__contact-social-icon sp bx bxl-spotify"></i>
                  <span className="adv__contact-social-text">
                    Spiderum Podcast
                  </span>
                </Link>
              </li>
              <li className="adv__contact-item">
                <Link to="/" className="adv__contact-social-link">
                  <i class=" adv__contact-social-icon yt bx bxl-youtube"></i>
                  <span className="adv__contact-social-text">
                    Spiderum Youtube
                  </span>
                </Link>
              </li>
              <li className="adv__contact-item">
                <Link to="/" className="adv__contact-social-link">
                  <i class=" adv__contact-social-icon cart bx bxs-cart"></i>
                  <span className="adv__contact-social-text">
                    Shop Spiderum
                  </span>
                </Link>
              </li>
              <li className="adv__contact-item">
                <Link to="/" className="adv__contact-social-link">
                  <i class="adv__contact-social-icon chat bx bxs-conversation"></i>
                  <span className="adv__contact-social-text">
                    Feedback Spiderum
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="adv__about">
            <ul className="adv__about-list">
                <li className="adv__about-item">
                    <Link to="/" className="adv__about-link"> 
                        <span className="adv__about-text">Về Speirum</span>
                    </Link>
                </li>
                <li className="adv__about-item">
                    <Link to="/" className="adv__about-link"> 
                        <span className="adv__about-text">Điều khoản sử dụng</span>
                    </Link>
                </li>
                <li className="adv__about-item">
                    <Link to="/" className="adv__about-link"> 
                        <span className="adv__about-text">Fangpage</span>
                    </Link>
                </li>
            </ul>
            <span className="adv__about-text">© 2021 Công ty Cổ phần Felizz</span>
        </div>
      </div>
  );
};

export default Adv;
