import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCardComponent = ({product}) => {

    const addToWishList = (e) => {
        console.log("added to wishlist")
    }

    const addToCompare = (e) => {
        console.log("added to compare")
    }

    const addToCart = (e) => {
        console.log("added to shopping cart")
    }


  return (
    <div className="col">
        <div className="card">
            <div className= "card-img">
                <img src={product.img} alt={product.name} />
                <div className="card-menu d-xl-none">
                    <button onClick={addToWishList} className="btn btn-light btn-sm" href="#"><i className="fa-light fa-heart"></i></button>
                    <button onClick={addToCompare} className="btn btn-light btn-sm" href="#"><i className="fa-light fa-code-compare"></i></button>
                    <button onClick={addToCart} className="btn btn-light btn-sm" href="#"><i className="fa-light fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                    <span className="btn-theme-left-border"></span>
                    QUICK VIEW
                    <span className="btn-theme-right-border"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className ="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{product.price}</p>
            </div>         
        </div>
    </div>
  )
}

export default ProductCardComponent