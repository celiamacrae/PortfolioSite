import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1 id='site_title'>PORTFOLIO SITE</h1>
      <nav>
        <div id='nav'>
          <NavLink className='nav_item' to='/about'>About Me</NavLink>
          <NavLink className='nav_item' to='/education_and_experience'>Education and Experience</NavLink>
          <NavLink className='nav_item' to='/projects'>Projects</NavLink>
          <NavLink className='nav_item' to='/skills'>Skills</NavLink>
          <NavLink className='nav_item' to='/contact'>Contact</NavLink>
        </div>
      </nav>
    <hr />
  </div>
)

export default Navbar
