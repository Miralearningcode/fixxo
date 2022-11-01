import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = ({items = []}) => {
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Featured Products" products={items} />
      <FooterSection />
    </>
  )
}

export default HomeView