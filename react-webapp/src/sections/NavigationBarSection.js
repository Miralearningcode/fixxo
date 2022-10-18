import React from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from '../components/IconComponent'

const NavigationBarSection = () => {
  return (
    <nav className="navigation-bar">
        <div className="container">
            <div className="logotype">
                Fixxo.
            </div>
                <div className="navigation-links">
                    <NavLink className="navigation-link" to="/">Home</NavLink>
                    <NavLink className="navigation-link" to="/categories">Categories</NavLink>
                    <NavLink className="navigation-link" to="/products">Products</NavLink>
                    <NavLink className="navigation-link" to="/contacts">Contacts</NavLink>
                </div>
            <div className="icons">
                <IconComponent link="/search" icon="fa-light fa-magnifying-glass" />
                <IconComponent link="/compare" icon="fa-light fa-light fa-repeat" />
                <IconComponent link="/wishlist" icon="fa-light fa-heart" />
                <IconComponent link="/shoppingcart" icon="fa-light fa-bag-shopping" />
            </div>
        </div>
    </nav>
  )
}

export default NavigationBarSection