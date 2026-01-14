import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => {
  return (
    <nav className="landing-nav">
      <div className="landing-nav__link-ct">
        <ul className='landing-nav__ul'>
          <li className='landing-nav__li'><Link className='landing-nav__link' to="/">Home</Link></li>
          <li className='landing-nav__li'><Link className='landing-nav__link' to="/login">Login</Link></li>
          <li className='landing-nav__li'><Link className='landing-nav__link' to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default LandingNav