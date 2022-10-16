import React from 'react'
import Logotype from '../assets/images/logotype.svg'

const Navigationbar = () => {
  return (
    <nav className="navigation-bar">
    <div className="container">
        <div className="logotype">
            <img src={Logotype} alt="Fixxo logotype" />
        </div>
            <ul className="navigation-links">
                <a className="active" href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">Products</a>
                <a href="contact.html">Contacts</a>
            </ul>
        <div className="icons">
            <span className="icon">
                <li><a href="#" className="btn btn-light btn-sm"><i className="fa-light fa-magnifying-glass"></i></a></li>
                <li><a href="#" className="btn btn-light btn-sm"><i className="fa-light fa-repeat"></i></a></li>
                <li><a href="#" className="btn btn-light btn-sm"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span><i className="fa-light fa-heart"></i></a></li>
                <li><a href="#" className="btn btn-light btn-sm"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span><i className="fa-light fa-bag-shopping"></i></a></li>
            </span>
        </div>
    </div>
</nav>
  )
}

export default Navigationbar