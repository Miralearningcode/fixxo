import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'

const ProductGridSection = () => {
  return (
    <section className="product-grid">
        <div className="container">
            <h1>Featured Products</h1>
            <div className="row row-cols-1 row-cols-md-2 g-3"> 
                <ProductCardComponent />   
                <ProductCardComponent /> 
                <ProductCardComponent /> 
                <ProductCardComponent /> 
                <ProductCardComponent /> 
                <ProductCardComponent /> 
                <ProductCardComponent /> 
                <ProductCardComponent /> 
            </div>  
        </div>
    </section>
  )
}

export default ProductGridSection