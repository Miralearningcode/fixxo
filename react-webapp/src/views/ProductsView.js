import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  const productContext = useContext(ProductContext)

  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Products" items= {productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView