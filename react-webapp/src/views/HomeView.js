import React from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Featured Products" />
      <FooterSection />
    </>
  )
}

export default HomeView