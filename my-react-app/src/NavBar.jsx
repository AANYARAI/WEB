import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <div id='navbar'>
            <Link to='/'>  
            <li>Home</li>
            </Link>
            <Link to="/contact"> 
            <li>Contact Us</li>
            </Link>
            <li>About</li>

        </div>
    </div>
  )
}

export default NavBar