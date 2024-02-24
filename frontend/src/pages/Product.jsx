import React, { useContext} from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext.js'
import Breadcrums from '../components/Breadcrums/Breadcrums.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
 
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();

  const product=all_product.find((e)=>e.id===Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
