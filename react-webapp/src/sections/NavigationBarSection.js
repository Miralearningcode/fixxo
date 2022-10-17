import React from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from '../components/IconComponent'

const NavigationBarSection = () => {
  return (
    <nav class="navigation-bar">
        <div class="container">
            <div class="logotype">
                Fixxo.
            </div>
                <div class="navigation-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </div>
            <div class="icons">
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