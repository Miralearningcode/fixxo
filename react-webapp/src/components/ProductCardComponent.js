import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductCardComponent = () => {
  return (
    <div className="col">
        <div className="card">
            <div className= "card-img">
                <img src="assets/images/card.png" alt="" />
                <div className="card-menu">
                    <button className="btn btn-light btn-sm" href="#"><i className="fa-light fa-heart"></i></button>
                    <button className="btn btn-light btn-sm" href="#"><i className="fa-light fa-code-compare"></i></button>
                    <button className="btn btn-light btn-sm" href="#"><i className="fa-light fa-bag-shopping"></i></button>
                </div>
                <NavLink To="/products/id" className="btn-theme btn-card-theme" href="#">
                    <span className="btn-theme-left-border"></span>
                    QUICK VIEW
                    <span className="btn-theme-right-border"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className ="card-category">Category</p>
                <h5 className="card-title">Modern Black Blouse</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">$35</p>
            </div>         
        </div>
    </div>
  )
}

export default ProductCardComponent