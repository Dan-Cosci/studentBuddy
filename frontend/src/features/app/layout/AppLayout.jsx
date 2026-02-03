import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { getData } from '../services/notes.service.js'
import { useUI } from '../../../context/UIContext.jsx'
import useKeyboard from '../../../context/useKeyboard.jsx'
import useAuthStore from '../../auth/AuthStore.js'
import './applayout.scss'


const AppLayout = () => {
  const { user } = useAuthStore();
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(user._id);
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
      <section className="app-content">
        <Outlet />
      </section>
    </main>

    </>
  )
}

export default AppLayout