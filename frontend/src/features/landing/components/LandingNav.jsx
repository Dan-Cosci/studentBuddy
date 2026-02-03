import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './landingNav.scss'

const LandingNav = () => {
  const location = useLocation();
  const isAuthpage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <nav className="landing-nav">
      <Link to="/">
        <div className="landing-nav__logo-ct">
          <div className="landing-nav__logo-ct__img">
            <img src="./src/assets/images/logo.png" alt="" />
          </div>
          <div className="landing-nav__logo-ct__text">
            <h1>Student
              <span>Buddy</span>
            </h1>
          </div>
        </div>
      </Link>

      <div className="landing-nav__link-ct">
        {!isAuthpage ? (
          <ul className='landing-nav__ul'>
            <li className='landing-nav__li'><Link className='landing-nav__link' to="/login">Try Our App!</Link></li>
          </ul>
        ):(
          <ul className='landing-nav__ul'>
            <li className='landing-nav__li'>A buddy not a cheat sheet!</li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default LandingNav