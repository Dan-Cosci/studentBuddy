import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useUI } from '../../../context/UIContext.jsx'
import useKeyboard from '../../../context/useKeyboard.jsx'
import useAuthStore from '../../auth/AuthStore.js'
import useAppStore from '../useAppStore.js'
import './applayout.scss'


const AppLayout = () => {
  const user = useAuthStore((state) => state.user);
  const initApp = useAppStore((state) => state.initApp);

  console.log(user);

  useEffect(() => {
    if (!user?._id || !initApp) return;


    const fetchData = async () => {
      try {
        const response = await initApp(user?._id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[user?._id, initApp]);
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