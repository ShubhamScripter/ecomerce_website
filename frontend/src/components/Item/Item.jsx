import React from 'react'
import { Link } from 'react-router-dom'
import hero_image from '../Assests/hero_image.png'
import './Item.css'

const Item = ({name,image,old_price,new_price,id}) => {
  return (
    <div className='item'>
    <Link to={`/product/${id}`}><img onClick={()=>{window.scrollTo(0,0)}}  src={image} /></Link>
    <p>{name}</p>
      <div className='item-price'>
        <div className='item-price-new'>${new_price}</div>
        <div className='item-price-old'>${old_price}</div>
      </div>
    </div>
  )
}

export default Item
