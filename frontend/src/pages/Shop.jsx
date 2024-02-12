import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections.jsx'
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div className='Shop'>
     <Hero/> 
     <Popular/>
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
    </div>
  )
}

export default Shop
