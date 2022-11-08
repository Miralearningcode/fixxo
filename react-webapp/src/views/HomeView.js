import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { FeaturedProductsContext, FlashSaleLeftContext, FlashSaleRightContext} from '../contexts/contexts'
import HeroSection from '../sections/HeroSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleLeftSection from '../sections/FlashSaleLeftSection'
import FlashSaleRightSection from '../sections/FlashSaleRightSection'
import AboutUsSection from '../sections/AboutUsSection'


const HomeView = () => {
  const featured = useContext(FeaturedProductsContext)
  const flashSaleLeft = useContext(FlashSaleLeftContext)
  const flashSaleRight = useContext(FlashSaleRightContext)
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <NavigationBarSection />
      <HeroSection />
      <ProductGridSection title="Featured Products" items={featured}/>
      <BannerSection />
      <FlashSaleLeftSection items={flashSaleLeft}/>
      <FlashSaleRightSection items={flashSaleRight}/>
      <AboutUsSection />
      <FooterSection />
    </>
  )
}

export default HomeView