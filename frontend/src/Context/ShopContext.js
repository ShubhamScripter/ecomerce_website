import React, { createContext, useState } from 'react';
import all_product from "../components/Assests/all_product"

export const ShopContext=createContext(null);

const getDefaultCart=()=>{

    let cart={};
    for(let index=0;index<all_product.length;index++)
    {
        cart[index]=0;
    }

    return cart;

}


export const ShopContextProvider=(props)=>
{
    const [cartItems,setCartItems]=useState(getDefaultCart());

  

    const addItemToCart=(itemId)=>
    {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
        console.log("function called");

    }
    const removeItemFromCart=(itemId)=>
    {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }


    const contextvalue={all_product,cartItems,addItemToCart,removeItemFromCart};
    return(
        <ShopContext.Provider value={contextvalue}>
        {props.children}
        </ShopContext.Provider>
    )
}
