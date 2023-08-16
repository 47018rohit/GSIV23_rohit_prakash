import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <section id='homeWrapper'>
      <div className='card'>
        <section className='moviePic'></section>
        <section className='detailWrapper'>
          <div className='titleWrapper'>
            <span>Movie Title</span>
            <span>(Rating)</span>
          </div>
          <div className='description'>Description</div>
        </section>
      </div>
    </section>
  )
}

export default Home
