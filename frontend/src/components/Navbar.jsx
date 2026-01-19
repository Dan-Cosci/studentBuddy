import React from 'react'

const Navbar = () => {
  return (
    <aside className="side-nav">
      <ul className="side-nav__ul">
        <li className="side-nav__li">Home</li>
        <li className="side-nav__li">About</li>
        <li className="side-nav__li">Contact</li>
        <li className="side-nav__li">Settings</li>
        <li className="side-nav__li">Logout</li>
      </ul>

      <div className="legal">
        &copy; 2024 by StudentBuddy. All rights reserved.
      </div>
    </aside>
  )
}

export default Navbar