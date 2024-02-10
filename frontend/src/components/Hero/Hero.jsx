import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import hero_image from '../Assests/hero_image.png'
import arrow_icon from '../Assests/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero_left'>
        <h2>New arrivals only</h2>
        <div>
        <div className='hero-hand-icon'>
        <p>new</p>
        <img src={hand_icon}/>
        </div>
        <p>Collections</p>
        <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
        <div>Latest Collections</div>
        <img src={arrow_icon} />
    </div>
    </div>
    <div className='hero_right'>
    <img src={hero_image}></img>
    </div>  
    </div>
  )
}

export default Hero
