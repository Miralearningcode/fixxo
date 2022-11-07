import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  const products = useContext(ProductsContext)

  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Products" items= {products} />
      <FooterSection />
    </>
  )
}

export default ProductsView