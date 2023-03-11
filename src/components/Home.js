import React from 'react'
import './Home.css';
import iphone from  './iphone.jpeg';
import cart from './cart.jpeg'

const Home = () => {
  return (
    <div className='home-main'>
      <h1>This is the home container...</h1>
      <div className="cart-icon">
        <img src={cart} alt="error" />
      </div>
      <div className="card">
        <div className="data-sec">
          <img src={iphone} alt="error" />
          <h3>Iphone 13 pro</h3>
          <h2>$45.54</h2>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home