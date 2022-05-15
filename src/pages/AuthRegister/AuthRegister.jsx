import React, {useCallback, useEffect, useState} from 'react'
import {Link, useNavigate } from "react-router-dom"
import firebase,{ auth } from '../../components/firebase/config'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {  userState$ } from '../../redux/selectors'
import * as actions from '../../redux/actions'
import './authregister.scss'
const AuthRegister = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginSuccess = useSelector( userState$)
  const [email, setEMail] = useState({});
  const [visible, setVisible] = useState(false)
  const [messages, setMessages] = useState(null)
  const [err, setErr] = useState(false)
  const [otp, setOtp] = useState(0)
  const fbProvider = new firebase.auth.FacebookAuthProvider()
  const handleAuthFacebook = async () => {
    await auth.signInWithPopup(fbProvider)
    auth.onAuthStateChanged(async (user) => {
      if(user._delegate.accessToken) {
        const option  ={
          method: "post", 
          url:`/api/v1/auth/facebook/`,
          data:{
            uid:user._delegate.uid,
            token:user._delegate.accessToken
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
  useEffect(()=> {
    if(loginSuccess.token){
      localStorage.setItem("token",loginSuccess.token)
    }
    else{
      localStorage.setItem("token",'')
    }
  },[loginSuccess])
  useEffect(()=> {
    if(loginSuccess.currentUser){
      window.location.href = 'http://localhost:3000/';
    }
  },[navigate, loginSuccess])
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  },[])
  const handleAuthMail = useCallback( async (e) => {
    e.preventDefault();
    const option  ={
      method: "post", 
      url:`/api/v1/auth/send`,
      data:email
    }
    const response = await axios(option)
    setMessages(response.data.data)
    setVisible(!visible)
    setErr(false)
  },[visible,email])
  const handleSubmitOTP = useCallback( async (e) => {
    e.preventDefault();
    try{
      const option  ={
        method: "post", 
        url:`/api/v1/auth/mail`,
        data:{
          "otp" : (parseInt(otp.otp))
        }
      }
      const response = await axios(option)
      navigate(`/tao-tai-khoan?token=${response.data.data}&email=${email.email}`)
    }
    catch(err) {
      setErr(true)
      setMessages(err.response.data.data)
    }
  },[otp,navigate,email])
  return (
    <>
    {
      messages ? (
        <div className="alert-auth ">
          <div className={`uk-alert ${err ? "err" : ""}`}>
            <div>{messages}</div>
          </div>
      </div>
      ) : ""
    }
    <div className="auth">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__logo">
            <Link to="/">
              <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png" alt="" />
            </Link>
          </div>
          <div className="auth__logging" >
              <form action="" onSubmit={handleSubmit}>
                <div className="auth__logging-fb">
                  <label className='auth__logging-tilte'>Đăng ký bằng</label>
                  <button className='auth__logging-fb-btn' onClick={handleAuthFacebook}>
                    <i class='bx bxl-facebook'></i>
                    <span>Facebook</span>
                  </button>
                </div>  
              </form>
              <p className='auth__logging-tilte'>Hoặc bằng email</p>          
              <form className="auth__logging-email" onSubmit={handleSubmit}>
                <div className="auth__logging-email-sending" >
                  <input className='auth__logging-email-input' value={email.mail} onChange={(e) => setEMail({ ...email, email: e.target.value })} type="text" placeholder='email@example.com'/>
                  <div className="auth__logging-email-send-two">
                    <p>Thư xác nhận sẽ được gửi vào hòm thư của bạn</p>
                    <button type="submit" value="Gửi" onClick={handleAuthMail}>Gửi</button>
                  </div>
                </div>
              </form>
              {
                visible ? (
                  <form action=""  onSubmit={handleSubmit}>
                  <div className="otp">
                    <input className='auth__logging-email-input' value={otp.otp} onChange={(e) => setOtp({ ...otp, otp: e.target.value })}  type="text" placeholder='Nhập mã OTP tại đây...' />
                    <button type="submit" onClick={handleSubmitOTP}>Xác nhận</button>
                  </div>
                </form>
                ) : ""
              }
          </div>
          <div className="auth__back">
            <p>
              <span className='auth__logging-tilte'>Đã có tài khoản? </span>
              <Link to="/login" className="auth__back-login">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AuthRegister