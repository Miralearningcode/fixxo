import React from 'react'
import { NavLink } from 'react-router-dom'

const IconComponent = ({link, icon, quantity}) => {
  return (
    <NavLink className="icon btn btn-light btn-sm" to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default IconComponent