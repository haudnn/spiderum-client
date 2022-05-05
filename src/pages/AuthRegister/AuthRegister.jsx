import React from 'react'
import {Link } from "react-router-dom"
import './authregister.scss'
const AuthRegister = () => {
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__logo">
            <Link to="/">
              <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png" alt="" />
            </Link>
          </div>
          <form className="auth__logging">
              <div className="auth__logging-fb">
                <label className='auth__logging-tilte'>Đăng ký bằng</label>
                <Link to="/" className='auth__logging-fb-btn'>
                  <i class='bx bxl-facebook'></i>
                  <span>Facebook</span>
                </Link>
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