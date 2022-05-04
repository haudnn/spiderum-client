import React, {useEffect} from 'react'
import Suggest from '../../components/Suggest/Suggest';
import Adv from '../../components/Adv/Adv'; 
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { allPostsState$   } from '../../redux/selectors'
import TrendingPosts from '../../components/TrendingPosts/TrendingPosts';
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(allPostsState$ )
  useEffect(() => {
    dispatch(actions.getAllPosts.getAllPostsRequest())
  }, [dispatch]);
  return (
      <main className='main'>
        <div className="container">
        <Suggest/>
        <TrendingPosts posts={posts.data} slice={10} slidesToShow={4}/>
          <div className="grid">
            <div className="row">
              <div className="col l-8">
                <Filter posts={posts.data}/>
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