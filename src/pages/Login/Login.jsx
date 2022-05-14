import React, { useState, useCallback, useEffect } from "react";
import "./login.scss";
import { Link, useNavigate }from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import {  userState$ } from '../../redux/selectors'
import firebase,{ auth } from '../../components/firebase/config'
import axios from 'axios'
const Login = () => {
  const [data, setData] = useState({userName: "",password: ""});
  const [errMessage, setErrMessage] = useState(null);
  const loginSuccess = useSelector( userState$)
  const fbProvider = new firebase.auth.FacebookAuthProvider()
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAuthFacebook = async () => {
    await auth.signInWithPopup(fbProvider)
    auth.onAuthStateChanged(async (user) => {
      if(user._delegate.accessToken) {
        const option  ={
          method: "post", 
          url:`/api/v1/auth/facebook/`,
          data:{
            uid:user._delegate.uid
          },
        }
        const response = await axios(option)
        if(!response.data.data){
            navigate(`/tao-tai-khoan?token=${user._delegate.accessToken}&uid=${user._delegate.uid}`)
        } 
        else {
          dispatch(actions.login.loginRequest(
            {
              userName: response.data.data.userName,
              password: response.data.data.password
          }
          ))
        }  
      }
  })
  };
  const onSubmit = useCallback((e) => {
  try{
    e.preventDefault();
    dispatch(actions.login.loginRequest(data))
  }
  catch(err){ 
    dispatch(actions.login.loginFailure())
  }
},[dispatch, data])
useEffect(()=>{
  if(!loginSuccess.isLoggedIn){
    setErrMessage(loginSuccess.err)
  }
},[loginSuccess])
useEffect(()=> {
  if(loginSuccess.token){
    localStorage.setItem("token",loginSuccess.token)
  }
  else{
    localStorage.removeItem("token")
  }
},[loginSuccess])
useEffect(()=> {
  if(loginSuccess.currentUser){
    window.location.href = 'http://localhost:3000/';
  }
},[navigate, loginSuccess])
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/" className="login__logo">
          <img
            src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png"
            alt=""
          />
        </Link>
        <p>{errMessage}</p>
        <form action="" method="POST" className="login__form" >
          <input
            type="text"
            placeholder="Tên đăng nhập hoặc email"
            name="userName"
            className="login__form-input"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            className="login__form-input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="login__form-button" type="submit" onClick={onSubmit}>
            Đăng nhập
          </button>
        </form>
        <p className="login__text">Đăng nhập bằng</p>
        <div className="login__facebook">
          <div className="login__facebook-link">
            <button className="login__form-button fb" onClick={handleAuthFacebook}>
              <i className="login__icon bx bxl-facebook"></i>
              <span className="login__text fb">Facebook</span>
            </button>
          </div>
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
