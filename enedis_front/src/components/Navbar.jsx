import React from 'react'
import logo from '../assets/logo_fondBleu.png'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarLogoContainer'>
            <Link to="/"><img className="navbarLogo" src={logo} alt="" /></Link>
        </div>
        <Link to='/signal'><span>Signaler</span></Link>
        <Link to='/signal'><span>Carte</span></Link>
    </div>
  )
}

export default Navbar