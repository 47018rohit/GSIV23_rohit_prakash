import React from 'react'
import "./details.css"

const Details = () => {
  return (
    <section id='detailWrapper'>
      <section className='detailPic'></section>
      <section className='details'>
        <h1>Movie Title <span>(Rating)</span> </h1>
        <h3>Year | Length | Director</h3>
        <h3>Cast: Act1, act2 ... </h3>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt reiciendis, nesciunt eaque aliquid corporis explicabo quasi doloribus ex voluptatum quos molestias, possimus quod tempora voluptates tempore illum, error expedita eveniet hic sit ipsa commodi eum minima! Velit excepturi amet reprehenderit exercitationem dignissimos architecto perferendis!</p>
      </section>
    </section>
  )
}

export default Details
