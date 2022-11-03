import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import HeroSection from '../sections/HeroSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleLeftSection from '../sections/FlashSaleLeftSection'
import AboutUsSection from '../sections/AboutUsSection'


const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <NavigationBarSection />
      <HeroSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
      <BannerSection />
      <FlashSaleLeftSection />
      <AboutUsSection />
      <FooterSection />
    </>
  )
}

export default HomeView