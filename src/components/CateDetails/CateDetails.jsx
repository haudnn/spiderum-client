import React from "react";
import "./catedetails.scss";
import { Link } from "react-router-dom";
const CateDetails = (props) => {
  return (
    <div className="main">
      <section className="category">
        <header className="category__header">
          <div className="category__header-background"></div>
          <div className="category__header-container">
            <div className="category__header-info">
              <p className="category__header-title">QUAN ĐIỂM - TRANH LUẬN</p>
              <div className="">
                <button className="button-page">
                  <span className="button-icon">
                    <i class="bx bx-check"></i>
                  </span>
                  Đang theo dõi
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="category__main">
          <div className="grid">
            <div className="row">
              <div className="col l-8">
                <div className="category__content">
                  <div className="category__content-post">
                    <div className="grid">
                      <div className="row">
                        <div className="col l-6">
                          <div className="category__content-post-img">
                            <img
                              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/f1b3bfb00ee911eba6e8bb9a15e73acb.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col l-6">
                          <div className="category__content-post-details">
                            <div className="category__content-post-details-heading flex-box">
                              <div>
                                <Link to="/">
                                  <span className="title-category">
                                    CHUYỆN TRÒ - TÂM SỰ
                                  </span>
                                </Link>
                                <span className="time-read">4 phút đọc</span>
                              </div>
                              <div>
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
                            <div>
                              <Link to="/">
                                <h3 className="title-post">
                                  Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                  thói quen?
                                </h3>
                              </Link>
                              <div>
                                <p className="text-intro">
                                  Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                  thói quen đơn giản chỉ là lặp đi lặp lại một
                                  việc nhiều lần đến khi có thể tự động làm mà
                                </p>
                              </div>
                              <div className="category__content-post-author flex-end">
                                <div className="flex-align-gap-10">
                                  <div>
                                    <Link to="/">
                                      <img
                                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/e0134d8000c911ebb2e9f38cb09f8367.png"
                                        alt=""
                                        className="post-avt"
                                      />
                                    </Link>
                                  </div>
                                  <div>
                                    <Link to="/">
                                      <p className="post-username">
                                        một quả bơ
                                      </p>
                                    </Link>
                                    <span className="time-read">Hôm qua</span>
                                  </div>
                                </div>
                                <div className="flex-gap-20">
                                  <div>
                                    <i class="post-icon bx bx-up-arrow"></i>
                                    <span className="post-icon"> 9</span>
                                  </div>
                                  <Link to="/">
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
                                    <span className="post-icon"> 554</span>
                                  </Link>
                                  <Link to="/">
                                    <i class="post-icon bx bx-message"></i>
                                    <span className="post-icon"> 22</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category__content-trending border box-shadow">
                    <div className="grid">
                      <div className="row">
                        <div className="col l-4">
                          <div className="category__content-trending-container">
                            <div className="category__content-trending-img">
                              <img
                                src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/ff900c000f7611eb8cbb3f9e0212799e.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <Link to="/">
                                <span className="title-category">
                                  QUAN ĐIỂM - TRANH LUẬN
                                </span>
                              </Link>
                              <Link to="/">
                                <p className="title-post-sm">
                                  Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                  thói quen?
                                </p>
                              </Link>
                              <Link to="/">
                                <p className="post-username">một quả bơ</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col l-4">
                          <div className="category__content-trending-container">
                            <div className="category__content-trending-img">
                              <img
                                src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/ff900c000f7611eb8cbb3f9e0212799e.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <Link to="/">
                                <span className="title-category">
                                  QUAN ĐIỂM - TRANH LUẬN
                                </span>
                              </Link>
                              <Link to="/">
                                <p className="title-post-sm">
                                  Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                  thói quen?
                                </p>
                              </Link>
                              <Link to="/">
                                <p className="post-username">một quả bơ</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col l-4">
                          <div className="category__content-trending-container">
                            <div className="category__content-trending-img">
                              <img
                                src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/ff900c000f7611eb8cbb3f9e0212799e.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <Link to="/">
                                <span className="title-category">
                                  QUAN ĐIỂM - TRANH LUẬN
                                </span>
                              </Link>
                              <Link to="/">
                                <p className="title-post-sm">
                                  Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                  thói quen?
                                </p>
                              </Link>
                              <Link to="/">
                                <p className="post-username">một quả bơ</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4">
                <div className="sidebar">
                  <div className="sidebar__policy widget-container">
                    <h3 className="title-post">QUAN ĐIỂM - TRANH LUẬN</h3>
                    <div className="sidebar__policy-content">
                      <p className="widget-title">Nội dung cho phép</p>
                      <p>
                        Các nội dung thể hiện góc nhìn, quan điểm đa chiều về
                        các vấn đề kinh tế, văn hoá – xã hội trong và ngoài
                        nước.
                      </p>
                      <p className="widget-title">Quy định</p>
                      <ul className="sidebar__policy-menu">
                        <li>
                          Những nội dung không thuộc phạm trù của danh mục sẽ bị
                          nhắc nhở và xoá (nếu không thay đổi thích hợp)
                        </li>
                        <li>Nghiêm cấm spam, quảng cáo</li>
                        <li>
                          Nghiêm cấm post nội dung 18+ hay những quan điểm cực
                          đoan liên quan tới chính trị - tôn giáo
                        </li>
                        <li>
                          Nghiêm cấm phát ngôn thiếu văn hoá và đả kích cá nhân.
                        </li>
                        <li>
                          Nghiêm cấm bài đăng không ghi rõ nguồn nếu đi cóp
                          nhặt.
                        </li>
                      </ul>
                      <button class="button-page">
                        <span class="button-icon">
                          <i class="bx bx-check"></i>
                        </span>
                        Đang theo dõi
                      </button>
                    </div>
                  </div>
                  <div className="sidebar__donate widget-container mtb-20">
                    <p>
                      Bạn yêu thích cộng đồng và muốn nó trở nên lớn mạnh hơn?
                    </p>
                    <Link to="/">
                      <button class="button-page mt-20">
                        <span class="button-icon">
                          <i class="bx bx-check"></i>
                        </span>
                        Ủng hộ
                      </button>
                    </Link>
                  </div>
                  <div className="sidebar__suggest box-shadow border">
                    <p className="sidebar__suggest-title border-bottom">
                      CÓ THỂ BẠN QUAN TÂM
                    </p>
                    <div className="sidebar__suggest-content">
                      <div className="sidebar__suggest-content-container">
                        <div className="post-avt-div">
                          <Link to="/">
                            <img
                              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/1b57d9b09c7d11ec80afdf2810a9ede6.jpeg"
                              alt=""
                              className="post-avt-div-img"
                            />
                          </Link>
                        </div>
                        <div>
                          <p className="post-title">
                            <Link to="/">
                              Procrastination: Căn bệnh vô hình giết chết chúng
                              ta
                            </Link>
                          </p>
                          <Link to="/">
                            <span className="username">Hex </span>
                          </Link>
                          <span className="time-read"> - 18 tháng 8 2019</span>
                        </div>
                      </div>
                      <div className="sidebar__suggest-content-container">
                        <div className="post-avt-div">
                          <Link to="/">
                            <img
                              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/1b57d9b09c7d11ec80afdf2810a9ede6.jpeg"
                              alt=""
                              className="post-avt-div-img"
                            />
                          </Link>
                        </div>
                        <div>
                          <p className="post-title">
                            <Link to="/">
                              Procrastination: Căn bệnh vô hình giết chết chúng
                              ta
                            </Link>
                          </p>
                          <Link to="/">
                            <span className="username">Hex </span>
                          </Link>
                          <span className="time-read"> - 18 tháng 8 2019</span>
                        </div>
                      </div>
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
                          <span className="adv__about-text">
                            Điều khoản sử dụng
                          </span>
                        </Link>
                      </li>
                      <li className="adv__about-item">
                        <Link to="/" className="adv__about-link">
                          <span className="adv__about-text">Fangpage</span>
                        </Link>
                      </li>
                    </ul>
                    <span className="adv__about-text">
                      © 2021 Công ty Cổ phần Felizz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CateDetails;
