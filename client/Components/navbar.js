import React from 'react'
import {NavLink, Link} from 'react-router-dom'
// import {About, Projects, Skills, Contact} from './Components'


const Navbar = () => (
  <div>
    <h1 id='site_title'>PORTFOLIO SITE</h1>
      <nav>
        <div id='nav'>
          <NavLink className='nav_item' to='/about'>About Me</NavLink>
          <NavLink className='nav_item' to='/projects'>Projects</NavLink>
          <NavLink className='nav_item' to='/skills'>Skills</NavLink>
          <NavLink className='nav_item' to='/contact'>Contact</NavLink>
        </div>
      </nav>
    <hr />
  </div>
)

export default Navbar
