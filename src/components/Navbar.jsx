import React, { useEffect, useState } from 'react'
import '../styles/Navbar.scss'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

  return (
    <div className='navbar'>
        <nav>
            <div className="nav-item">
              <NavLink className="a"  to="/" activeclassname="active">Home</NavLink>
            </div>
            <div className="nav-item">
              <NavLink className="a" to="/skill" activeclassname="active">Skill</NavLink>
            </div>
            <div className="nav-item">
              <NavLink className='a' to="/project" activeclassname="active">Project</NavLink>
            </div>
            {/* <div className="nav-item">
              <NavLink className='a' to="/about" activeclassname="active">About</NavLink>
            </div> */}
            <div className="nav-item">
              <NavLink className='a' to="/contact" activeclassname="active">Contact</NavLink>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar
