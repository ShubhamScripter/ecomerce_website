import React from 'react'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import './ProductDisplay.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const {addItemToCart}=useContext(ShopContext);
  const {product}=props;

  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image}></img>
            <img src={product.image}></img>
            <img src={product.image}></img>
            <img src={product.image}></img>
        </div>
        <div className='productdisplay-image'>
        <img className='productdisplay-main-image' src={product.image}>
        </img>
        </div>
    </div>
      <div className='productdisplay-right'>
      <h1>{product.name}</h1>
      <div className='productdisplay-right-star'>
      <img src={star_icon}></img>
      <img src={star_icon}></img>
      <img src={star_icon}></img>
      <img src={star_icon}></img>
      <img src={star_dull_icon}></img>
      <p>(122)</p>
      </div>
      <div className='productdisplay-right-price'>
      <div className='productdisplay-right-price-old'>$ {product.old_price}</div>
      <div className='productdisplay-right-price-new'>$ {product.new_price}</div>
      </div>
      <div className='productdisplay-right-description' style={{fontSize:"14px"}}>
      softness, breathability, and durability to showcase the value of the garment. Well-detailed clothing description examples clearly articulate the style and design elements of an item. Explain any unique elements, such as ruffles, pleats, or embroidery, in grave detail.
      </div>
      <div className='productdisplay-right-size'>
      <h1>Product Size</h1>
      <div className='productdisplay-right-sizes'>
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
      </div>
      </div>
      <button onClick={()=>{addItemToCart(product.id)}}> ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>Women , T-shirt , CropTop</p>
      <p className='productdisplay-right-category'><span>Tages :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay;
