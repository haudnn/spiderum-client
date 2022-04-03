import React from 'react'
import Suggest from '../../components/Suggest/Suggest';
import PostofMonth from '../../components/PostofMonth/PostofMonth';
import Filter from '../../components/Filter/Filter';
const Home = () => {
  return (
    <main className='main'>
        <Suggest/>
        <PostofMonth/>
        <Filter/>
    </main>
  )
}

export default Home