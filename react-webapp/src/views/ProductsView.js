import React from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Products"  />
      <FooterSection />
    </>
  )
}

export default ProductsView