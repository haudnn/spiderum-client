import React, {useCallback, useEffect} from 'react'
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
  const fbProvider = new firebase.auth.FacebookAuthProvider()
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
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__logo">
            <Link to="/">
              <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png" alt="" />
            </Link>
          </div>
          <form className="auth__logging" onSubmit={handleSubmit}>
              <div className="auth__logging-fb">
                <label className='auth__logging-tilte'>Đăng ký bằng</label>
                <button className='auth__logging-fb-btn' onClick={handleAuthFacebook}>
                  <i class='bx bxl-facebook'></i>
                  <span>Facebook</span>
                </button>
              </div>            
              <div className="auth__logging-email">
              <p className='auth__logging-tilte'>Hoặc bằng email</p>
                <input className='auth__logging-email-input' type="text" placeholder='email@example.com'/>
                <div className="auth__logging-email-sending">
                  <p >Thư xác nhận sẽ được gửi vào hòm thư của bạn</p>
                  <input className= ""type="submit" value="Gửi" />
                </div>
              </div>
          </form>
          <div className="auth__back">
            <p>
              <span className='auth__logging-tilte'>Đã có tài khoản? </span>
              <Link to="/" className="auth__back-login">Đăng nhập</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthRegister