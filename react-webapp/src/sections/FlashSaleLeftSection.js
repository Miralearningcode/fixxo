import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'


const FlashSaleLeftSection = ({title, items = []}) => {
  
  return (
    <section className="flashsale-left container border">
        <div className="flashsale-box">
            <h1 className="flashsale-title">2 FOR USD $29</h1>
            <button className="btn btn-lg btn-theme">
                <span className="btn-theme-left-border"></span>
                FLASH SALE
                <span className="btn-theme-right-border"></span>
            </button> 
        </div>
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"> 
                {
                  items.map(product => <ProductCardComponent key={product.articleNumber} product={product} />) //Hans har item={product}
                }  
            </div>  
        </div>
    </section>
    </section>
  )
}

export default FlashSaleLeftSection