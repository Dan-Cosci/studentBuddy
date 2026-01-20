import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getData } from '../services/notes.service.js'


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