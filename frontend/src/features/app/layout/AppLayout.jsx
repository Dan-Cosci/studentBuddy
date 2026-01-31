import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { getData } from '../services/notes.service.js'
import { useUI } from '../../../context/UIContext.jsx'
import useKeyboard from '../../../context/useKeyboard.jsx'


const AppLayout = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[]);
  const { toggleSidebar } = useUI();

  useKeyboard(
    { ctrl: true, key: "b" },
    toggleSidebar
  );


  return (
    <>
      <main className="app-layout">
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout