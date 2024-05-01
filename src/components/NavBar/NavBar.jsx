import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
  return (
	<div className='navBar'>
    <span><NavLink to={'/'} activeClassName='active' >Home</NavLink></span>
    <span><NavLink to={'/about'} activeClassName='active'>About</NavLink></span>
    <span><NavLink to={'contact'} activeClassName= 'active'>Contact</NavLink></span>
    
  </div>
  
  )
}

export default NavBar