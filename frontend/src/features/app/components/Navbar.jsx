import React, { useEffect } from 'react'
import { FaCog, FaHome, FaRobot, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useAuth } from '../context/AuthContext.jsx'
import { useUI } from '../../../context/UIContext.jsx'



const Navbar = () => {
  const pages = {
    sectionName:"Dan",
    items: ['Me', 'Diary', 'School']
  };
  const {logoutUser} = useAuth();
  const navigate = useNavigate();

  const logout = ()=>{
    logoutUser();
    navigate('/'); 
  }
  const { sidebarOpen } = useUI();


  return (
    <aside className={`side-nav ${sidebarOpen ? 'side-nav--open' : ''}`}>

      <div>
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
        </ul>
        <div className="side-nav__navi pages">
          <Dropdown sectionName={pages.sectionName} items={pages.items} />
        </div>
      </div>

      <div className="side-nav__navi">
        <li className="side-nav__li">
          <FaCog className="side-nav__li__icon" />
          <p>Settings</p>
          </li>
        <li className="side-nav__li" onClick={logout}>
          <FaSignOutAlt className="side-nav__li__icon" />
          <p>logout</p>
          </li>

      </div>

    </aside>
  )
}

export default Navbar