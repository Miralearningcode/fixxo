import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductGridSection = () => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="section-title">
                <h1>Featured products</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-1"> 
                <ProductCardComponent />   
            </div>  
        </div>
    </section>
  )
}

export default ProductGridSection