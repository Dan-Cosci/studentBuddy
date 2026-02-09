import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useUI } from '../../../context/UIContext.jsx'
import useKeyboard from '../../../context/useKeyboard.jsx'
import useAuthStore from '../../auth/AuthStore.js'
import useAppStore from '../useAppStore.js'
import Loading from '../../Loading.jsx'
import './applayout.scss'


const AppLayout = () => {
  const user = useAuthStore((state) => state.user);
  const initApp = useAppStore((state) => state.initApp);
  const [loading, setLoading] = useState(true);

  console.log(user);

  useEffect(() => {
    if (!user?._id || !initApp) return;


    const fetchData = async () => {
      try {
        const response = await initApp(user?._id);
        console.log(response);
        setTimeout(() => {
          setLoading(false);
        },2000);
        // setLoading(false); // This line was redundant as setLoading(false) is already inside the setTimeout
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[user?._id]);
  const { toggleSidebar } = useUI();

  useKeyboard(
    { ctrl: true, key: "b" },
    toggleSidebar
  );


  return (
    <>
     {!loading ? <main className="app-layout">
      <Navbar />
      <section className="app-content">
        <Outlet />
      </section>
    </main> : <Loading />}

    </>
  )
}

export default AppLayout