import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
  ])

  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  ])


  return (
    <>
      <NavigationBarSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView