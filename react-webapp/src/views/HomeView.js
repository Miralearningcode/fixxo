import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { FeaturedProductsContext, FlashSaleLeftContext} from '../contexts/contexts'
import HeroSection from '../sections/HeroSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleLeftSection from '../sections/FlashSaleLeftSection'
import AboutUsSection from '../sections/AboutUsSection'


const HomeView = () => {
  const featured = useContext(FeaturedProductsContext)
  const flashSaleLeft = useContext(FlashSaleLeftContext)
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <NavigationBarSection />
      <HeroSection />
      <ProductGridSection title="Featured Products" items={featured}/>
      <BannerSection />
      <FlashSaleLeftSection items={flashSaleLeft}/>
      <AboutUsSection />
      <FooterSection />
    </>
  )
}

export default HomeView