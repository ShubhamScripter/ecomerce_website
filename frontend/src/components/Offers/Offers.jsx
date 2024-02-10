import React from 'react';
import exclusive_image from '../Assests/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
    <div className='offers_left'>
        <h1 style={{marginLeft:"50px"}}>Exclusive</h1>
        <h1>Offers for you</h1>
        <p style={{marginLeft:"30px"}}>only for best product seller</p>
        <button >check now</button>
    </div>
      <div className='offers_right'>
        <img src={exclusive_image} alt="exclusive image"></img>
      </div>
    </div>
  )
}

export default Offers;
