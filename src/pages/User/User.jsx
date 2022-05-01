import React from 'react'
import {Link } from 'react-router-dom'
import './user.scss'
const User = () => {
  return (
    <div className="main">
      <div className="user">
          <div className="user__cover">
              <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-cover/f2d00730a5c611ec95ba851d0a1d5ff1.jpeg" alt="" />
          </div>
          <div className="user__profile">
              <div className="user__profile-content">
                  <div className="user__profile-sidebar">
                      <div className="user__profile-dynamic">
                          <div className="user__profile-widget">
                            <div className="user__profile-widget-body">
                                <div className="user__profile-widget-content">
                                    <div className='user__profile-widget-avt'>
                                        <Link to='/' className='user__profile-widget-avt-link'>
                                            <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/888b36f07f5711ec834d91a0b30645b4.png" alt="" />
                                        </Link>
                                    </div>
                                    <h1 className="user__profile-widget-disname" >
                                        <Link to='/'>Trà Kha</Link>
                                    </h1>
                                    <p className='user__profile-widget-username'>
                                        <Link to='/'>@inrajakha</Link>
                                    </p>
                                    <div className='user__profile-widget-bio'>♩ ♪ ♫ ♬ ♭ ♪ ♩ ♪♫</div>
                                    <div className='user__profile-widget-button'>
                                        <button className='user__profile-widget-button-item'>
                                            <span>Theo dõi</span>
                                        </button>
                                        <button className='user__profile-widget-button-item'>
                                            <span>Nhắn tin</span>
                                        </button>
                                    </div>
                                    <div className='user__profile-widget-stats'>
                                        <div>
                                            <p className='label'>Followers</p>
                                            <p className='value'>5373</p>
                                        </div>
                                        <div>
                                            <p className='label'>Following</p>
                                            <p className='value'>5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div className="user__profile-widget">
                              <div>
                                  <span>Donate</span>
                              </div>
                              <div>
                                  <p>Nếu muốn ủng hộ tác giả, các bạn có thể làm theo hướng dẫn sau.</p>
                                  <Link to="/">
                                    <span>Ủng hộ</span>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default User