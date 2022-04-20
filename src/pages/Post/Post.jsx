import React,{useCallback,useEffect, useState} from 'react'
import {Link,useLocation } from 'react-router-dom'
import EditorJS from "@editorjs/editorjs";
import './post.scss'
import axios from 'axios';
import { Config}  from './tools';
const Post = () => {
    const location = useLocation()
    const [dataPost, setDataPost] = useState({});
    const [categoryPost, setCategoryPost] = useState({});
    const [authPost, setAuthPost] = useState({});
    const [content, setContent] = useState('')
    const path = location.pathname.split("/")[2];
    const getPost = useCallback( async()=>{
        const res = await axios.get(`/api/v1/posts/${path}`)
        setDataPost(res.data.post)
        setAuthPost(res.data.post.author)
        setCategoryPost(res.data.post.category)
    },[path])
    useEffect(()=>{
        getPost()
    },[getPost])
    useEffect(()=>{
        if(dataPost.content){
            dataPost.content.map((e)=>setContent(e))
        }
    },[dataPost])
    useEffect(() => {
        if(content){
        const editor = new EditorJS({
            holder: 'editorjs',
            readOnly:true,
            tools:Config,
            data: content,
        });
        }
    }, [dataPost,content]);
  return (
    <div className="mt-80">
          <div className="post__details-container">
        <div className="post__details-auth">
            <div className="post__details-category">
                <Link to={`/category/${categoryPost.slug}`}>
                    <span className="post__details-category-name">{categoryPost.name}</span>
                </Link>
            </div>
            <div className="post__details-title">
                <h1>{dataPost.title}</h1>
            </div>
            <div className="post__details-desc">
                <p>{dataPost.description}</p>
            </div>
            <div className="post__details mt-20 flex-box">
                <div className='flex-align-gap-10'>
                    <div className='post-avt-div'>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/aec845906a1911ec8130097cb62284e8.png" alt="" />
                    </div>
                    <div>
                        <Link to='/'>
                            <p className='post-username'>{authPost.userName}</p>
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
                <div id="editorjs"/>
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
    </div>
  )
}

export default Post