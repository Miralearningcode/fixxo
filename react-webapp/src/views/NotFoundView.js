import React from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'

const NotFoundView = () => {
  return (
    <>
      <NavigationBarSection />
        <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px"} }>
          <h1>404 - Page Not Found</h1>
        </div>
        <div style={ { position: "fixed", bottom: "0"} }></div>
        <FooterSection />
    </>
  )
}

export default NotFoundView