import React from 'react'
import './login.scss'
import {Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className="login__container">
          <Link to='/' className="login__logo">
            <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png" alt="" />
          </Link>
        <form action="" className='login__form'>
          <input type="text" placeholder='Tên đăng nhập hoặc email' name='username' className='login__form-input' />
          <input type="password" placeholder='Mật khẩu' name='password' className='login__form-input' />
          <button className='login__form-button' name='btnSubmit' type='submit'>Đăng nhập</button>
        </form>
        <p className='login__text'>Đăng nhập bằng</p>
        <div className="login__facebook">
          <Link to='/' className="login__facebook-link" >
            <button className='login__form-button fb'>
              <i className='login__icon bx bxl-facebook'></i>
              <span className='login__text fb'>Facebook</span>
            </button>
          </Link>
        </div>
        <Link to="/">
          <p className='login__text link'>Quên mật khẩu?</p>
        </Link>
        <span className='login__text'>Không có tài khoản?</span>
        <a href="/register">
          <span className='login__text link'> Đăng ký ngay</span>
        </a>
      </div>
    </div>
  )
}
export default Login