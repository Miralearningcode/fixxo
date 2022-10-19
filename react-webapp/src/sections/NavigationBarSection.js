import React from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from '../components/IconComponent'

const NavigationBarSection = () => {
  return (
    <nav className="navigation-bar">
        <div className="container">
            <NavLink className="logotype" to="/" end>Fixxo.</NavLink>
                <div className="navigation-links">
                    <NavLink className="navigation-link" to="/" end>Home</NavLink>
                    <NavLink className="navigation-link" to="/categories" end>Categories</NavLink>
                    <NavLink className="navigation-link" to="/products" end>Products</NavLink>
                    <NavLink className="navigation-link" to="/contacts" end>Contacts</NavLink>
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