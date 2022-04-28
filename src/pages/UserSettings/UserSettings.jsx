import React, { useEffect, useCallback, useState } from "react";
import "./usersettings.scss";
const User = () => {
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="container">
      <div className="mt-190">
        <div className="settings">
          <div className="grid">
            <div className="row">
              <div className="l-4">
                <ul className="settings__navbar">
                  <li className="settings__navbar-item">
                    <span className="settings__navbar-text">Tài khoản</span>
                  </li>
                </ul>
              </div>
              <div className="l-8">
                <form action="">
                  <div className="settings__content">
                    <div className="settings__cover">
                      <form action="">
                        <img src="" alt="" />
                        <label>
                          <span></span>
                          <input type="text" />
                        </label>
                      </form>
                    </div>
                    <div className="settings__account">
                      <div className="settings__flex-top">
                        <form className="settings__flex-30 settings__avt">
                          {selectedFile &&  <img src="" alt="" className="settings__avt-img" />}
                          <label className="settings__avt-icon">
                            <div className="settings__avt-icon-upload">
                              <svg
                                _ngcontent-serverApp-c79=""
                                height="40"
                                viewBox="0 0 1000 1000"
                                width="40"
                                x="0px"
                                y="0px"
                                class="ng-tns-c79-0 ng-star-inserted"
                              >
                                <g
                                  _ngcontent-serverApp-c79=""
                                  fill="#FFF"
                                  class="ng-tns-c79-0"
                                >
                                  <path
                                    _ngcontent-serverApp-c79=""
                                    d="M336.7,91.7h326.7L745,214.2h122.5c33.8,0,62.7,12.2,86.6,36.5s35.9,53.4,35.9,87.2v448.5c0,33.8-12,62.6-35.9,86.3s-52.8,35.6-86.6,35.6h-735c-33.8,0-62.7-12-86.6-35.9S10,819.6,10,785.8V337.3c0-33.8,12-62.8,35.9-86.9s52.8-36.2,86.6-36.2H255L336.7,91.7z M500,336.7c27.6,0,54.1,5.4,79.3,16.3c25.2,10.8,46.9,25.4,65.1,43.5s32.7,39.9,43.5,65.1c10.8,25.2,16.3,51.6,16.3,79.3c0,27.6-5.4,54.1-16.3,79.3c-10.8,25.2-25.4,46.9-43.5,65.1s-39.9,32.7-65.1,43.5C554.1,739.6,527.6,745,500,745s-54.1-5.4-79.3-16.3c-25.2-10.8-46.9-25.4-65.1-43.5s-32.7-39.9-43.5-65.1s-16.3-51.6-16.3-79.3c0-27.6,5.4-54.1,16.3-79.3c10.8-25.2,25.4-46.9,43.5-65.1s39.9-32.7,65.1-43.5C445.9,342.1,472.4,336.7,500,336.7z M500,418.3c-33.8,0-62.7,12-86.6,35.9s-35.9,52.8-35.9,86.6c0,33.8,12,62.7,35.9,86.6s52.8,35.9,86.6,35.9c33.8,0,62.7-12,86.6-35.9s35.9-52.8,35.9-86.6c0-33.8-12-62.7-35.9-86.6S533.8,418.3,500,418.3z M701.3,295.8l-80.1-122.5H380.4l-81.7,122.5H132.5c-11.3,0-20.9,4-28.9,12.1c-8,8.1-12,17.9-12,29.3v448.5c0,11.3,4,20.9,12,28.9c8,8,17.6,12,28.9,12h735c11.5,0,21.2-3.9,29-11.6c7.9-7.8,11.8-17.3,11.8-28.6V337.9c0-11.5-4-21.4-12.1-29.7c-8.1-8.3-17.7-12.4-28.7-12.4L701.3,295.8L701.3,295.8z"
                                    class="ng-tns-c79-0"
                                  ></path>
                                </g>
                              </svg>
                              <input
                                type="file"
                                className="settings__avt-input"
                                onChange={onSelectFile}
                              />
                            </div>
                          </label>
                        </form>
                        <div className="settings__flex-70">
                          <textarea
                            className="settings__textarea"
                            name=""
                            id=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="settings__flex">
                        <div className="settings__flex-item">
                          <label className="settings__name">TÊN HIỂN THỊ</label>
                          <input type="text" className="settings__input" />
                        </div>
                        <div className="settings__flex-item">
                          <label className="settings__name">EMAIL</label>
                          <input type="text" className="settings__input" />
                        </div>
                        <div className="settings__flex-item">
                          <label className="settings__name">NGÀY SINH</label>
                          <input type="date" className="settings__input" />
                        </div>
                        <div className="settings__flex-item">
                          <label className="settings__name">GIỚI TÍNH</label>
                          <div className="settings__gender">
                            <div>
                              <input type="radio" id="male" />
                              <label
                                for="female"
                                className="settings__gender-text"
                              >
                                Nam
                              </label>
                            </div>
                            <div>
                              <input type="radio" id="diff" />
                              <label
                                for="diff"
                                className="settings__gender-text"
                              >
                                Nữ
                              </label>
                            </div>
                            <div>
                              <input type="radio" />
                              <label className="settings__gender-text">
                                Khác
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form className="settings__form">
                        <p className="settings__password">Đổi mật khẩu</p>
                        <div className="settings__flex">
                          <div className="settings__flex-item-wfull">
                            <label className="settings__name" htmlFor="">
                              Mật khẩu cũ
                            </label>
                            <input
                              type="password"
                              className="settings__input"
                            />
                          </div>
                          <div className="settings__flex-item-wfull">
                            <label className="settings__name" htmlFor="">
                              Mật khẩu mới
                            </label>
                            <input
                              type="password"
                              className="settings__input"
                            />
                          </div>
                          <div className="settings__flex-item-wfull">
                            <label className="settings__name" htmlFor="">
                              Nhập lại mật khẩu mới
                            </label>
                            <input
                              type="password"
                              className="settings__input"
                            />
                          </div>
                        </div>
                        <div className="p-30">
                          <button className="settings__button">Xác nhận</button>
                        </div>
                      </form>
                      <div className="settings__flex">
                        <div className="settings__flex-item">
                          <label htmlFor="" className="settings__name">
                            Số chứng minh thư
                          </label>
                          <input type="text" className="settings__input" />
                        </div>
                        <div className="settings__flex-item">
                          <label htmlFor="" className="settings__name">
                            Địa chỉ
                          </label>
                          <input type="text" className="settings__input" />
                        </div>
                        <div className="settings__flex-item">
                          <label htmlFor="" className="settings__name">
                            Số điện thoại
                          </label>
                          <input type="text" className="settings__input" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="settings__actions">
                    <button className="settings__actions cancle">Hủy</button>
                    <button className="settings__actions save">Lưu</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
