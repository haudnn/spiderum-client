import React from 'react'
import {Link } from 'react-router-dom'
import './postdetails.scss'
const PostDetails = () => {
  return (
    <div className="post__details-container">
    <div className="post__details-auth">
        <div className="post__details-category">
            <Link to='/'>
                <span className="post__details-category-name" >Chuyện trò - Tâm sự</span>
            </Link>
        </div>
        <div className="post__details-title">
            <h1>BỐ MẸ CŨNG LÀ LẦN ĐẦU LÀM BỐ MẸ</h1>
        </div>
        <div className="post__details-desc">
            <p>GEN Z là một thế hệ thật sự YẾU ĐUỐI? Hay chỉ là trò so sánh khập khiễng và là lối ngụy biện của hội chứng THƯỢNG ĐẲNG THẾ HỆ?.</p>
        </div>
        <div className="post__details mt-20 flex-box">
            <div className='flex-align-gap-10'>
                <div className='post-avt-div'>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/aec845906a1911ec8130097cb62284e8.png" alt="" />
                </div>
                <div>
                    <Link to='/'>
                        <p className='post-username'>Ke hoc viec</p>
                    </Link>
                    <span className='time-read'>52 phút trước</span>
                </div>
            </div>
            <div className='flex-align-gap-10'>
                <Link to='/'>
                    <span className='button-data edit'>Sửa</span>
                </Link>
                <Link to='/'>
                    <span className='button-data delete'>Xóa</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="post__details-content">
        <div className="post__details-content-container">
            <p>Đột nhiên dạo gần đây, sau hàng loạt những vụ việc đau lòng của các bạn trẻ, và dạo một vòng Spiderum. Tôi chợt nhận ra có một số người luôn dùng những lời tưởng chừng là “cao quý” và “mạnh mẽ” như:</p>
            <div className='tags__wrapper'>
                <Link className='post__tag' to='/'>YẾU ĐUỐI</Link>
                <Link className='post__tag' to='/'>THẾ HỆ</Link>
                <Link className='post__tag' to='/'>TÂM LY HỌC</Link>
                <Link className='post__tag' to='/'>THƯỢNG ĐẲNG</Link>
                <Link className='post__tag' to='/'>#GEN Z</Link>
            </div>
        </div>
        <div className='sticky-bar'>

        </div>
    </div>
    <div className='post__details-bar'>
        <div>
            
        </div>
    </div>
</div>
  )
}

export default PostDetails