import React from 'react'
import PlaceholderMainLeft from '../assets/images/placeholders/placeholder-main-left.png'
import PlaceholderMainRight from '../assets/images/placeholders/placeholder-main-right.png'

const Hero = () => {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="hero-image-left"> 
              <img src={PlaceholderMainLeft} alt="placeholder-image" /> 
            </div> 
            <div className="hero-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <a href="#" className="btn btn-lg btn-theme">
                    <span className="btn-theme-left-border"></span>
                    SHOP NOW
                    <span className="btn-theme-right-border"></span>
                </a> 
            </div>
            <div className="hero-image-right">
              <img src={PlaceholderMainRight} alt="placeholder-image" /> 
            </div>
        </div>
    </section>
  )
}

export default Hero