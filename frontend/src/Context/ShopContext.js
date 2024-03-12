import React, { createContext, useEffect, useState } from 'react';
import CartItems from '../components/CartItems/CartItems';

export const ShopContext=createContext(null);

const getDefaultCart=()=>{

    let cart={};
    for(let index=0;index<301;index++)
    {
        cart[index]=0;
    }

    return cart;

}


export const ShopContextProvider=(props)=>
{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const [all_product,setAll_Product]=useState([]);

    useEffect(()=>
    {
        console.log("yes useffect called");
         fetch("http://localhost:4000/allproducts").then((res)=>res.json()).then((data)=>{setAll_Product(data); console.log("all products fetch called");});

         if(localStorage.getItem('auth-token'))
        {
     fetch('http://localhost:4000/getcart',{
    method:"POST",
    headers:
    {
      Accept:"application/form-data",
      'auth-token':`${localStorage.getItem('auth-token')}`,
      'content-type':'application/json'
    },
    body:""
  }).then((res)=>res.json()).then((data)=>{setCartItems(data)});

 } },[])

  

    const addItemToCart=(itemId)=>
    {

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token'))
        {
     fetch('http://localhost:4000/addtocart',{
    method:"POST",
    headers:
    {
      Accept:"application/form-data",
      'auth-token':`${localStorage.getItem('auth-token')}`,
      'content-type':'application/json'
    },
    body:JSON.stringify({"itemId":itemId})
  }).then((res)=>res.json()).then((data)=>{console.log(data)});


        }

    }
    const removeItemFromCart=(itemId)=>
    {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token'))
        {
     fetch('http://localhost:4000/removefromcart',{
    method:"POST",
    headers:
    {
      Accept:"application/form-data",
      'auth-token':`${localStorage.getItem('auth-token')}`,
      'content-type':'application/json'
    },
    body:JSON.stringify({"itemId":itemId})
  }).then((res)=>res.json()).then((data)=>{console.log(data)});


        }
        

    }

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo=all_product.find((product)=>product.id===Number(item));
            totalAmount+=itemInfo.new_price*cartItems[item];
        }
       
    }
    return totalAmount;

}

const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+=cartItems[item]
        }
       
    }
    return totalItem;

}



    const contextvalue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addItemToCart,removeItemFromCart};
    return(
        <ShopContext.Provider value={contextvalue}>
        {props.children}
        </ShopContext.Provider>
    )
}
