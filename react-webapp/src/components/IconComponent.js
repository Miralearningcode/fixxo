import React from 'react'
import { NavLink } from 'react-router-dom'

const IconComponent = ({link, icon}) => {
  return (
    <NavLink className="icon btn btn-light btn-sm" to={link} >
        <i className={icon}></i>
    </NavLink>
  )
}

export default IconComponent