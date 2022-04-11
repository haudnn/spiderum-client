import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'
const Register = () => {
  return (
    <div className='register'>
      <div className="register__container">
          <Link to='/' className="login__logo">
            <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png" alt="" />
          </Link>
          <form action="" className='login__form' method='POST'>
            <input type="text" placeholder='Tên đăng nhập' name='username' className='login__form-input' />
            <input type="text" placeholder='Tên hiển thị' name='displayname' className='login__form-input' />
            <input type="password" placeholder='Mật khẩu' name='password' className='login__form-input' />
            <input type="password" placeholder='Nhập lại mật khẩu' name='repassword' className='login__form-input' />
            <button className='login__form-button' name='btnSubmit' type='submit'>Đăng ký</button>
        </form>
      </div>
    </div>
  )
}

export default Register