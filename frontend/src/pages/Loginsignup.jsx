import React from 'react'
import './CSS/LoginSignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
    <div className='loginsignup-container'>
    <h1>Sign Up</h1>
    <div className='loginsignup-fields'>
    <input type='text' placeholder='Your Name'></input>
    <input type='email' placeholder='enter your email'></input>
    <input type='password'></input>
    </div>
    <button>continue</button>
    <p className='loginsignup-login'>Already Have A Acoount <span>Login Here</span></p>
    <div className='loginsignup-agree'>
    <input type='checkbox' name='' id='' />
      <p>By continuing , i agree to term of use and policies</p>
    </div>
    </div>
      
    </div>
  )
}

export default Loginsignup
