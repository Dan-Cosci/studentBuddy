import React from 'react'
import { FaCog, FaHome, FaRobot, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useUI } from '../../../context/UIContext.jsx'
import useAuthStore from '../../auth/AuthStore.js';
import useAppStore from '../useAppStore.js';
import './navbar.scss'



const Navbar = () => {
  const { notebooks } = useAppStore();
  const { user } = useAuthStore();
  
  const pages = {
    sectionName: user?.username || "Guest",
    items: notebooks.map((notebook) => notebook.title)
  };
  const navigate = useNavigate();
  const { logout } = useAuthStore();


  const handleLogout = ()=>{
    logout();
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
        <li className="side-nav__li" onClick={handleLogout}>
          <FaSignOutAlt className="side-nav__li__icon" />
          <p>logout</p>
          </li>

      </div>

    </aside>
  )
}

export default Navbar