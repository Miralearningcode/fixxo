import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'

const ProductDetailsView = () => {
    const params= useParams()

  return (
    <>
        <NavigationBarSection />
        <div className="container mt-5"> 
            <hi>{params.name}</hi>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView