import React, { useState } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
    {}
  ])

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"> 
                <ProductCardComponent />   
            </div>  
        </div>
    </section>
  )
}

export default ProductGridSection