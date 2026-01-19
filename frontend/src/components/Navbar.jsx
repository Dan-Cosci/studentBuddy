import React from 'react'
import { FaCog, FaHome, FaRobot, FaSearch } from 'react-icons/fa'
import Dropdown from './Dropdown';


const Navbar = () => {
  const pages = {
    sectionName:"Pages",
    items: ['Me', 'Diary', 'School']
  };


  return (
    <aside className="side-nav show">

      <ul className="side-nav__navi">
        <li className="side-nav__li">
          <FaSearch className="side-nav__li__icon" />
          <p>Search</p>
          </li>
        <li className="side-nav__li">
          <FaHome className="side-nav__li__icon" />
          <p>Home</p>
          </li>
        <li className="side-nav__li">
          <FaRobot className="side-nav__li__icon" />
          <p>Ookie AI</p>
          </li>
        <li className="side-nav__li">
          <FaCog className="side-nav__li__icon" />
          <p>Settings</p>
          </li>
      </ul>

      <div className="side-nav__navi pages">
        <Dropdown sectionName="Pages" items={pages.items} />
      </div>

    </aside>
  )
}

export default Navbar