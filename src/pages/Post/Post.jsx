import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools.js";
import { useLocation, Link } from "react-router-dom";
import { createPost } from "../../redux/actions";
import FileBase64 from "react-file-base64";
import "./post.scss";
const Post = () => {
  const ReactEditorJS = createReactEditorJS();
  const instanceRef = useRef(null);
  const refEdit = useRef();
  const [visible, setVisible] = useState(false);
  const [slug, setSlug] = useState('');
  const location = useLocation()
  const [data, setData] = useState({
    title:'', 
    content:'',
    attachment: ''
  });
  const handleVisibleModal = () => setVisible(!visible)
  let toolSlug = require('vietnamese-slug');
  const changeToSlug = () => {
    setSlug(toolSlug(refEdit.current.textContent+'-'+location.key))
  }
  return (
    <div className="mt-80">
      <div className="post">
        <div className="post__container">
          <div
            suppressContentEditableWarning
            placeholder="Tiêu đề bài viết......."
            className="post__title"
            ref={refEdit}
            onKeyUp={changeToSlug}
          ></div>
          <div
            className=" post__content ce-paragraph cdx-block undefined"
            suppressContentEditableWarning
          >
            <ReactEditorJS
              instanceRef={(instance) => (instanceRef.current = instance)}
              tools={EDITOR_JS_TOOLS}
              i18n={{ messages: {} }}
              placeholder="Nội dung bài viết"
              data={{
                time: "123",
                version: "2.1",
              }}
            />
          </div>
          <div className="post__button">
            <button className="post__button-main border save">Lưu nháp</button>
            <button className="post__button-main border next" onClick={handleVisibleModal}>
              Bước tiếp theo
            </button>
          </div>
        </div>
      </div>
     {
       visible &&  <div className="modal">
       <div className="modal__container">
         <div className="modal__content">
           <div className="modal__desc">
             <p className="modal__title">
               Mô tả bài viết
               <em className="modal__title-sub"> (không bắt buộc)</em>
             </p>
             <textarea className="modal__desc-input"></textarea>
           </div>
           <div className="modal__tagname">
             <p className="modal__title">
               Thêm thẻ tag
               <em className="modal__title-sub"> (tối đa 5 thẻ)</em>
             </p>
             <div className="modal__tagname-container">
               <div className="tagname__search">
                 <i className="tagname__search-icon bx bx-search"></i>
                 <input
                   type="text"
                   className="tagname__search-input"
                   placeholder="Tìm thẻ tag..."
                 />
               </div>
               <div className="tagname__selected">
                 <div className="tagname__selected-container">
                   <span className="tagname__selected-content name">
                     KHOA HỌC
                   </span>
                   <span className="tagname__selected-content quantity">
                     1102
                   </span>
                 </div>
               </div>
             </div>
           </div>
           <div className="modal__category">
             <p className="modal__title">Chọn danh mục</p>
             <div className="modal__category-container">
               <select id="selected-id" className="modal__category-select">
                 <option className="modal__category-option">
                   -- Chọn danh mục --
                 </option>
                 <option className="modal__category-option">
                   Quan điểm - Tranh luận
                 </option>
                 <option className="modal__category-option">
                   Truyền cảm hứng
                 </option>
                 <option className="modal__category-option">
                   Khoa học - Công nghệ
                 </option>
                 <option className="modal__category-option">Science2vn</option>
                 <option className="modal__category-option"> Thể thao </option>
                 <option className="modal__category-option"> Game </option>
                 <option className="modal__category-option">
                   Sự kiện Spiderum
                 </option>
                 <option className="modal__category-option">Otakulture</option>
                 <option className="modal__category-option"> Sáng tác </option>
                 <option className="modal__category-option"> Comics </option>
                 <option className="modal__category-option"> Phim </option>
                 <option className="modal__category-option"> Sách </option>
                 <option className="modal__category-option">
                   Du lịch - Ẩm thực
                 </option>
                 <option className="modal__category-option"> Kỹ năng </option>
                 <option className="modal__category-option"> Âm nhạc </option>
                 <option className="modal__category-option">
                   English Zone
                 </option>
                 <option className="modal__category-option">
                   Chuyện trò - Tâm sự
                 </option>
               </select>
               <div className="modal__category-icon">
                   <i className='modal__category-icon-down bx bxs-chevron-down' ></i>
               </div>
             </div>
           </div>
           <div className="modal__button">
             <button className="modal__button-content back" onClick={handleVisibleModal} >Quay lại</button>
             <Link to={`/post/${slug}`}>
              <button className="modal__button-content create">Tạo</button>
             </Link>
           </div>
         </div>
       </div>
     </div>
     }
    </div>
  );
};

export default Post;
