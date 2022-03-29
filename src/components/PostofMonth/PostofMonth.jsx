import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./postofmonth.scss";
const PostofMonth = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section className="postofmonth container">
      <div className="pom__wrapper">
        <h3 className="title">BÀI VIẾT CỦA THÁNG</h3>
        <div className="pom__content border box-shadow ">
          <div className="grid">
            <div className="row">
              <div className="col l-3">
                <div className="pom__content-details">
                  <Link to="/">
                    <div className="mt-10">
                      <img
                        className="border-img"
                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/d0698500a71911ec8117a1d7e40aaf98.jpg"
                        alt=""
                      />
                    </div>
                  </Link>
                  <Link to="/">
                    <p className="title-category mt-10">
                      QUAN ĐIỂM - TRANH LUẬN
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="title-post-sm mt-10">
                      Giáo dục ở trường học không quan trọng như tôi tưởng
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="post-username mt-10">larant</p>
                  </Link>
                </div>
              </div>
              <div className="col l-3">
                <div className="pom__content-details">
                  <Link to="/">
                    <div className="mt-10">
                      <img
                        className="border-img"
                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/d0698500a71911ec8117a1d7e40aaf98.jpg"
                        alt=""
                      />
                    </div>
                  </Link>
                  <Link to="/">
                    <p className="title-category mt-10">
                      QUAN ĐIỂM - TRANH LUẬN
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="title-post-sm mt-10">
                      Giáo dục ở trường học không quan trọng như tôi tưởng
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="post-username mt-10">larant</p>
                  </Link>
                </div>
              </div>
              <div className="col l-3">
                <div className="pom__content-details">
                  <Link to="/">
                    <div className="mt-10">
                      <img
                        className="border-img"
                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/d0698500a71911ec8117a1d7e40aaf98.jpg"
                        alt=""
                      />
                    </div>
                  </Link>
                  <Link to="/">
                    <p className="title-category mt-10">
                      QUAN ĐIỂM - TRANH LUẬN
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="title-post-sm mt-10">
                      Giáo dục ở trường học không quan trọng như tôi tưởng
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="post-username mt-10">larant</p>
                  </Link>
                </div>
              </div>
              <div className="col l-3">
                <div className="pom__content-details">
                  <Link to="/">
                    <div className="mt-10">
                      <img
                        className="border-img"
                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/d0698500a71911ec8117a1d7e40aaf98.jpg"
                        alt=""
                      />
                    </div>
                  </Link>
                  <Link to="/">
                    <p className="title-category mt-10">
                      QUAN ĐIỂM - TRANH LUẬN
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="title-post-sm mt-10">
                      Giáo dục ở trường học không quan trọng như tôi tưởng
                    </p>
                  </Link>
                  <Link to="/">
                    <p className="post-username mt-10">larant</p>
                  </Link>
                </div>
              </div>           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostofMonth;
