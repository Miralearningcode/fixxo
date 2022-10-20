import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from '../components/IconComponent'

const NavigationBarSection = () => {
    const [showMenu, setShowMenu] = useState(false) //get, set, läs, skriv

    const toggleMenu = () => {
        setShowMenu(!showMenu) //! = motsatsen till värdet
    }


  return (
    <nav className="navigation-bar">
        <div className="container">
            <NavLink className="logotype" to="/" end>Fixxo.</NavLink>
                <div className={ `navigation-links ${ showMenu ? "d-grid" : ""}` }>
                    <NavLink className="navigation-link" to="/" end>Home</NavLink>
                    <NavLink className="navigation-link" to="/categories" end>Categories</NavLink>
                    <NavLink className="navigation-link" to="/products" end>Products</NavLink>
                    <NavLink className="navigation-link" to="/contacts" end>Contacts</NavLink>
                </div>
            <div className="icons">
                <IconComponent link="/search" icon="fa-light fa-magnifying-glass" />
                <IconComponent hideOnMobile={true} link="/compare" icon="fa-light fa-code-compare" />
                <IconComponent hideOnMobile={true} quantity="1" link="/wishlist" icon="fa-light fa-heart" />
                <IconComponent quantity="3" link="/shoppingcart" icon="fa-light fa-bag-shopping" />

                <button onClick={toggleMenu} className="d-xl-none icon-component btn-light"><i className="fa-regular fa-bars"></i></button>

            </div>
        </div>
    </nav>
  )
}

export default NavigationBarSection