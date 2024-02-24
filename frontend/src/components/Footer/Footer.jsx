import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-logo'>
    <img src={footer_logo}></img>
    <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
    <li>Compnay</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contacts</li>
    </ul>
<div className='footer-social-icon'>
<div className='footer-icons-container'>
<img src={instagram_icon}></img>
</div> 
<div className='footer-icons-container'>
<img src={pintester_icon}></img>
</div> 
<div className='footer-icons-container'>
<img src={whatsapp_icon}></img>
</div> 
</div>
<div className='footer-copyright'>
<hr/>
<p>Copyright @ 2024 - All Right Reserved </p>
</div>
      
    </div>
  )
}

export default Footer
