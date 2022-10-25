import React from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Featured Products" />
      <FooterSection />
    </>
  )
}

export default HomeView