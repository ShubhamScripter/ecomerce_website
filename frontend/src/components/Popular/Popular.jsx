import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const [popular_in_women,setpopularinwomen]=useState([]);

  useEffect(()=>{
    
    fetch('http://localhost:4000/popularinwomen').then((res)=>res.json()).then((data)=>{setpopularinwomen(data)});
    },[])


  return (
    <div className='popular'>
    <h1>Popular in Women</h1>
    <hr />
    <div className='popular-item'>
    {
        popular_in_women.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })

    }

    </div>
      
    </div>
  )
}

export default Popular
