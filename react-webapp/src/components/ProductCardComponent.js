import React from 'react'

const ProductCardComponent = () => {
  return (
    <div className="col">
        <div className="card">
            <div className= "card-img">
                <img src="assets/images/card.png" alt="" />
                <div className="card-menu">
                    <a href="#" className="btn btn-light btn-sm"><i className="fa-light fa-heart"></i></a>
                    <a href="#" className="btn btn-light btn-sm"><i className="fa-light fa-repeat"></i></a>
                    <a href="#" className="btn btn-light btn-sm"><i className="fa-light fa-bag-shopping"></i></a>
                </div>
                <a href="#" className="btn btn-lg btn-theme">
                    <span className="btn-theme-left-border"></span>
                    QUICK VIEW
                    <span className="btn-theme-right-border"></span>
                </a>
            </div>
            <div className="card-background"></div>
            <div className="card-body">
                <h5>Category</h5>
                <p>Modern Black Blouse</p>
                <div className="stars">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <p className="price">$35</p>
            </div>         
        </div>
    </div>
  )
}

export default ProductCardComponent