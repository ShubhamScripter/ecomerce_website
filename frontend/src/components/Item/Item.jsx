import React from 'react'
import hero_image from '../Assests/hero_image.png'
import './Item.css'

const Item = ({name,image,old_price,new_price}) => {

  console.log(name);

  return (
    <div className='item'>
    <img src={image} />
    <p>{name}</p>
      <div className='item-price'>
        <div className='item-price-new'>${new_price}</div>
        <div className='item-price-old'>${old_price}</div>
      </div>
    </div>
  )
}

export default Item
