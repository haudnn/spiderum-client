import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PostItem from "../PostItem/PostItem";
import "./filter.scss";
const Filter = ({posts}) => {
  const [flilterActive, setFilterActive] = useState(0);
  const [currentSort, setCurrentSort] = useState('default');
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabActive, setTabActive] = useState(0);
  const [page, setPage] = useState(0);
  const [currentButton, setCurrentButton] = useState(1);
  const PER_PAGE = 10
  const computedActivityStreams = useMemo(() => {
    setPage(Math.ceil(posts.length / PER_PAGE));
    return posts;
  }, [posts]);
  const indexOfLastPost = currentButton * PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - PER_PAGE;
  const currentActivityLists = computedActivityStreams.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const tabRef = useRef();
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
    if(index === 0) {
      setCurrentSort("default");
    }
    if(index === 2) {
      setCurrentSort("vote");
    }
    if (index === 3) {
      setCurrentSort("top");
    }
    setFilterActive(index);
  };
  const handleTabActive = (i) => {
    setTabActive(i);
  };
  const fitterList = [
    {
      displayName: "THỊNH HÀNH",
      path: "/",
      icon: (
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
      ),
    },
    {
      displayName: "MỚI",
      path: "/?sort=news",
      icon: (
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
      ),
    },
    {
      displayName: "SÔI NỔI",
      path: "/?sort=controversial",
      icon: (
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
      ),
    },
    {
      displayName: "TOP ",
      path: "/?sort=top",
      icon: (
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
      ),
    },
  ];
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
  const  handleSetPage = (i) => {
    setCurrentButton(i+1)
  }
  const sortTypes = {
    vote: {
        fn: (a, b) => b.voteCount.length- a.voteCount.length
    },
    top: {
        fn: (a, b) => b.views - a.views
    },
    // trending: {
    //   fn: (a, b) => b.views - a.views
    // },
    default: {
        fn: (a, b) => a
    }
};
  return (
    <section className="filter">
      <div className="filter__wrapper">
        <div className="filter__bar">
          <h3 className="title">DÀNH CHO BẠN</h3>
          <div className="filter__sort">
            {fitterList.map((e, i) => (
              <Link
                key={i}
                to={e.path}
                className={`filter__sort-item ${
                  flilterActive === i ? "active" : ""
                }`}
                onClick={() => handleFilterActive(i)}
              >
                <i
                  className={`filter__sort-icon ${
                    flilterActive === i ? "active" : ""
                  }`}
                >
                  {e.icon}
                </i>
                <span
                  className={`filter__sort-text ${
                    flilterActive === i ? "active" : ""
                  }`}
                >
                  {e.displayName}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="filter__page">
          <div></div>
        </div>
        <div className="grid">
          <div className="row">
            <div className="col l-12">
              <div className="filter__content">
                <div className="filter__content-details">
                  <div className="grid">
                    {Array.isArray(currentActivityLists) && currentActivityLists.sort(sortTypes[currentSort].fn).map((post) => (
                      <PostItem post={post} key={post._id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter__pagination">
          <ul className="filter__pagination-list">
              {[...Array(page)].map((x, i) =>
                <li className="filter__pagination-item" onClick={() => handleSetPage(i)} >
                  <span className={`filter__pagination-text ${currentButton === i+1 ? "active" : ""}`} >
                    {i+1}
                  </span>
                </li>
                )}
          </ul>
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
