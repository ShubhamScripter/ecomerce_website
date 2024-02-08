import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'


const Navbar = () => {

    const [menu,setmenu]=useState("shop");



  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt='nav_logo'></img>
    <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}>Shop {menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("men")}}>Men{menu==="men"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("women")}}>Women {menu==="women"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("kids")}}>Kids {menu==="kids"?<hr/>:null}</li>
    </ul>
    <div className='nav-login-cart'>
        <button>login</button>
        <img src={cart_icon} alt="cart_icon"></img>
        <div className='nav-cart-count'>0</div>
    </div>
      
    </div>
  )
}

export default Navbar
