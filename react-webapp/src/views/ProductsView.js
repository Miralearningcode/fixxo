import React from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = ({items = []}) => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Products" products={items} />
      <FooterSection />
    </>
  )
}

export default ProductsView