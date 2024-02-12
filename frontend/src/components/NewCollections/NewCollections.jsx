import React from 'react';
import new_collection from '../Assests/new_collections'
import Item from '../Item/Item';
import './NewCollections.css'

const NewCollections = () => {
  return (
    
    <div className='new-collection'>
    <h1>NEW COLLCTIONS</h1>
    <hr/>
    <div className='collections'>
    {
        new_collection.map((item,index)=>
        {
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })
    }
    </div>

    </div>
      
  )
}

export default NewCollections
