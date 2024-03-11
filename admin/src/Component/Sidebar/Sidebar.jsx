import React from 'react'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to='/addproduct' style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
    <img src={add_product_icon}/>
    <p>Add Product</p>
    </div>
    </Link>
    <Link to='/listproduct' style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
    <img src={list_product_icon}/>
    <p>Product List</p>
    </div>
    </Link>
    </div>
  )
}

export default Sidebar