import React, {useEffect} from 'react'
import Suggest from '../../components/Suggest/Suggest';
import PostofMonth from '../../components/PostofMonth/PostofMonth';
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { allPostsState$   } from '../../redux/selectors'
const Home = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(allPostsState$ )
  // useEffect(() => {
  //   dispatch(actions.getAllPosts.getAllPostsRequest())
  // }, [dispatch]);
  // console.log(posts)
  return (
    <main className='main'>
        <Suggest/>
        <PostofMonth/>
        {/* {
          posts.data.map((post, i) => (
            <p>{post.title}</p>
          ))
        } */}
        <Filter/>
    </main>
  )
}

export default Home