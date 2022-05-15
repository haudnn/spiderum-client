import React, {useEffect, useState, useCallback} from 'react'
import Suggest from '../../components/Suggest/Suggest';
import Adv from '../../components/Adv/Adv'; 
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { allPostsState$   } from '../../redux/selectors'
import axios from 'axios';
const Home = () => {
  const [postsByCate, setPostsByCate] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector(allPostsState$ )
  useEffect(() => {
    dispatch(actions.getAllPosts.getAllPostsRequest())
  }, [dispatch]);
  const getPostSaved = useCallback( async (e) => {
    const token = localStorage.getItem("token");
    try{
      const option = {
        method: "get",
        url: `/api/v1/posts/category/post`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      setPostsByCate(response.data);
    }
    catch(err){

    }
  },[])
  useEffect(() => {
    getPostSaved()
  },[getPostSaved])
  useEffect(() => {
    document.title = "Spiderum | Mạng Xã Hội Chia Sẻ Quan Điểm - Kiến Thức Hàng Đầu Việt Nam"
 }, []);
  return (
      <main className='main'>
        <div className="container">
        <Suggest/>
          <div className="grid">
            <div className="row">
              <div className="col l-8">
                {
                  postsByCate ? (
                    <Filter posts={postsByCate ? postsByCate.data : ""}/>
                  ) : (
                    <Filter posts={posts.data}/>
                  )
                }     
              </div>
              <div className="col l-4">
                <Adv/>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home