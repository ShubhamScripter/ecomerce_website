import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import {Link} from 'react-router-dom'


const Navbar = () => {

    const [menu,setmenu]=useState("shop");



  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt='nav_logo'></img>
    <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
        <li  onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none"}} to='/' >Shop </Link> {menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("men")}}><Link  style={{textDecoration:"none"}} to='/mens'>Mens</Link>{menu==="men"?<hr/>:null}</li>
       <li onClick={()=>{setmenu("women")}}> <Link  style={{textDecoration:"none"}} to='/womens'>Womens</Link> {menu==="women"?<hr/>:null}</li>
       <li onClick={()=>{setmenu("kids")}}> <Link  style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:null}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart_icon"></img></Link>
        <div className='nav-cart-count'>0</div>
    </div>
      
    </div>
  )
}

export default Navbar
