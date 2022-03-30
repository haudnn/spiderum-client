import React, { useState, useEffect, useRef } from "react";
import "./filter.scss";
import { Link } from "react-router-dom";
import Adv from "../Adv/Adv";
const Filter = () => {
  const [flilterActive, setFilterActive] = useState(0);
  const [tabActive, setTabActive] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const tabRef = useRef();
  const filterRef = useRef()

  useEffect(() => {
    // filterRef.current.classList.add("active");
  
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      if (moving > 1250) {
        tabRef.current.classList.add("active");
      } else {
        tabRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleFilterActive = (index) => {
    setFilterActive(index);
    console.log(filterRef.current)
  };
  const handleTabActive = (i) => {
    setTabActive(i);
  };
  const handelPageCurrent = (i) => {
    setPageCurrent(i);
  };
  const fitterList = [
    {
      displayName: 'THỊNH HÀNH',
      patch:'/',
      icon:   <svg
      fill=" #718096"
      _ngcontent-serverApp-c41=""
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        _ngcontent-serverApp-c41=""
        d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
        class="cls-1"
      ></path>
              </svg>,
    }, 
    {
      displayName: 'MỚI',
      patch:'/',
      icon:   <svg
      fill=" #718096"
      _ngcontent-serverApp-c41=""
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        _ngcontent-serverApp-c41=""
        d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
        class="cls-1"
      ></path>
              </svg>,
    },
    {
      displayName: 'SÔI NỔI',
      patch:'/',
      icon:   <svg
      fill=" #718096"
      _ngcontent-serverApp-c41=""
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        _ngcontent-serverApp-c41=""
        d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
        class="cls-1"
      ></path>
              </svg>,
    },
    {
      displayName: 'TOP ',
      patch:'/',
      icon:   <svg
      fill=" #718096"
      _ngcontent-serverApp-c41=""
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        _ngcontent-serverApp-c41=""
        d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
        class="cls-1"
      ></path>
              </svg>,
    }
  ]
  const listTab = [
    {
      displayName: "TRANG CHỦ",
      path: "/",
      media: (
        <img src="https://spiderum.com/assets/icons/singleLogo.png" alt="" />
      ),
    },
    {
      displayName: "THỊNH HÀNH",
      path: "/",
      media: (
        <i className="">
          <svg
            fill=" #718096"
            _ngcontent-serverApp-c41=""
            width="14"
            height="18"
            viewBox="0 0 14 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-serverApp-c41=""
              d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
              class="cls-1"
            ></path>
          </svg>
        </i>
      ),
    },
    {
      displayName: "MỚI",
      path: "/",
      media: (
        <i className="">
          <svg
            _ngcontent-serverApp-c41=""
            width="17"
            height="17"
            viewBox="0 0 17 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-serverApp-c41=""
              d="M2.42188 2.64062C4.0625 1 6.02865 0.179688 8.32031 0.179688C10.638 0.179688 12.6042 1 14.2188 2.64062C15.8594 4.25521 16.6797 6.20833 16.6797 8.5C16.6797 10.7917 15.8594 12.7578 14.2188 14.3984C12.6042 16.013 10.638 16.8203 8.32031 16.8203C6.02865 16.8203 4.0625 16.013 2.42188 14.3984C0.807292 12.7578 0 10.7917 0 8.5C0 6.20833 0.807292 4.25521 2.42188 2.64062ZM11.875 13.5L10.9375 9.47656L14.0234 6.78125L9.92188 6.42969L8.32031 2.67969L6.71875 6.46875L2.61719 6.78125L5.74219 9.47656L4.80469 13.5L8.32031 11.3906L11.875 13.5Z"
              class="cls-1"
            ></path>
          </svg>
        </i>
      ),
    },
    {
      displayName: "SÔI NỔI",
      path: "/",
      media: (
        <i className="">
          <svg
            fill=" #718096"
            _ngcontent-serverApp-c41=""
            width="14"
            height="18"
            viewBox="0 0 14 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-serverApp-c41=""
              d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z"
              class="cls-1"
            ></path>
          </svg>
        </i>
      ),
    },
    {
      displayName: "TOP",
      path: "/",
      media: (
        <i className="">
          <svg
            _ngcontent-serverApp-c41=""
            width="13"
            height="15"
            viewBox="0 0 13 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.85156 2.5H12.5V10.8203H6.67969L6.32812 9.17969H1.67969V15H0V0.820312H7.5L7.85156 2.5Z"
              class="cls-1"
            ></path>
          </svg>
        </i>
      ),
    },
  ];
  return (
    <section className="filter container">
      <div className="filter__wrapper">
        <div className="grid">
          <div className="row">
            <div className="col l-8">
              <div className="filter__bar">
                <h3 className="title">DÀNH CHO BẠN</h3>
                <div className="filter__sort">
                  {
                      fitterList.map((e,i) =>(
                        <Link   key={i} to={e.patch} className={`filter__sort-item ${flilterActive === i ? "active" : "" }`} onClick={() => handleFilterActive(i) }>
                        <i className={`filter__sort-icon ${flilterActive === i ? "active" : "" }`} >
                          {e.icon}
                        </i>
                        <span className={`filter__sort-text ${flilterActive === i ? "active" : "" }`}>{e.displayName}</span>
                      </Link>
                      ))
                  }          
                </div>
              </div>
              <div className="filter__page">
                <div></div>
                <div className="filter__page-current">
                  <span>Trang: 1 / 683 </span>
                </div>
              </div>
              <div className="grid">
                <div className="row">
                  <div className="col l-12">
                    <div className="filter__content">
                      <div className="filter__content-details">
                        <div className="grid">
                          <div className="row">
                            <div className="col l-4 c-12">
                              <Link to="/">
                                <img
                                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
                                  alt=""
                                  className="filter__content-img"
                                />
                              </Link>
                            </div>
                            <div className="col l-8 c-12">
                              <div className="filter__content-container">
                                <div className="filter__content-heading">
                                  <div>
                                    <Link to="/">
                                      <span className="title-category">
                                        CHUYỆN TRÒ - TÂM SỰ
                                      </span>
                                    </Link>
                                    <span className="time-read">
                                      4 phút đọc
                                    </span>
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
                                  <Link to="/">
                                    <h3 className="title-post">
                                      Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                      thói quen?
                                    </h3>
                                  </Link>
                                  <div className="">
                                    <p className="text-intro">
                                      Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                      thói quen đơn giản chỉ là lặp đi lặp lại
                                      một việc nhiều lần đến khi có thể tự động
                                      làm mà
                                    </p>
                                  </div>
                                </div>
                                <div className="filter__content-author">
                                  <div className="filter__content-author-user">
                                    <div className="post-avt">
                                      <Link to="/">
                                        <img
                                          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
                                          alt=""
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
                                  <div className="filter__content-interactive">
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
                  </div>
                  <div className="col l-12">
                    <div className="filter__content">
                      <div className="filter__content-details">
                        <div className="grid">
                          <div className="row">
                            <div className="col l-4 c-12">
                              <Link to="/">
                                <img
                                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
                                  alt=""
                                  className="filter__content-img"
                                />
                              </Link>
                            </div>
                            <div className="col l-8 c-12">
                              <div className="filter__content-container">
                                <div className="filter__content-heading">
                                  <div>
                                    <Link to="/">
                                      <span className="title-category">
                                        CHUYỆN TRÒ - TÂM SỰ
                                      </span>
                                    </Link>
                                    <span className="time-read">
                                      4 phút đọc
                                    </span>
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
                                  <Link to="/">
                                    <h3 className="title-post">
                                      Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                      thói quen?
                                    </h3>
                                  </Link>
                                  <div className="">
                                    <p className="text-intro">
                                      Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                      thói quen đơn giản chỉ là lặp đi lặp lại
                                      một việc nhiều lần đến khi có thể tự động
                                      làm mà
                                    </p>
                                  </div>
                                </div>
                                <div className="filter__content-author">
                                  <div className="filter__content-author-user">
                                    <div className="post-avt">
                                      <Link to="/">
                                        <img
                                          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
                                          alt=""
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
                                  <div className="filter__content-interactive">
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
                  </div>
                  <div className="col l-12">
                    <div className="filter__content">
                      <div className="filter__content-details">
                        <div className="grid">
                          <div className="row">
                            <div className="col l-4 c-12">
                              <Link to="/">
                                <img
                                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
                                  alt=""
                                  className="filter__content-img"
                                />
                              </Link>
                            </div>
                            <div className="col l-8 c-12">
                              <div className="filter__content-container">
                                <div className="filter__content-heading">
                                  <div>
                                    <Link to="/">
                                      <span className="title-category">
                                        CHUYỆN TRÒ - TÂM SỰ
                                      </span>
                                    </Link>
                                    <span className="time-read">
                                      4 phút đọc
                                    </span>
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
                                  <Link to="/">
                                    <h3 className="title-post">
                                      Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                      thói quen?
                                    </h3>
                                  </Link>
                                  <div className="">
                                    <p className="text-intro">
                                      Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                      thói quen đơn giản chỉ là lặp đi lặp lại
                                      một việc nhiều lần đến khi có thể tự động
                                      làm mà
                                    </p>
                                  </div>
                                </div>
                                <div className="filter__content-author">
                                  <div className="filter__content-author-user">
                                    <div className="post-avt">
                                      <Link to="/">
                                        <img
                                          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
                                          alt=""
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
                                  <div className="filter__content-interactive">
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
                  </div>
                  <div className="col l-12">
                    <div className="filter__content">
                      <div className="filter__content-details">
                        <div className="grid">
                          <div className="row">
                            <div className="col l-4 c-12">
                              <Link to="/">
                                <img
                                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
                                  alt=""
                                  className="filter__content-img"
                                />
                              </Link>
                            </div>
                            <div className="col l-8 c-12">
                              <div className="filter__content-container">
                                <div className="filter__content-heading">
                                  <div>
                                    <Link to="/">
                                      <span className="title-category">
                                        CHUYỆN TRÒ - TÂM SỰ
                                      </span>
                                    </Link>
                                    <span className="time-read">
                                      4 phút đọc
                                    </span>
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
                                  <Link to="/">
                                    <h3 className="title-post">
                                      Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                      thói quen?
                                    </h3>
                                  </Link>
                                  <div className="">
                                    <p className="text-intro">
                                      Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                      thói quen đơn giản chỉ là lặp đi lặp lại
                                      một việc nhiều lần đến khi có thể tự động
                                      làm mà
                                    </p>
                                  </div>
                                </div>
                                <div className="filter__content-author">
                                  <div className="filter__content-author-user">
                                    <div className="post-avt">
                                      <Link to="/">
                                        <img
                                          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
                                          alt=""
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
                                  <div className="filter__content-interactive">
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
                  </div>
                  <div className="col l-12">
                    <div className="filter__content">
                      <div className="filter__content-details">
                        <div className="grid">
                          <div className="row">
                            <div className="col l-4 c-12">
                              <Link to="/">
                                <img
                                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
                                  alt=""
                                  className="filter__content-img"
                                />
                              </Link>
                            </div>
                            <div className="col l-8 c-12">
                              <div className="filter__content-container">
                                <div className="filter__content-heading">
                                  <div>
                                    <Link to="/">
                                      <span className="title-category">
                                        CHUYỆN TRÒ - TÂM SỰ
                                      </span>
                                    </Link>
                                    <span className="time-read">
                                      4 phút đọc
                                    </span>
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
                                  <Link to="/">
                                    <h3 className="title-post">
                                      Atomic Habits: Bạn đã hiểu đúng về tạo lập
                                      thói quen?
                                    </h3>
                                  </Link>
                                  <div className="">
                                    <p className="text-intro">
                                      Cách đây hai tháng, mình vẫn nghĩ xây dựng
                                      thói quen đơn giản chỉ là lặp đi lặp lại
                                      một việc nhiều lần đến khi có thể tự động
                                      làm mà
                                    </p>
                                  </div>
                                </div>
                                <div className="filter__content-author">
                                  <div className="filter__content-author-user">
                                    <div className="post-avt">
                                      <Link to="/">
                                        <img
                                          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c7967c50a8e811ec8f3e8be3eb7f2505.png"
                                          alt=""
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
                                  <div className="filter__content-interactive">
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
                  </div>
                </div>
              </div>
              <div className="filter__pagination">
                <ul className="filter__pagination-list">
                  <li className="filter__pagination-item">
                    <span
                      className={`filter__pagination-text ${
                        pageCurrent === 1 ? "active" : ""
                      }`}
                      onClick={() => handelPageCurrent(1)}
                    >
                      {" "}
                      1
                    </span>
                  </li>
                  <li className="filter__pagination-item">
                    <span
                      className={`filter__pagination-text ${
                        pageCurrent === 2 ? "active" : ""
                      }`}
                      onClick={() => handelPageCurrent(2)}
                    >
                      2
                    </span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">3</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">4</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">5</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">6</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">7</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">8</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">9</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">10</span>
                  </li>
                  <li className="filter__pagination-item">
                    <span className="filter__pagination-text">Tiếp </span>
                  </li>
                </ul>
              </div>
            </div>
            <Adv></Adv>
          </div>
        </div>
        <div className="listtab" ref={tabRef}>
          <div className="listtab__container">
            {listTab.map((e, i) => (
              <Link
                key={i}
                to={e.path}
                className="listtab__wrapper"
                onClick={() => handleTabActive(i)}
              >
                <p className="listtab__text">{e.displayName}</p>
                <div
                  className={`listtab__media ${
                    tabActive === i ? "active" : ""
                  }`}
                >
                  {e.media}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
