import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/dropdown_icon.png'


const Navbar = () => {

    const [menu,setmenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle=(e)=>
    {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');

    }


  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt='nav_logo'></img>
    <p>SHOPPER</p>
    </div>
    <img style={{cursor:"pointer"}} className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown}></img>
    <ul ref={menuRef} className='nav-menu'>
        <li  onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none"}} to='/' >Shop </Link> {menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("men")}}><Link  style={{textDecoration:"none"}} to='/mens'>Mens</Link>{menu==="men"?<hr/>:null}</li>
       <li onClick={()=>{setmenu("women")}}> <Link  style={{textDecoration:"none"}} to='/womens'>Womens</Link> {menu==="women"?<hr/>:null}</li>
       <li onClick={()=>{setmenu("kids")}}> <Link  style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:null}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart_icon"></img></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
      
    </div>
  )
}

export default Navbar
