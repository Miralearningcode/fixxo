import React, { useContext } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { ProductContext } from '../contexts/contexts'

const ProductGridSection = ({title}) => {
  const products = useContext(ProductContext)

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"> 
                {
                  products.featuredProducts.map(product => <ProductCardComponent key={product.articleNumber} product={product} />)
                }  
            </div>  
        </div>
    </section>
  )
}

export default ProductGridSection