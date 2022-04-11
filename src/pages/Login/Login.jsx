import React, { useState, useCallback } from "react";
import "./login.scss";
import { Link, useNavigate }from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import {  currentUserState$} from '../../redux/selectors'
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(currentUserState$)
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(actions.currentUser.currentUserRequest(data))
  },[data,dispatch])
  // console.log({ token , userName })
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await dispatch(actions.currentUser.currentUserRequest(data))
  //   const token = await  user.user.data.token
  //   console.log(token)
  // }
  // const { token , userName } = user.data
  // localStorage.setItem("token", token)
  // console.log({ token , userName })
  console.log(user.user.data.token)
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/" className="login__logo">
          <img
            src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png"
            alt=""
          />
        </Link>
        {/* <p>Error : Sai tên đăng nhập hoặc password </p> */}
        <form action="" method="POST" className="login__form" onSubmit={onSubmit} >
          <input
            type="text"
            placeholder="Tên đăng nhập hoặc email"
            name="email"
            className="login__form-input"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            className="login__form-input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="login__form-button" type="submit">
            Đăng nhập
          </button>
        </form>
        <p className="login__text">Đăng nhập bằng</p>
        <div className="login__facebook">
          <Link to="/" className="login__facebook-link">
            <button className="login__form-button fb">
              <i className="login__icon bx bxl-facebook"></i>
              <span className="login__text fb">Facebook</span>
            </button>
          </Link>
        </div>
        <Link to="/">
          <p className="login__text link">Quên mật khẩu?</p>
        </Link>
        <span className="login__text">Không có tài khoản?</span>
        <a href="/register">
          <span className="login__text link"> Đăng ký ngay</span>
        </a>
      </div>
    </div>
  );
};
export default Login;
