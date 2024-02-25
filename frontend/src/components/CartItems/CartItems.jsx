import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItems = () => {

const {all_product,cartItems,addItemToCart,removeItemFromCart,getTotalCartAmount}=useContext(ShopContext);

  return (
    <div className='cartitems'>
    <div className='cartitems-format-main'>
    <p>product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr/>
    {
        all_product.map((e)=>
        {
            if(cartItems[e.id]>0)
            {
                return <div>
        <div className='cartitems-format cartitems-format-main'>
        <img  src={e.image} className='carticon-product-icon'></img>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>{e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-icon' onClick={()=>{removeItemFromCart(e.id)}} src={remove_icon}></img>
        </div>
        <hr/>
    </div>
        }
        })
    }
    <div className='cartitems-down'>
    <div className='cartitems-total'>
    <h1>cart total</h1>
    <div>
        <div className='caritms-total-item'>
        <p>subtotal</p>
        <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        <div className='caritms-total-item'>
        <p>Shipping Free</p>
        <p>Free</p>
        </div>
        <hr/>
        <div className='caritms-total-item'>
        <p>Total</p>
        <p>${getTotalCartAmount()}</p>
        </div>
    </div>
    <button>Proceed to CHECKOUT</button>
    </div>
    <div className='cartitems-promocode'>
        <p>if you have a promo code, enter here</p>
        <div className='cartitems-promobox'>
        <input type='text' placeholder='promocode'></input>
        <button>Submit</button>
        </div>
    </div>

    </div>
      
    </div>
  )
}

export default CartItems
