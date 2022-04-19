import React, { useCallback, useRef, useState,useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { Link, useNavigate } from "react-router-dom";
import "./post.scss";
import * as actions from "../../redux/actions/";
import { useDispatch, useSelector } from "react-redux";
import {allPostsState$} from '../../redux/selectors/'
import config from './tools'
const Post = () => {
  const posts = useSelector(allPostsState$)
  console.log(posts)
  const dispatch = useDispatch();
  const [editor, seteditor] = useState({});
  const refEdit = useRef();
  const [visible, setVisible] = useState(false);
  const navigate  = useNavigate();
  const [data, setData] = useState(
    {
      title: "",
      content: "",
      description:"",
  }
    );

  useEffect(() => {
    const editor = new EditorJS(config());
    seteditor(editor);
}, []);
// const editorJS = new EditorJS({
//   onChange: async () => {
//     const data = await editorJS.save();
//     if (!equal(prevEditorJSData?.blocks, data.blocks)) {
//       
//     }

//     prevEditorJSData = data;
//   },
// });
const handleVisibleModal = useCallback((e) => {
  e.preventDefault();
  editor.save()
  .then((outputData) => {
      setData({ ...data, content: outputData })
      }).catch((error) => {
      console.log('Saving failed: ', error)
  })
  setVisible(!visible)
},[visible,editor,data])
const onSave = useCallback((e) => {
  try{
    e.preventDefault();
    dispatch(actions.createPost.createPostRequest(data))
  }
  catch(err){ 
    dispatch(actions.createPost.createPostFailure())
  }
},[data,dispatch])
const onSubmit = useCallback((e)=>{
  e.preventDefault();
},[])
useEffect(()=>{
  if( posts.post && posts.isLoading){
    navigate(`/post/${posts.post.data.post.slug}`)
   }
},[posts,navigate])
   return (
    <div className="mt-80">
      <div className="post">
        <form action="" method="POST" onSubmit={onSubmit}>
          <div className="post__container">
              <div
                suppressContentEditableWarning
                placeholder="Tiêu đề bài viết......."
                className="post__title"
                ref={refEdit}
                value={data.title}
                onInput={(e) => setData({ ...data, title: e.currentTarget.textContent })}
              ></div>
              <div className="post__content">
                <div id="editorjs"/>
              </div>
              <div className="post__button">
                <button className="post__button-main border save">
                  Lưu nháp
                </button>
                <button
                  className="post__button-main border next"
                  onClick={handleVisibleModal}
                >
                  Bước tiếp theo
                </button>
              </div>        
          </div>
          {visible && (
            <div className="modal">
              <div className="modal__container">
                <div className="modal__content">
                  <div className="modal__desc">
                    <p className="modal__title">
                      Mô tả bài viết
                      <em className="modal__title-sub"> (không bắt buộc)</em>
                    </p>
                    <textarea className="modal__desc-input" 
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}>
                    </textarea>
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
                        <option className="modal__category-option">-- Chọn danh mục --</option>
                        <option className="modal__category-option">Quan điểm - Tranh luận</option>
                        <option className="modal__category-option">Truyền cảm hứng</option>
                        <option className="modal__category-option">Khoa học - Công nghệ</option>
                        <option className="modal__category-option">Science2vn</option>
                        <option className="modal__category-option">Thể thao</option>
                        <option className="modal__category-option">Game</option>
                        <option className="modal__category-option">Sự kiện Spiderum</option>
                        <option className="modal__category-option">Otakulture</option>
                        <option className="modal__category-option">Sáng tác</option>
                        <option className="modal__category-option">Comics</option>
                        <option className="modal__category-option">Phim</option>
                        <option className="modal__category-option">Sách</option>
                        <option className="modal__category-option">Du lịch - Ẩm thực</option>
                        <option className="modal__category-option">Kỹ năng</option>
                        <option className="modal__category-option">Âm nhạc</option>
                        <option className="modal__category-option">English Zone </option>
                        <option className="modal__category-option">Chuyện trò - Tâm sự</option>
                      </select>
                      <div className="modal__category-icon">
                        <i className="modal__category-icon-down bx bxs-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="modal__button">
                    <button
                      className="modal__button-content back"
                      onClick={handleVisibleModal}
                    >
                      Quay lại
                    </button>
                    <Link  to="/">
                    <button onClick={onSave} type="submit" className="modal__button-content create">Tạo</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
