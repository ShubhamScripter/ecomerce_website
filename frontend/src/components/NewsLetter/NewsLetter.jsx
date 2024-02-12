import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offers on your Email</h1>
    <p>Subscribe to our newsletter and have updated</p>
    <div>
        <input type='email' placeholder='enter your email'></input>
        <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default NewsLetter
