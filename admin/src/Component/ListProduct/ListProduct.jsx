import React, { useEffect, useState } from 'react';
import cross_icon from '../../assets/cross_icon.png'
import './ListProduct.css'

const ListProduct = () => {

  console.log("List product called")

  const [allproducts,setAllProducts]=useState([]);

  // this function will fetch the all products
  const fetchInfo=async()=>
  {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{fetchInfo()},[]);

  

  const remove_product=async(id)=>
  {
      await fetch('http://localhost:4000/removeproduct',{
      method:"POST",
      headers:
      {
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id}),
    })

    await fetchInfo();


  }





  return (
    <div className='list-product'>
    <h1>All Product Lists</h1>
    <div className='listproduct-format-main'>
    <p>Products</p>
    <p>Title</p>
    <p>Old price</p>
    <p>New Price</p>
    <p>Category</p>
    <p>reomove</p>
    </div>
    <div className='listproduct-allproducts'>
    <hr/>
    {
      allproducts.map((product,index)=>
      { return  (
        <><div key={index} className='listproduct-format-main list-product-format' >
        <img src={product.image} alt="" className='listproduct-product-icon'/>
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <p>{product.category}</p>
        <img  onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} />
        </div>
        <hr/>
        </>)
      })
    }

    </div>




    </div>
  )
}

export default ListProduct